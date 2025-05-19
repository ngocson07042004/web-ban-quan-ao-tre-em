import { Link } from 'react-router-dom'
import { Info } from './'
import './scss/MenuSlider.scss'
import { useDataGlobal } from '../hooks'

const Menubar = [
    {id: 1, name: "Trang chủ" , link: "/"},
    {id: 2, name: "Giới thiệu" , link: "/introduction"},
    {id: 3, name: "Sản phẩm" , link: "/product"},
    {id: 4, name: "Câu hỏi thường gặp" , link: "/question"},
    {id: 5, name: "Tuyển dụng" , link: "/recruitment"},
    {id: 6, name: "Liên hệ" , link: "/contact"},
]

function MenuSlider() {
    const { isShowMenu, setIsShowMenu, setIsShowCart } = useDataGlobal()

    return (
        <div 
            className="container-menu-slider"
            style={{ 
                transform: isShowMenu ? "translateX(0)" : "translateX(-100%)",
                boxShadow: isShowMenu ? "3px 0 10px black" : "none"
            }}
        >
            <div className="header-menu-slider">
                <h6 className="text-white">Danh sách sản phẩm</h6>

                <button
                    type="button" 
                    className="btn text-white" 
                    id="btn-close"
                    onClick={() => {
                        setIsShowCart(false)
                        setIsShowMenu(false)
                    }}
                >
                    <i className="fa-solid fa-xmark fs-5"></i>
                </button>
            </div>

            <div className="product-menu-slider">
                <ul className="product-menu">
                    <li>
                        <Link className="text-dark" to="/product">
                            <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/bo-quan-ao-lullaby-nh738r-cai-vai-cho-be-trai-2.jpg.webp" alt="Quần áo bé trai" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                            <span>  Quần áo bé trai </span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link className="text-dark" to="/product">
                            <img src="https://phucankids.com/wp-content/uploads/2021/10/Bo-be-gai-Nexxi-quan-hoa-300x300.jpg" alt="Quần áo bé gái" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                            <span>Quần áo bé gái</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="text-dark" to="/product">
                            <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/2024/04/mu-vanh-tron-hinh-gau-4.jpg.webp" alt="Mũ và phụ kiện" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                            <span>Mũ và phụ kiện</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="text-dark" to="/product">
                            <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/2024/04/mu-vanh-tron-hinh-gau-4.jpg.webp" alt="Mũ và phụ kiện" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                            <span>Giày dép</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="content-menu-slider">
                <ul className="menu-slider">
                    {Menubar.map(item => (
                        <li key={item.id}>
                            <Link className="nav-link" to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                    <li><Info/></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuSlider