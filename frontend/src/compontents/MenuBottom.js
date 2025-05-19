import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setLogin } from '../pages/Login'
import { useDataGlobal } from '../hooks'
import './scss/MenuBottom.scss'

function MenuBottom() {
    const navHome = useNavigate()
    const navLogin = useNavigate()
    const navRecruitment = useNavigate()
    const { setIsShowCart, setIsShowMenu } = useDataGlobal()

    const [cartLength, setCartLength] = useState(0)
   
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/cart-product`)

            try {
                setCartLength(res.data === "Error" ? 0 : res.data.length)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return (
        <nav className="navbar fixed-bottom">
            <ul className="navbar-nav d-flex flex-row justify-content-around w-100 text-center">
                <li className="nav-item" onClick={() => navHome("/")}>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-house fs-5"></i>
                        <span className="small">Trang chủ</span>
                    </div>
                </li>

                <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => {
                    setIsShowCart(false)
                    setIsShowMenu(true)
                }}>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-list fs-5"></i>
                        <span className="small">Danh mục</span>
                    </div>
                </li>

                <li id="btn-cart" className="nav-item d-flex flex-column align-items-center" style={{ cursor: "pointer" }} 
                    onClick={() => {
                        setLogin.status ? setIsShowCart(true) : navLogin("/auth/login")
                        setIsShowMenu(false)
                    }}>
                    <span className="quantity translate-middle badge rounded-pill bg-danger">
                        {setLogin.status ? cartLength : 0}
                    </span>
                    <i className="fa-solid fa-basket-shopping fs-5"></i>
                    <span className="small">Giỏ hàng</span>  
                </li>

                <li className="nav-item"  onClick={() => navRecruitment("/recruitment")}>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-newspaper fs-5"></i>
                        <span className="small">Tuyển dụng</span>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-heart fs-5"></i>
                        <span className="small">Yêu thích</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default MenuBottom