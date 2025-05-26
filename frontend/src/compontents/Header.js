import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDataGlobal } from '../hooks'
import './scss/Header.scss'

const Menubar = [
  {id: 1, name: "Trang chủ" , link: "/"},
  {id: 2, name: "Giới thiệu" , link: "/introduction"},
  {id: 3, name: "Sản phẩm" , link: "/product"},
  {id: 4, name: "Câu hỏi thường gặp" , link: "/question"},
  {id: 5, name: "Tuyển dụng" , link: "/recruitment"},
  {id: 6, name: "Liên hệ" , link: "/contact"},
]

const ModalUser = () => {
  const loginNav = useNavigate()
  const registerNav = useNavigate()
  const { checkLogin } = useDataGlobal()
  // const handleLogout = () => {
  //   const res =
  // }

  return(
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Tài khoản</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
              <div className="modal-user w-100 d-flex flex-column">
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
                <ul style={{ margin: "0 10px", padding: "10px" }}>
                  <li className="nav-item mt-1">
                    <button type="button" className="btn">
                      <i className="fa-solid fa-user-tie fs-6"></i>
                      <span>  Tài khoản của tôi </span>
                      </button>
                  </li>

                  <li className="nav-item mt-1">
                    <button type="button" className="btn">
                      <i className="fa-solid fa-clock-rotate-left fs-6"></i>
                      <span>  Lịch sử mua hàng  </span>
                    </button>
                  </li>
                  
                  <li className="nav-item mt-1" style={{ display: checkLogin.status ? "block" : "none" }}>
                    <button type="button" className="btn" onClick={() => window.location.href = "/"}>
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

function Header() {
  const { carts, setIsShowCart } = useDataGlobal()
  const [isWidth, setIsWidth] = useState(1200)
  const { checkLogin } = useDataGlobal()
  const [keyword, setKeyword] = useState("")
  const searchNavigate = useNavigate()
  
  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  const handleSearch = e => {
    e.preventDefault()

    if (keyword.trim()) {
      searchNavigate(`/search?search=${encodeURIComponent(keyword)}`)
    }
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className={isWidth >= 1200 ? "container" : "container-fluid"}>
          <img src="./images/logo-title.png" className="img-fluid" alt="logo"/>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Menubar.map(item => (
                <li className="nav-item" key={item.id}>
                  <NavLink className="nav-link small" to={item.link}>{item.name}</NavLink>
                </li>
              ))}

            </ul>
            
            <div className="action-header">
                <div className="form-search">
                  <form role="search" onSubmit={handleSearch}>
                    <input 
                      className="me-2 p-1" 
                      type="search"
                      value={keyword}
                      onChange={e => setKeyword(e.target.value)}
                      placeholder="Tìm kiếm sản phẩm..." 
                      aria-label="Search"
                    />
                    <button className="btn" type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>

                <div className="btns-group mt-1">
                  <button type="button" className="btn position-relative" onClick={() => {
                    if(!checkLogin.status) {
                      toast.info("Bạn chưa đăng nhập để sử dụng tính năng này!")
                      return
                    }
                    setIsShowCart(true)
                  }}>
                    <i className="fa-solid fa-shopping-cart fs-5"></i>
                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                      {checkLogin.status ? carts.length : 0}
                    </span>
                  </button>

                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-solid fa-user fs-5"></i>
                  </button>

                  <ModalUser/>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header