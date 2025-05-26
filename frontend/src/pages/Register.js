import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Column, Layout } from '../LayoutContainer'

export const setLogin = {
    auth: "",
    status: false,
} 

function Register() {
    document.title = "Đăng ký"

    const loginNav = useNavigate()
    const [setAvatarPreview] = useState("1744741307078.5808.jpg")
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        avatar: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        hashCode: "",
    })

    const handleChange = (e) =>{
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value.trim() })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file){
            setFormData({ ...formData, avatar: file })
            setAvatarPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const { password, confirmPassword } = formData
        const data = new FormData()

        for (let key in formData)
            data.append(key, formData[key])

        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/post/api/register`, data)
        

        if(password !== confirmPassword) {
            toast.info("Mật khẩu không khớp")
        }

        try {
            if(res.data === "Username is exist") {
                toast.info("Tài khoản đã tồn tại!")
            }
            else {
                toast.success("Đăng ký thành công")
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
            <header className="header-register" style={{ width: "100%", height: "10%" }}>
                <Layout container={"container p-3"} row={"row"}>
                    <Column lg={12} className={"d-flex p-1"}>
                        <img src="../images/logo-title.png" className="img-fluid" alt="logo" />
                        <h3 className="mt-3">Đăng ký</h3>
                    </Column>
                </Layout>
            </header>

            <main className="main-register" style={{ width: "100%", height: "90%", background: "rgba(167, 167, 167, 0.5)" }}>
                <Layout container={"container p-sm-3"} row="row p-sm-3">
                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6} className={"d-flex justify-content-center"}>
                        <img src="../images/logo.png" alt="logo" className="img-fluid" />
                    </Column>

                    <Column col={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <form onSubmit={handleSubmit} className="bg-white h-auto p-3 rounded">
                            <h5 className="text-center">Đăng ký</h5>

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

                            <div className="input-group mt-3 email">
                                <span className="input-group-text" id="email">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>

                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Nhập email..."
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-group mt-3 phone">
                                <span className="input-group-text" id="phone">
                                    <i className="fa-solid fa-phone"></i>
                                </span>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập phone..."
                                    id="phone"
                                    name="phone"
                                    maxLength={10}
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
                                    placeholder="Nhập mật khẩu..."
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

                            <div className="input-group mt-3">
                                <span className="input-group-text" id="gender">
                                    <i className="fa-solid fa-user-tie"></i>
                                </span>

                                <select 
                                    onChange={handleChange} 
                                    className="form-select form-control" 
                                    id="gender" 
                                    name="gender"
                                >    
                                    <option selected>-- Chọn giới tính --</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>

                            <div className="input-group mt-3 avatar">
                                <span className="input-group-text" id="avatar">
                                    <i className="fa-solid fa-image"></i>
                                </span>

                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="avatar"
                                    name="avatar"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div className="input-group mt-3 address">
                                <span className="input-group-text" id="address">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>

                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nhập địa chỉ..."
                                    id="address"
                                    name="address"
                                    onChange={handleChange}
                                />
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
                                />
                            </div>

                            <div className="btn-group d-flex flex-column mt-4" role="group" aria-label="Basic example">
                                <button type="submit" className="btn btn-danger rounded text-white mx-auto">
                                    Đăng ký
                                </button>

                                <span className="text-center">
                                    Bạn đã có tài khoản?
                                    <Link to="/auth/register" className="text-primary-emphasis"> Đăng nhập </Link>
                                </span>
                            </div>
                        </form>
                    </Column>
                </Layout>
            </main>
        </>
    )
}

export default Register