import { useDeferredValue, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { v7 as uuid } from 'uuid'
import { Row, Column } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'
import { shortenText, formatPrice } from '../function'
import './scss/Cart.scss'

function Cart() {
    const { isShowCart, setIsShowCart, carts, setCarts, 
        selectedCartIds, setSelectedCartIds } = useDataGlobal()
    
    const navCheckOut = useNavigate()

    const deferredCart = useDeferredValue(carts)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])
    
    // Hàm tìm kiếm sản phẩm
    const handleSearch = (e) => {
        const keyword = e.target.value
        setSearch(keyword)

        if (keyword !== "") {
            setFilter(
                deferredCart.filter(item =>
                    item.nameProduct.toLowerCase().includes(keyword.toLowerCase())
                )
            )
        } else {
            setFilter([])
        }
    }

    // Hàm xoá sản phẩm
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                `${process.env.REACT_APP_URL_BACKEND}/delete/api/cart-product/${id}`,
                { withCredentials: true }
            )

            if (res.data === "Error") {
                toast.error("Xoá sản phẩm thất bại!")
            } 
            else if (res.data === "Token not provided") {
                toast.error("Bạn chưa được cấp quyền để sử dụng tính năng này!")
            } 
            else if (res.data === "Invalid or expired token") {
                toast.error("Quyền truy cập đã hết hạn hoặc xảy ra lỗi!")
            } 
            else {
                toast.success("Xoá sản phẩm thành công!")
                setCarts(prev => prev.filter(item => item.idCart !== id))
                setSelectedCartIds(prev => prev.filter(itemId => itemId !== id))
            }
        } catch (err) {
            console.error(err)
        }
    }

    // Hàm check sản phẩm
    const handleCheckItem = id => {
        setSelectedCartIds(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }

    // Hàm cập nhật số lượng
    const updateQuantity = async (idCart, user, idProduct, newQuantity) => {
        try {
            const res = await axios.put(
                `${process.env.REACT_APP_URL_BACKEND}/put/api/cart-product`,
                { user, idProduct, quantity: newQuantity },
                { withCredentials: true }
            )

            if (res.data === "Error") {
                toast.error("Cập nhật số lượng thất bại!")
                return
            }

            setCarts(prev =>
                prev.map(item =>
                    item.idCart === idCart ? { ...item, quantity: newQuantity } : item
                )
            )
        } catch (err) {
            console.error(err)
            toast.error("Lỗi khi kết nối tới server!")
        }
    }

    // Hàm tăng số lượng
    const handleIncrease = (idCart) => {
        const item = carts.find(c => c.idCart === idCart)
        const { username, idProduct } = item
        const newQuantity = item.quantity < 10 ? item.quantity + 1 : 10
        updateQuantity(idCart, username, idProduct, newQuantity)
    }
    
    // Hàm giảm sản phẩm
    const handleDecrease = (idCart) => {
        const item = carts.find(c => c.idCart === idCart)
        const { username, idProduct } = item
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1
        updateQuantity(idCart, username, idProduct, newQuantity)
    }

    const handlePurchase = async () => {
        try {
            const selectedItems = carts.filter(item => selectedCartIds.includes(item.idCart))    

            const addOrders = selectedItems.map(o => ({
                idOrder: uuid(),
                idProduct: o.idProduct,
                username: o.username,
                size: o.size,
                quantity: o.quantity,
            }))

            const res = await axios.post(
                `${process.env.REACT_APP_URL_BACKEND}/post/api/add-to-order`,
                { orders: addOrders },
                { withCredentials: true }
            )

            if (res.data === "Error") {
                console.log("Error")
                return
            } 
            else {
                setSelectedCartIds([])
                setIsShowCart(false)
                navCheckOut("/auth/check-out")
            }
        } catch (err) {
            console.error(err)
            toast.error("Lỗi kết nối đến server!")
        }
    }

    const displayCart = search !== "" ? filter : deferredCart
    const selectedItems = displayCart?.filter(item => selectedCartIds.includes(item.idCart)) ?? []
    const totalPrice = selectedItems?.reduce((sum, item) => sum + (Number(item.price * item.quantity)), 0) ?? 0

    return (
        <div className="container-cart"
            style={{
                transform: isShowCart ? "translateX(0)" : "translateX(-100%)",
                boxShadow: isShowCart ? "3px 0 10px black" : "none"
            }}>
            <div className="cart-header">
                <div className="cart-title">
                    <h5>Giỏ hàng ({carts.length})</h5>
                    <button type="button" className="btn" id="btn-close" onClick={() => {
                        setIsShowCart(false)
                        setSelectedCartIds([])
                    }}>
                        <i className="fa-solid fa-xmark fs-5 text-white"></i>
                    </button>
                </div>

                <div className="input-group">
                    <span className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                        type="search"
                        name="searchCart"
                        id="search-cart"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Tìm kiếm sản phẩm trong giỏ hàng..."
                    />
                </div>
            </div>

            <div className="cart-body">
                <ul className="list-cart">
                    {Array.isArray(displayCart) && displayCart.length > 0 ?
                        displayCart.map(item => (
                            <li key={item.idCart}>
                                <input
                                    type="checkbox"
                                    name={`checkCart-${item.idCart}`}
                                    checked={selectedCartIds.includes(item.idCart)}
                                    onChange={() => handleCheckItem(item.idCart)}
                                />
                                <img src={item.imageUrl} alt={item.nameProduct} />
                                <h6>{shortenText(item.nameProduct, 30)}</h6>
                                <span>{formatPrice(item.price)}</span>

                                <div className="quantity-product">
                                    <button type="button" className="btn btn-decrease" onClick={() => handleDecrease(item.idCart)}>
                                        <i className="fa-solid fa-caret-left text-success fs-6"></i>
                                    </button>
                                    <input
                                        type="text"
                                        name="quantity"
                                        id="quantity"
                                        value={item.quantity}
                                        maxLength={3}
                                        readOnly
                                    />
                                    <button type="button" className="btn btn-increase" onClick={() => handleIncrease(item.idCart)}>
                                        <i className="fa-solid fa-caret-right text-success fs-6"></i>
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-danger text-white"
                                    onClick={() => handleDelete(item.idCart)}>Xoá</button>
                            </li>
                        ))
                        :
                        <li className="text-center">Chưa có sản phẩm nào!</li>
                    }
                </ul>
            </div>

            <div className="cart-footer">
                <Row row={"row"}>
                    <Column className={"cart-footer-item"}>
                        <span>Tổng cộng: <span className="text-success">{formatPrice(totalPrice)}</span></span>
                    </Column>

                    <Column className={"cart-footer-item"}>
                        <button
                            type="button"
                            id="btn-cart-sell"
                            className="btn btn-danger"
                            disabled={selectedItems.length === 0}
                            style={{ zIndex: 1 }}
                            onClick={handlePurchase}
                        >
                            Mua hàng ({selectedItems.length})
                        </button>
                    </Column>
                </Row>
            </div>
        </div>
    )
}

export default Cart