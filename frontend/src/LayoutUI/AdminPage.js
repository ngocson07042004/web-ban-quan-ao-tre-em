import { NavLink, Route, Routes } from 'react-router-dom'
import { DashBoard,ProductAdmin, OrderManager }from '../pages-admin'
import './scss/AdminPage.scss'

function AdminPage() {
    document.title = "T-Shop | Trang quản trị viên"

    return (
        <div className="container-admin">
            <div className="admin-sidebar bg-secondary">
                <ul>
                    <li>
                        <NavLink to="/admin" className="text-white">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/user" className="text-white">
                            Tài khoản
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/admin/product-admin" className="text-white">
                            Sản phẩm
                        </NavLink>
                    
                    </li>

                    <li>
                        <NavLink to="/admin/order-manager" className="text-white">
                            Quản lý hoá đơn
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/admin/chat-manager" className="text-white">
                            Quản lý tin nhắn
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="admin-content">
                <Routes>
                    <Route path="/admin" element={<DashBoard/>}/>
                    <Route path="/admin/product-admin" element={<ProductAdmin/>}/>
                    <Route path="/admin/order-manager" element={<OrderManager/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AdminPage