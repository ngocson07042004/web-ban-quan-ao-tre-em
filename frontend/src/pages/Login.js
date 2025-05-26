import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Column, Layout } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'

function Login() {
    document.title = "Đăng nhập hệ thống"
    const { setCheckLogin } = useDataGlobal()

    const homeNav = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "",
        hashCode: ""
    })

    const handleChange = (e) =>{
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value.trim() })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/post/api/login`, 
            formData, { withCredentials: true })
        try {
            if(res.data === "User not found") {
                toast.info("Tài khoản không tồn tại!")
            }
            else if(res.data === "Password is not valid") {
                toast.error("Mật khẩu không đúng!")
            }
            else if(res.data === "Code is not valid"){
                toast.error("Mã code không đúng!")
            }
            else {
                toast.success("Đăng nhập thành công!")
                homeNav("/")
                setCheckLogin({ auth: res.data.user.username, status: res.data.success })
            }
        }
        catch(err) {
            console.log(err)
            toast.error("Không thể kết nối tới máy chủ!")
        }
    }

    return (
        <>
            <header className="header-login" style={{ width: "100%", height: "10%" }}>
                <Layout container={"container p-3"} row={"row"}>
                    <Column lg={12} className={"d-flex p-1"}>
                        <img src="../images/logo-title.png" alt="logo" className="img-fluid" />
                        <h3 className="mt-3">Đăng nhập</h3>
                    </Column>
                </Layout>
            </header>

            <main className="main-login" style={{ width: "100%", height: "90%", background: "rgba(167, 167, 167, 0.5)" }}>
                <Layout container={"container p-md-3"} row="row p-md-3">
                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={"d-flex justify-content-center"}>
                        <img src="../images/logo.png" alt="logo" />
                    </Column>

                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <form onSubmit={handleSubmit} className="bg-white h-auto p-3 rounded">
                            <h5 className="text-center">Đăng nhập</h5>
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
                                    required
                                />
                            </div>

                            <div className="input-group mt-3 password">
                                <span className="input-group-text" id="password">
                                    <i className="fa-solid fa-lock"></i>
                                </span>

                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Nhập mật khẩu..."
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <Link 
                                className="text-primary-emphasis text-decoration-underline" 
                                to="/auth/change-password"
                            >Quên mật khẩu?</Link>

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
                                    <option value="">-- Chọn quyền truy cập --</option>
                                    <option value="Quản trị viên">Quản trị viên</option>
                                    <option value="Khách hàng">Khách hàng</option>
                                </select>
                            </div>

                            <div className="input-group mt-3 hash-code">
                                <span className="input-group-text" id="hashCode">
                                    <i className="fa-solid fa-lock"></i>
                                </span>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập mã code..."
                                    id="hashCode"
                                    name="hashCode"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="btn-group d-flex flex-column mt-4" role="group" aria-label="Basic example">
                                <button type="submit" className="btn btn-danger rounded text-white mx-auto">
                                    Đăng nhập
                                </button>

                                <span className="text-center">
                                    Bạn chưa có tài khoản?
                                    <Link to="/auth/register" className="text-primary-emphasis"> Đăng ký </Link>
                                </span>
                            </div>
                        </form>
                    </Column>
                </Layout>
            </main>
        </>
    )
}

export default Login