import { useNavigate } from 'react-router-dom'
import './scss/MenuBottom.scss'

function MenuBottom() {
    const navHome = useNavigate()
    const navProduct = useNavigate()
    const navRecruitment = useNavigate()

    return (
        <nav className="navbar fixed-bottom">
            <ul className="navbar-nav d-flex flex-row justify-content-around w-100 text-center">
                <li className="nav-item" onClick={() => navHome("/")}>
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-house fs-5"></i>
                        <span className="small">Trang chủ</span>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="d-flex flex-column align-items-center">
                        <i className="fa-solid fa-list fs-5"></i>
                        <span className="small">Danh mục</span>
                    </div>
                </li>

                <li id="btn-cart" className="nav-item d-flex flex-column align-items-center"  onClick={() => navProduct("/product")}>
                    <span className="quantity translate-middle badge rounded-pill bg-danger">0</span>
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