import { Link } from 'react-router-dom'

function MenuProduct({ className }) {
    return (
        <ul className={className}>
            <li><Link className="dropdown-item" to="/product">Sản phẩm 1</Link></li>
            <li><Link className="dropdown-item" to="/product">Sản phẩm 2</Link></li>
            <li><Link className="dropdown-item" to="/product">Sản phẩm 3</Link></li>
        </ul>
    )
}

export default MenuProduct