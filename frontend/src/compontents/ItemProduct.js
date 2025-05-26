import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { v7 as uuid } from 'uuid'
import { toast } from 'react-toastify'
import { useDataGlobal } from '../hooks'

function ItemProduct({ product }) {
    const navDetail = useNavigate()
    const { setCarts, checkLogin } = useDataGlobal()

    const fixPrice = price => {
        const number = price * 1000
        return`${number.toLocaleString("vi-VN")}đ`
    }

    const handleAddToCart = async (user, idProduct, nameProduct, imageUrl, price) => {
        const uid = uuid()
        const res = await axios.post(
            `${process.env.REACT_APP_URL_BACKEND}/post/api/add-to-cart`,
            { uid, user, idProduct },
            { withCredentials: true }
        )
        
        if(!user) {
            toast.error("Bạn chưa đăng nhập!")
            return
        }

        try {
            if(res.data === "Error") {
                toast.error("Thêm sản phẩm thất bại!")
            }
            else if(res.data === "Token not provided") {
                toast.error("Bạn chưa được cấp quyền để sử dụng tính năng này!")
            }
            else if(res.data === "Invalid or expired token") {
                toast.error("Quyền truy cập đã hết hạn hoặc xảy ra lỗi!")
            }
            else {
                toast.success("Thêm giỏ hàng thành công!")
                setCarts(prev => [...prev, {uid, user, nameProduct, imageUrl, price}])
            }
        }
        catch(err) {
            toast.error("Lỗi kết nối tới máy chủ!")
        }
    }

    return (
        <div className="card item-product">
            <img src={product.imageUrl} className="card-img-top" alt={product.imageUrl}/>
            
            <div className="card-body">
                <h5 className="card-title fs-6">{product.nameProduct}</h5>
                
                <p className="card-text fs-6">Giá: {fixPrice(product.price)}</p>

                <div className="btns-group d-flex justify-content-center">
                    <button 
                        className="btn btn-primary text-center fs-6" 
                        id="btn-detail" 
                        onClick={() => navDetail(`/product/${product.idProduct}`)}
                    >
                        Xem chi tiết
                    </button>

                    <button type="button" className="btn text-center" id="btn-cart" 
                        onClick={() => handleAddToCart(checkLogin.auth, product?.idProduct, product?.nameProduct, product?.imageUrl, product.price)}
                    >
                        <i className="fa-solid fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ItemProduct)