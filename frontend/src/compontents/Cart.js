import { useDeferredValue, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Row, Column } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'
import './scss/Cart.scss'

function Cart() {
    const { isShowCart, setIsShowCart, carts, setCarts } = useDataGlobal()
    const [selectedCartIds, setSelectedCartIds] = useState([])

    const deferredCart = useDeferredValue(carts)

    // Hàm xoá sản phẩm
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_URL_BACKEND}/delete/api/cart-product/${id}`)
            
            // Cập nhật lại carts và selectedCartIds
            setCarts(prev => prev.filter(item => item.idCart !== id))
            setSelectedCartIds(prev => prev.filter(itemId => itemId !== id))
            if(res.data === "Error") {
                toast.error("Xoá sản phẩm thất bại!")
            }
            else {
                toast.success("Xoá sản phẩm thành công!")
            }
        } 
        catch (err) {
            console.error(err)
            alert("Xóa sản phẩm thất bại!")
        }
    }

    // Check sản phẩm
    const handleCheckItem = id => {
        setSelectedCartIds(prev => 
            prev.includes(id) 
            ? prev.filter(itemId => itemId !== id) 
            : [...prev, id]
        )
    }

    // Hàm chuyển đổi
    const shortenText = (text, maxLength) => {
        if (typeof text !== 'string') return ''
        if (text.length <= maxLength) return text
        return text.slice(0, maxLength).trim() + '...'
    }


    // Hàm định dạng mệnh giá
    const formatPrice = (price) => {
        const priceVND = Number(price) * 1000
        return `${priceVND.toLocaleString("vi-VN")}đ`
    }

    // Hàm check all sản phẩm
    const handleCheckAll = () => {
        if (selectedCartIds.length === deferredCart.length) {
            setSelectedCartIds([])
        } 
        else {
            const allIds = Array.isArray(deferredCart) ? deferredCart.map(item => item.idCart) : []
            setSelectedCartIds(allIds)
        }
    }

    const selectedItems = Array.isArray(deferredCart) ? deferredCart.filter(item => selectedCartIds.includes(item.idCart)) : []
    const totalPrice = Array.isArray(selectedItems) ? selectedItems.reduce((sum, item) => sum + Number(item.price), 0) : 0

    return (
        <div className="container-cart" 
            style={{ 
                transform: isShowCart ? "translateX(0)" : "translateX(-100%)",
                boxShadow: isShowCart ? "3px 0 10px black" : "none"
            }}>
            <div className="cart-header">
                <h5>Giỏ hàng({carts.length})</h5>
                <button type="button" className="btn" id="btn-close" onClick={() => setIsShowCart(false)}>
                    <i className="fa-solid fa-xmark fs-4"></i>
                </button>
            </div>

            <div className="cart-body">
                <ul className="list-cart">
                    {Array.isArray(deferredCart) && deferredCart.length > 0 ? 
                        deferredCart.map(item => (
                            <li key={item.idCart}>
                                <input 
                                    type="checkbox" 
                                    name="checkCart"
                                    checked={selectedCartIds.includes(item.idCart)}
                                    onChange={() => handleCheckItem(item.idCart)}
                                />
                                <img src={item.imageUrl} alt={item.nameProduct} />
                                <h5>{shortenText(item.nameProduct, 30)}</h5>
                                <span>{formatPrice(item.price)}</span>
                                <button 
                                    type="button" 
                                    className="btn btn-danger text-white" 
                                    onClick={(() => handleDelete(item.idCart))}>Xoá</button>
                            </li>
                        ))
                        :
                        (
                            <li className="text-center">Chưa có sản phẩm nào!</li>
                        )
                    }
                </ul>
            </div>

            <div className="cart-footer">
                <Row row={"row"}>
                    <Column className={"cart-footer-item"}>
                        <input
                            id="check-all-cart"
                            className="form-check-input mt-0"
                            type="checkbox"
                            checked={selectedCartIds.length === deferredCart.length && deferredCart.length > 0}
                            onChange={handleCheckAll}
                        />
                        <label htmlFor="check-all-cart">Tất cả</label>
                    </Column>

                    <Column className={"cart-footer-item"}>
                        <span>Tổng cộng: <span className="text-success">{formatPrice(totalPrice)}</span></span>
                    </Column>

                    <Column className={"cart-footer-item"}>
                        <button type="button" id="btn-cart-sell" className="btn btn-danger">
                            Mua hàng({selectedItems.length})
                        </button>
                    </Column>
                </Row>
            </div>
        </div>
    )
}

export default Cart