import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Column, Layout } from '../LayoutContainer'

function ChangePassword() {
    document.title = "Đổi mật khẩu"

    const loginNav = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        role: ""
    })

    const handleChange = (e) =>{
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value.trim() })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { password, confirmPassword } = formData

        const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/put/api/change-password`, formData)
        

        if(password !== confirmPassword) {
            toast.info("Mật khẩu không khớp")
        }

        try {
            if(res.data === "Username is not exist") {
                toast.info("Tài khoản không tồn tại!")
            }
            else if(res.data === "Error") {
                toast.error("Đổi mật khẩu thất bại!")
            }
            else {
                toast.success("Đổi mật khẩu thành công")
                loginNav("/auth/login")
            }
        }
        catch(err) {
            console.log(err)
            toast.error("Không thể kết nối tới máy chủ!")
        }
    }

    return (
        <>
            <header className="header-change-password" style={{ width: "100%", height: "10%" }}>
                <Layout container={"container p-3"} row={"row"}>
                    <Column lg={12} className={"d-flex p-1"}>
                        <img src="../images/logo-title.png" className="img-fluid" alt="logo" />
                        <h3 className="mt-3">Đổi mật khẩu</h3>
                    </Column>
                </Layout>
            </header>

            <main className="main-change-password" style={{ width: "100%", height: "90%", background: "rgba(167, 167, 167, 0.3)" }}>
                <Layout container={"container p-sm-3"} row="row p-sm-3">
                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={"d-flex justify-content-center"}>
                        <img src="../images/logo.png" alt="logo" className="img-fluid" />
                    </Column>

                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <form onSubmit={handleSubmit} className="bg-white h-auto p-3 rounded">
                            <h5 className="text-center">Đổi mật khẩu</h5>

                            <div className="input-group mt-3 username">
                                <span className="input-group-text" id="username">
                                    <i className="fa-solid fa-user"></i>
                                </span>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập tên đăng nhập..."
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-group mt-3 password">
                                <span className="input-group-text" id="password">
                                    <i className="fa-solid fa-lock"></i>
                                </span>

                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Nhập mật khẩu mới..."
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-group mt-3 confirm-password">
                                <span className="input-group-text" id="confirm-password">
                                    <i className="fa-solid fa-lock"></i>
                                </span>

                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Nhập lại mật khẩu..."
                                    id="confirm-password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-group mt-3 role">
                                <span className="input-group-text" id="role">
                                    <i className="fa-solid fa-user-tie"></i>
                                </span>

                                <select 
                                    onChange={handleChange} 
                                    className="form-select form-control" 
                                    id="role" 
                                    name="role"
                                >    
                                    <option selected>-- Chọn quyền truy cập --</option>
                                    <option value="Quản trị viên">Quản trị viên</option>
                                    <option value="Khách hàng">Khách hàng</option>
                                </select>
                            </div>

                            <div className="btn-group d-flex flex-column mt-4" role="group" aria-label="Basic example">
                                <button type="submit" className="btn btn-danger rounded text-white mx-auto">
                                    Đổi mật khẩu
                                </button>

                                <span className="text-center">
                                    Bạn không cần đổi mật khẩu?
                                    <Link to="/auth/login" className="text-primary-emphasis"> Đăng nhập </Link>
                                </span>
                            </div>
                        </form>
                    </Column>
                </Layout>
            </main>
        </>
    )
}

export default ChangePassword