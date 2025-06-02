import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDataGlobal } from '../hooks'

function ModalTransportation() {
    return(
        <div class="modal fade" id="ModalTransportation" tabindex="-1" aria-labelledby="ModalTransportation" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="ModalTransportation">THÔNG TIN VỀ PHÍ VẬN CHUYỂN</h1>
                    </div>

                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Khoảng cách(km)</th>
                                    <th scope="col">Phí vận chuyển(VNĐ)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="text-center">
                                    <th scope="row">1</th>
                                    <td>{` < 0.5`}</td>
                                    <td>Miễn phí</td>
                                </tr>

                                <tr className="text-center">
                                    <th scope="row">2</th>
                                    <td>{`0.5 - 1`}</td>
                                    <td>2.000</td>
                                </tr>

                                <tr className="text-center">
                                    <th scope="row">3</th>
                                    <td>{`1 - 1.5`}</td>
                                    <td>4.000</td>
                                </tr>

                                <tr className="text-center">
                                    <th scope="row">4</th>
                                    <td>{`1.5 - 2`}</td>
                                    <td>6.000</td>
                                </tr>

                                <tr className="text-center">
                                    <th scope="row">5</th>
                                    <td>{` > 2`}</td>
                                    <td>8.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal-footer" style={{ border: "none"}}>
                        <button type="button" class="btn btn-danger text-whites" data-bs-dismiss="modal">Đã hiểu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ModalUser() {
    const loginNav = useNavigate()
    const registerNav = useNavigate()
    const { checkLogin } = useDataGlobal()
    
    const handleLogout = async () => {
        try {
        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/post/api/logout`, {}, { withCredentials: true })
        if(res.data === "Success") {
            window.location.reload()
            toast.success("Đăng xuất thành công!")
        }
        }
        catch(err) {
        console.log(err)
        }
    }

    return(
        <div className="modal fade" id="exampleModalUser" tabindex="-1" aria-labelledby="exampleModalUserLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalUserLabel">Tài khoản</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div className="modal-user w-100 d-flex flex-column d-block d-lg-none">
                            <img 
                            src={`${process.env.REACT_APP_URL_BACKEND}/users/1744741307078.5808.jpg`} 
                            className="img-fluid rounded-circle border mx-auto" 
                            alt="Logo"
                            style={{ width: "70px", height: "70px" }}
                            />

                            <p className="text-center">
                            {checkLogin.status ?
                                <span>{checkLogin.auth}</span>
                            : <>
                                <button 
                                    type="button" 
                                    className="btn text-primary-emphasis" 
                                    data-bs-dismiss="modal" 
                                    onClick={() => loginNav("/auth/login")}
                                >Đăng nhập</button>
                                <span> | </span>
                                <button 
                                    type="button" 
                                    className="btn text-primary-emphasis" 
                                    data-bs-dismiss="modal" 
                                    onClick={() => registerNav("/auth/register")}
                                    >Đăng ký</button>
                            </>}
                            </p>
                        </div>

                        <div className="modal-list mt-2">
                            <ul>
                            <li className="nav-item mt-1">
                                <button type="button" className="btn">
                                <i className="fa-solid fa-user-tie fs-6"></i>
                                <span>  Tài khoản của tôi </span>
                                </button>
                            </li>

                            <li className="nav-item mt-1">
                                <button type="button" className="btn">
                                <i className="fa-solid fa-clock-rotate-left fs-6"></i>
                                <span>  Đơn mua  </span>
                                </button>
                            </li>
                            
                            <li className="nav-item mt-1" style={{ display: checkLogin.status ? "block" : "none" }}>
                                <button type="button" className="btn" onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket fs-6"></i>
                                <span>  Đăng xuất </span> 
                                </button>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ModalTransportation, ModalUser }