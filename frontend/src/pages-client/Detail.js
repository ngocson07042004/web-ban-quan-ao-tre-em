import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'
import { useAxios, useDataGlobal } from '../hooks'
import { Container, Row, Column} from '../LayoutContainer'
import { formatPrice } from '../function'
import { ModalTransportation } from '../compontents/Modal'
import { handleAddToCart } from '../function'
import './scss/Detail.scss'

function Detail() {
    const { detail }  = useParams()
    const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-product`)
    const { checkLogin, setCarts, carts } = useDataGlobal()
    const [productDetail, setProductDetail] = useState({})
    const [quantityCart, setQuatityCart] = useState({})

    useEffect(() => {
        if(data) {
            setProductDetail(data.find(d => d.idProduct === detail))
        }

        setQuatityCart(carts.find(item => item.idProduct === detail))
    }, [data, detail, carts])

    const convertSize = (size) => {
        return size ? size.split(",") : []
    }

    // Hàm cập nhật số lượng
    const updateQuantity = async (user, idProduct, newQuantity) => {
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
                    item.idProduct === idProduct ? { ...item, quantity: newQuantity } : item
                )
            )
        } catch (err) {
            console.error(err)
            toast.error("Lỗi khi kết nối tới server!")
        }
    }

    // Hàm tăng số lượng
    const handleIncrease = (idProduct, user) => {
        const item = carts.find(c => c.idProduct === idProduct)
        const newQuantity = item.quantity + 1
        updateQuantity(user, idProduct, newQuantity)
    }

    // Hàm giảm sản phẩm
    const handleDecrease = (idProduct, user) => {
        const item = carts.find(c => c.idProduct === idProduct)
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1
        updateQuantity(user, idProduct, newQuantity)
    }

    const sizes = convertSize(productDetail?.size)

    document.title = productDetail?.nameProduct ?? "T-Shop"

    return (
        <main className="main" style={{ minHeight: "100vh" }}>
            <Container container={"container"}>
                <Row row={"row mt-2"}>
                    <Column col={12} sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
                        <Link to="/">Trang chủ</Link> / 
                        <Link to="/product">Sản phẩm</Link> /
                        <span className="text-success">{productDetail?.nameProduct}</span>
                    </Column>
                </Row>

                <Row row={"row mt-3"}>
                    <Column col={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                        <div className="title-product d-lg-none d-md-block">
                            <h4>{productDetail?.nameProduct}</h4>
                        </div>
                        <img src={productDetail?.imageUrl} alt={productDetail?.nameProduct} className="w-100"/>
                    </Column>

                    <Column col={12} sm={12} md={12} lg={7} xl={7} xxl={7} className="p-md-2">
                        <form className="form-detail">
                            <div className="title-product d-lg-block d-md-none">
                                <h4>{productDetail?.nameProduct}</h4>
                            </div>

                            <div className="price-product mt-md-2">
                                <p className="fw-bold fs-4 text-success">{formatPrice(productDetail?.price)}</p>
                            </div>

                            <div className="transaction-product mt-md-2">
                                <p>
                                    Vận chuyển: 
                                    <button type="button" className="btn text-primary" data-bs-toggle="modal" data-bs-target="#ModalTransportation">
                                        Thông tin về phí vận chuyển
                                    </button>
                                    <ModalTransportation/>
                                </p>
                            </div>

                            <div className="size-product mt-md-2">
                                <select name="size" id="size" className="form-select form-control">
                                    <option value="">-- Chọn size --</option>
                                    {sizes.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="quantity-product mt-3 mt-md-2">
                                <p>Số lượng:
                                    <button 
                                        type="button" 
                                        className="btn btn-decrease" 
                                        onClick={() => handleDecrease(productDetail.idProduct, checkLogin.auth)}
                                        disabled={!checkLogin.status}
                                        style={{ border: "none", outline: "none" }}
                                    >
                                        <i className="fa-solid fa-caret-left text-success fs-6"></i>
                                    </button>
                                    <input 
                                        type="text" 
                                        name="quantity" 
                                        id="quantity"
                                        value={quantityCart?.quantity ?? 1}
                                        maxLength={3}
                                        readOnly
                                    />
                                    <button 
                                        type="button" 
                                        className="btn btn-increase" 
                                        onClick={() => handleIncrease(productDetail.idProduct, checkLogin.auth)}
                                        style={{ border: "none", outline: "none" }}
                                        disabled={!checkLogin.status}
                                    >
                                        <i className="fa-solid fa-caret-right text-success fs-6"></i>
                                    </button>
                                </p>
                            </div>

                            <div className="d-flex justify-content-center w-100 mt-md-2 mt-3 p-3">
                                <button 
                                    type="button" 
                                    className="btn btn-outline-success rounded" 
                                    onClick={() => handleAddToCart(checkLogin.auth, productDetail?.idProduct, productDetail?.nameProduct, productDetail?.imageUrl, productDetail.price, setCarts)}
                                >
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                            </div>
                        </form>
                    </Column>
                </Row>

                <Row row={"row"}>
                    <Column col={12} sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
                        <h6>MÔ TẢ SẢN PHẨM: </h6>
                        <p>{productDetail?.description}</p>
                    </Column>
                </Row>
            </Container>
        </main>
    )
}

export default Detail