import { Container, Row, Column } from '../LayoutContainer'
import './scss/Footer.scss'

function Footer() {
    return (
      <footer className="footer">
        <Container container={"container-fluid p-5"}>
          <Row row={"row"}>
            <Column sm={12} md={6} lg={3} xl={3} xxl={3}>
              <h5>THÔNG TIN SHOP</h5>
              <ul className="navbar-nav info-shop-footer">
                <li className="mt-3">
                  <i className="fa-solid fa-user-tie fs-6"></i>
                  <span>  Nguyễn Ngọc Sơn</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-phone fs-6"></i>
                  <span>  0987654321</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-building-columns fs-6"></i>
                  <span>  0987654321 - Ngân hàng Quân Đội MBBank</span>
                </li>
              </ul>
              <br />
            </Column>

            <Column sm={12} md={6} lg={3} xl={3} xxl={3}>
              <h5>CHĂM SÓC KHÁCH HÀNG</h5>
              <ul className="navbar-nav info-footer">
                <li className="mt-3">
                  <i className="fa-solid fa-headphones fs-6"></i>
                  <span>  Hỗ trợ 8-22h hàng ngày</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-phone fs-6"></i>
                  <span>  0987654321</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-envelope fs-6"></i>
                  <span>  support.tshop.vn</span>
                </li>
              </ul>
              <br />
            </Column>

            <Column sm={12} md={6} lg={3} xl={3} xxl={3}>
              <h5>CHÍNH SÁCH BÁN HÀNG</h5>
              <ul className="navbar-nav sell-footer">
                <li className="mt-3">
                  <i className="fa-solid fa-medal fs-6"></i>
                  <span>  Uy tín và chất lượng</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-truck-fast fs-6"></i>
                  <span>  Giao hàng nhanh chóng</span>
                </li>

                <li className="mt-3">
                  <i className="fa-solid fa-money-bill-wave fs-6"></i>
                  <span>  Giá cả hợp lý</span>
                </li>
              </ul>
              <br />
            </Column>

            <Column sm={12} md={6} lg={3} xl={3} xxl={3}>
              <h5>THEO DÕI CHÚNG TÔI</h5>
              <ul className="navbar-nav folow-footer">
                <li className="mt-3">
                  <i className="fa-brands fa-github"></i>
                  <a href="http://github.com/ngocson07042004/"> Github</a>
                </li>

                <li className="mt-3">
                  <i className="fa-brands fa-facebook"></i>
                  <a href="https://www.facebook.com/sondz0704"> Facebook</a>
                </li>

                <li className="mt-3">
                  <i className="fa-brands fa-square-twitter"></i>
                  <a href="https://x.com/son1232613"> Twitter</a>
                </li>
              </ul>
            </Column>

            <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
              <hr />
            </Column>
          </Row>

          <Row row={"row pt-3"}>
            <Column sm={12} md={6} lg={6} xl={6} xxl={6}>
              <h5>SHOP BÁN QUẦN ÁO THỜI TRANG TRẺ EM</h5>
              <p>- Địa chỉ: Số 13A, đường Điện Biên Phủ, quận Ba Đình, Hà Nội</p>
              <p>- Điện thoại: 0987654321 - Email: support.tshop.vn</p>
            </Column>

            <Column sm={12} md={6} lg={6} xl={6} xxl={6} className="newsletter-box text-white text-start">
              <h6 className="fw-bold">NHẬN TIN KHUYẾN MẠI</h6>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Nhập email của bạn.." aria-label="Email"/>
                <button className="btn btn-danger" type="button">Đăng ký</button>
              </div>
                
              <div className="social-icons">
                <a href="http://github.com/ngocson07042004" className="github">
                  <i className="fa-brands fa-github fs-5 text-black"></i>
                </a>

                <a href="https://www.facebook.com/sondz0704">
                  <i className="fa-brands fa-facebook-f fs-5 text-black"></i>
                </a>
                  
                <a href="https://x.com/son1232613">
                  <i className="fa-brands fa-twitter fs-5 text-black"></i>
                </a>
              </div>
            </Column>

            <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
              <hr />
            </Column>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer