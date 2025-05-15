import { Link } from 'react-router-dom'

function MenuProduct({ className }) {
    return (
        <ul className={className} style={{ zIndex: 2 }}>
            <li>
                <Link className="dropdown-item" to="/product">
                    <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/bo-quan-ao-lullaby-nh738r-cai-vai-cho-be-trai-2.jpg.webp" alt="Quần áo bé trai" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                    <span>  Quần áo bé trai </span>
                </Link>
            </li>
            
            <li>
                <Link className="dropdown-item" to="/product">
                    <img src="https://phucankids.com/wp-content/uploads/2021/10/Bo-be-gai-Nexxi-quan-hoa-300x300.jpg" alt="Quần áo bé gái" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                    <span>  Quần áo bé gái  </span>
                </Link>
            </li>

            <li>
                <Link className="dropdown-item" to="/product">
                    <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/2024/04/mu-vanh-tron-hinh-gau-4.jpg.webp" alt="Mũ và phụ kiện" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                    <span>  Mũ và phụ kiện  </span>
                </Link>
            </li>

            <li>
                <Link className="dropdown-item" to="/product">
                    <img src="https://mbmart.com.vn/thumbnails/products/medium/uploads/2024/04/mu-vanh-tron-hinh-gau-4.jpg.webp" alt="Mũ và phụ kiện" style={{ width: "30px", height: "30px"}} className="rounded-circle"/>
                    <span>  Giày dép    </span>
                </Link>
            </li>
        </ul>
    )
}

export default MenuProduct