import { useNavigate } from 'react-router-dom'
import { Info, InputSearch, Navbar } from './'
import { Layout, Column } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'
import { setLogin } from '../pages/Login'
import './scss/Header.scss'

function Header() {
  const { setIsShowCart, carts } = useDataGlobal()
  const navLogin = useNavigate()

  return (
    <header className="header">
      <Layout container={"container"} row={"row py-2"}>
        <Column col={6} sm={3} md={3} lg={2} xl={2} xxl={2} className={"img-header"}>
          <img src="./images/logo-title.png" alt="Logo" className="img-fluid mx-auto"/>
        </Column>

        <Column col={12} sm={6} md={6} lg={4} xl={4} xxl={4} className={"input-search mt-1"}>
          <img src="./images/align-right.png" alt="Right" className="img-right img-fluid d-none"/>
          <InputSearch placeholder={"Tìm kiếm sản phẩm..."}/>
        </Column>

        <Column lg={4} xl={4} xxl={4} className={"info-header"}>
          <Info/>
        </Column>

        <Column col={6} sm={3} md={3} lg={2} xl={2} xxl={2} className={"btn-group-header d-flex justify-content-around"}>
          <button type="button" className="btn position-relative mt-2" onClick={() => {
            setLogin.status ? setIsShowCart(true) : navLogin("/auth/login")
          }}>
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
              {setLogin.status ? carts.length : 0}
            </span>
          </button>

          <button className="btn mt-2">
            <i className="fa-solid fa-user fs-4"></i>
          </button>
        </Column>
      </Layout>

      <Navbar/>
    </header>
  )
}

export default Header