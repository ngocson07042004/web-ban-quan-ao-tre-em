import { NavLink } from 'react-router-dom'
import { Layout } from '../LayoutContainer'
import { MenuProduct } from './'
import './scss/Navbar.scss'

const Menubar = [
    {id: 1, name: "Trang chủ" , link: "/"},
    {id: 2, name: "Giới thiệu" , link: "/introduction"},
    {id: 3, name: "Sản phẩm" , link: "/product"},
    {id: 4, name: "Câu hỏi thường gặp" , link: "/question"},
    {id: 5, name: "Tuyển dụng" , link: "/recruitment"},
    {id: 6, name: "Liên hệ" , link: "/contact"},
]

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Layout container={"container"} row={"row"}>
                <div className="d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-xxl-3">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danh sách sản phẩm
                        </button>

                        <MenuProduct className={"dropdown-menu"}/>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center col-lg-9 col-xl-9 col-xxl-9">
                    <ul className="border-start navbar-nav">
                        {Menubar.map(item => {
                            if(item.link === "/product") {
                                return (
                                    <li className="nav-item drop-menu" key={item.id}>
                                        <NavLink className="nav-link" to={item.link}>
                                            {item.name}
                                            <i className="fa-solid fa-caret-down"></i>
                                        </NavLink>
                                            
                                        <MenuProduct className={"sub-menu"}/>
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link" to={item.link}>{item.name}</NavLink>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </Layout>
        </nav>
    )
}

export default Navbar