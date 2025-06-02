import { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDataGlobal } from '../hooks'
import { Layout, Column } from '../LayoutContainer'
import { ModalUser } from './Modal'
import './scss/Header.scss'
import axios from 'axios'

const Menubar = [
  {id: 1, name: "Trang chủ" , link: "/"},
  {id: 2, name: "Giới thiệu" , link: "/introduction"},
  {id: 3, name: "Sản phẩm" , link: "/product"},
  {id: 4, name: "Câu hỏi thường gặp" , link: "/question"},
  {id: 5, name: "Tuyển dụng" , link: "/recruitment"},
  {id: 6, name: "Liên hệ" , link: "/contact"},
]

function Header() {
  const { carts, setIsShowCart } = useDataGlobal()
  const [isWidth, setIsWidth] = useState(1200)
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()
  const { checkLogin, setQuery, query } = useDataGlobal()
  
  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-user`)
    .then(res => setAuth(res.data?.find(item => item.username === checkLogin.auth) ?? {}))
    .catch(err => console.log(err))
  }, [checkLogin.auth])

  const handleSearch = (e) => {
    e.preventDefault()

    if(query !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <header className="header">
      <div className="bg-body-secondary header-bg">
        <Layout container={"container"} row={"row"}>
          <Column lg={6} className={"text-start"}>
            <p>Chào mừng bạn đến với T-Shop</p>
          </Column>

          <Column lg={6} className={"text-end header-auth"}>
            {!checkLogin.status ? <>
              <Link to="/auth/login">Đăng nhập</Link>
              <span> | </span>
              <Link to="/auth/register">Đăng ký</Link>
            </> :
            <>
              <p data-bs-toggle="modal" data-bs-target="#exampleModalUser">
                <img src={`${process.env.REACT_APP_URL_BACKEND}/users/${auth.avatar}`} alt="avatar" />
                <span>  {auth.fullname} </span>
              </p>
            </>
          }
          </Column>
        </Layout>
      </div>
      
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className={isWidth >= 1200 ? "container" : "container-fluid"}>
          <img src="../images/logo-title.png" className="img-fluid" alt="logo"/>

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
                      onChange={e => setQuery(e.target.value)}
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
                  }} style={{ border: "none", outline: "none" }}>
                    <i className="fa-solid fa-shopping-cart fs-5"></i>
                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                      {checkLogin.status ? carts.length : 0}
                    </span>
                  </button>

                  <button type="button" className="btn btn-user" data-bs-toggle="modal" data-bs-target="#exampleModalUser" style={{ border: "none", outline: "none" }}>
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