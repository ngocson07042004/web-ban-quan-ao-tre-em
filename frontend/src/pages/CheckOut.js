import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Column, Layout } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'
import { formatPrice } from '../function'
import './scss/CheckOut.scss'

function CheckOut() {
    document.title = "Thanh toán"

    const navHome = useNavigate()
    const { checkLogin } = useDataGlobal()
    const [auth, setAuth] = useState({})
    const [sizes, setSizes] = useState({})
    const [checkProduct, setCheckProduct] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-user`)
        .then(res => setAuth(res.data?.find(item => item.username === checkLogin.auth) ?? {}))
        .catch(err => console.log(err))
    }, [checkLogin.auth])

    useEffect(() => {
        if(!auth.username) return
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/check-out`, {}, { withCredentials: true})
        .then(res => {
            const filtered = res.data?.filter(item => item.username === auth.username && item.statusOrder === "Chưa đặt hàng") ?? []
            setCheckProduct(filtered)
        })
        .catch(err => console.log(err))
    }, [auth.username])

    const handleChange = async (e, id) => {
        const newSize = e.target.value
        setSizes(prev => ({ ...prev, [id]: newSize }))

        try {
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/put/api/check-size-update/${id}`, 
                { chooseSize: newSize, id }, { withCredentials: true })

            if(res.data === "Error") {
                toast.error("Chọn size thất bại!")
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/put/api/order-submit`, 
                {}, { withCredentials: true })

            if(res.data === "Error") {
                toast.error("Đặt hàng thất bại!")
            }
            else {
                toast.success("Đặt hàng thành công!")
                navHome("/")
            }
            }
        catch(err) {
            console.log(err)
        }
    }
    
    const totalProduct = checkProduct?.reduce((sum, item) => sum + (Number(item.price * item.quantity)), 0) ?? 0
    const totalTransfer = Math.floor(Math.random() * 5) * 2

    return (
        <>
            <header className="header-check-out" style={{ width: "100%", height: "10%" }}>
                <Layout container={"container p-3"} row={"row"}>
                    <Column lg={12} className={"d-flex p-1"}>
                        <img src="../images/logo-title.png" alt="logo" className="img-fluid" />
                        <h3 className="mt-3">Thanh toán</h3>
                    </Column>
                </Layout>
            </header>

            <main className="main-check-out p-2" style={{ width: "100%", minHeight: "100vh", background: "rgba(167, 167, 167, 0.3)" }}>
                <Layout container={"container"} row="row">
                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={"bg-white mt-3 p-3 order-lg-1"}>
                        <div className="address-header">
                            <h6 className="fs-6 fw-bold mt-2 text-danger">
                                <i className="fa-solid fa-location-dot"></i>
                                <span> Địa chỉ nhận hàng </span>
                            </h6>
                        </div>

                        <div className="address-body mt-2">
                            <p>
                                <span className="fw-bold fs-6">Tên người nhận: </span>
                                <span className="text-success">{`${auth?.fullname}`}</span><br/>
                                <span className="fw-bold fs-6">Số điện thoại: </span>
                                <span className="text-success">{`${auth?.phone}`}</span><br/>
                                <span className="fw-bold fs-6">Địa chỉ: </span>
                                <span className="text-success">{`${auth?.address}`}</span>
                            </p>
                        </div>
                    </Column>

                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={"payment bg-white mt-3 p-3 order-3 order-md-2 order-lg-2"}>
                       <form onSubmit={handleSubmit}>
                            <div className="payment-header d-md-flex">
                                <h6 className="fs-6 fw-bold mt-2 text-danger d-block mt-2">
                                    <i className="fa-solid fa-credit-card"></i>
                                    <span> Phương thức thanh toán </span>
                                </h6>

                                <p className="d-block mt-1 ms-2" style={{
                                    border: "1px solid gray",
                                    borderRadius: "5px",
                                    padding: "3px",
                                }}>Thanh toán khi nhận hàng</p>
                            </div>

                            <div className="payment-body mt-3">
                                <p>
                                    <span className="fw-bold fs-6">Tổng tiền hàng: </span><span className="text-success">{`${formatPrice(totalProduct)}`}</span><br/>
                                    <span className="fw-bold fs-6">Số tiền phí vận chuyển: </span><span className="text-success">{`${formatPrice(totalTransfer) || "Miễn phí"}`}</span><br/>
                                    <span className="fw-bold fs-6">Tổng thanh toán: </span><span className="text-success fw-bold fs-6">{`${formatPrice(totalProduct + totalTransfer)}`}</span>
                                </p>  
                            </div>

                            <div className="payment-footer mt-3">
                                <button type="submit" className="btn btn-danger text-white">Đặt hàng</button>
                            </div>
                       </form>
                    </Column>

                    <Column col={12} sm={12} md={12} lg={12} xl={12} xxl={12} className={"bg-white mt-3 p-3 order-2 order-md-3 order-lg-3"}>
                        <div className="product-header">
                            <h6 className="fs-6 fw-bold mt-2 text-danger">
                                <i className="fa-solid fa-clipboard"></i>
                                <span> Sản phẩm </span>
                            </h6>
                        </div>

                        <div className="product-body mt-2">
                            {checkProduct && checkProduct.length > 0 ?
                            checkProduct.map(item => (
                                <div className="show-check-product" key={item.idOrder}>
                                    <div className="show-img">
                                        <img src={item.imageUrl} alt={item.nameProduct}/>
                                    </div>

                                    <div className="show-title">
                                        <h6>{item.nameProduct}</h6>
                                        <span>Số lượng: {item.quantity}</span>
                                        <p className="text-success">Giá: {formatPrice(item.price)}</p>
                                        <select 
                                            onChange={(e) => handleChange(e, item.idOrder)} 
                                            className="form-select form-control"
                                            value={sizes[item.idOrder] || "Size XS"}
                                            id="choose-size" 
                                            name="chooseSize"
                                        >    
                                            <option value="Size XS">Size XS</option>
                                            <option value="Size S">Size S</option>
                                            <option value="Size M">Size M</option>
                                            <option value="Size L">Size L</option>
                                            <option value="Size XL">Size XL</option>
                                            <option value="Size XXL">Size XXL</option>
                                        </select>
                                    </div>
                                </div>
                            )) : <p>Chưa có sản phẩm nào để đặt hàng!</p>
                            }
                        </div>
                        
                        <div className="product-footer">
                            <p className="text-end small">
                                {`Tổng số tiền(${checkProduct?.length ?? 1} sản phẩm): `} 
                                <span className="text-success fs-6">{formatPrice(totalProduct)}</span>
                            </p>
                        </div>
                    </Column>
                </Layout>
            </main>
        </>
    )
}

export default CheckOut