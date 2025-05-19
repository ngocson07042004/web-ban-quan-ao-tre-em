import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDataGlobal } from '../hooks'
import { setLogin } from '../pages/Login'
import './scss/ItemProduct.scss'

function ItemProduct({ product }) {
    const navDetail = useNavigate()
    const { setCarts } = useDataGlobal()
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const fetchData = async() => {
        const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-user`)

        try {
            setAuth(
                res.data !== "Error" ? res.data.find(item => [item.username, item.email, item.phone].includes(setLogin.auth)) : {}
            )
        }
        catch(err) {
            console.log(err)
        }
        }
        fetchData()
    }, [])

    const fixPrice = price => {
        const number = price * 1000
        return`${number.toLocaleString("vi-VN")}đ`
    }

    const handleAddToCart = async(user, idProduct, nameProduct, imageUrl, price) => {
        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/post/api/add-to-cart`, { user, idProduct })

        try {

            if(res.data === "Error") {
                toast.error("Thêm giỏ hàng thất bại!")
            }
            else {
                toast.success("Thêm giỏ hàng thành công!")
                setCarts(prev => [...prev, {user, nameProduct, imageUrl, price}])
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
                
                <button type="button" className="btn text-center" id="btn-heart">
                    <i className="fa-solid fa-heart"></i>
                </button>

                <button type="button" className="btn text-center" id="btn-cart" 
                    onClick={() => handleAddToCart(auth.username, product.idProduct, product.nameProduct, product.imageUrl, product.price)}>
                    <i className="fa-solid fa-shopping-cart"></i>
                </button>

                <div className="btns-group d-flex justify-content-center">
                    <button 
                        className="btn btn-primary text-center" 
                        id="btn-detail" 
                        onClick={() => navDetail(`/product/${product.idProduct}`)}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct