import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import './scss/Login.scss'

export const setLogin = {
    auth: "",
    status: false,
} 

function Login() {
    document.title = "Đăng nhập hệ thống"

    const [showPassword, setShowPassword] = useState(false)
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const homeNav = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/post/api`, { identifier, password, role })
        try {
            if(res.data === "Not User") {
                toast.info("Tài khoản không tồn tại!")
            }
            else if(res.data === "Not Password") {
                toast.error("Mật khẩu không đúng!")
            }
            else {
                toast.success("Đăng nhập thành công!")
                homeNav("/")
                setLogin.auth = identifier
                setLogin.status = true
            }
        }
        catch(err) {
            toast.error("Không thể kết nối tới máy chủ!")
        }
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <div className="form-title">
                <i className="fa-solid fa-user fs-1 fw-bold text-center"></i>
                <h3 className="text-center">Đăng nhập</h3>
            </div>

            <div className="form-input username">
                <label htmlFor="username"><i className="fa-solid fa-user fw-bold"></i></label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    className="fs-6"
                    onChange={e => setIdentifier(e.target.value)}
                    placeholder="Nhập tên đăng nhập..."
                    required
                />
            </div>

            <div className="form-input password mt-3">
                <label htmlFor="password"><i className="fa-solid fa-lock fw-bold"></i></label>
                <input 
                    type={showPassword ? "text" : "password"}
                    name="password" 
                    id="password"
                    className="fs-6"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    required
                />
                
                <button type="button" className="btn" onClick={() => setShowPassword(!showPassword)}>
                    <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                </button>
            </div>

           <Link to="/change-password">Quên mật khẩu?</Link>

           <div className="form-input select-role mt-2">
                <label htmlFor="selectRole"><i className="fa-solid fa-user-tie fw-bold"></i></label>
                <select id="selectRole" name="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option selected>--- Chọn quyền truy cập ---</option>
                    <option value="Quản trị viên">Quản trị viên</option>
                    <option value="Khách hàng">Khách hàng</option>
                </select>
           </div>

           <div className="btns-group mt-3">
                <button type="submit">Đăng nhập</button>
                <span>Đã có tài khoản? <Link to="sign-up">Đăng ký</Link></span>
           </div>
        </form>
    )
}

export default Login