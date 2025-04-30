import { Info, InputSearch, Navbar } from './'
import { Layout } from '../LayoutContainer'
import './scss/Header.scss'

function Header() {
    return (
      <header className="header">
        <Layout container={"container"} row={"row py-2"}>
          <div className="img-header col-6 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
              <img src="./images/logo.png" alt="Logo" className="img-fluid mx-auto"/>
            </div>

            <div className="input-search col-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 col-xxl-4 mt-1">
              <img src="./images/align-right.png" alt="Right" className="img-right img-fluid d-none"/>
              <InputSearch placeholder={"Tìm kiếm sản phẩm..."}/>
            </div>

            <div className="col-lg-4 col-xl-4 col-xxl-4 info-header">
              <Info/>
            </div>

            <div className="btn-group-header col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-around">
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
            </div>
        </Layout>

        <Navbar/>
      </header>
    )
}

export default Header