import { Info, InputSearch, Navbar } from './'
import { Layout, Column } from '../LayoutContainer'
import './scss/Header.scss'

function Header() {
    return (
      <header className="header">
        <Layout container={"container"} row={"row py-2"}>
          <Column col={6} sm={3} md={3} lg={3} xl={2} xxl={2} className={"img-header"}>
            <img src="./images/logo.png" alt="Logo" className="img-fluid mx-auto"/>
          </Column>

          <Column col={12} sm={6} md={6} lg={3} xl={4} xxl={4} className={"input-search mt-1"}>
            <img src="./images/align-right.png" alt="Right" className="img-right img-fluid d-none"/>
            <InputSearch placeholder={"Tìm kiếm sản phẩm..."}/>
          </Column>

          <Column lg={4} xl={4} xxl={4} className={"info-header"}>
            <Info/>
          </Column>

          <Column col={6} sm={3} md={3} lg={3} xl={2} xxl={2} className={"btn-group-header d-flex justify-content-around"}>
            <button type="button" className="btn position-relative mt-2">
              <i className="fa-solid fa-cart-shopping fs-4"></i>
              <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">0</span>
            </button>

            <button type="button" className="btn position-relative mt-2">
              <i className="fa-solid fa-heart fs-4"></i>
              <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">0</span>
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