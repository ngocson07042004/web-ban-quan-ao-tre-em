import { Link } from 'react-router-dom'
import { Container, Row, Column } from '../LayoutContainer'
import './scss/Contact.scss'

function Contact() {
  document.title = "Liên hệ"
  
  return (
    <main className="main" style={{ minHeight: "200vh" }}>
      <Container container={"container"}>
        <Row row={"row mt-2"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Liên hệ</span>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <h3>LIÊN HỆ</h3>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2 img-map"}>
            <img src="./images/ban-do.jpg" className="img-fluid" alt="Map" />
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <hr />
          </Column>
        </Row>

        <Row row={"row p-2"}>
          <Column sm={12} md={6} lg={6} xl={6} xxl={6}>
            <Row row={"row mt-4 pt-2 bg-body-secondary rounded"}>
              <Column col={2} className={"p-2 d-flex justify-content-center align-items-center"}>
                <span 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger" 
                  style={{ width: "45px", height: "45px" }}
                >
                  <i className="fa-solid fa-location-dot fs-4 text-white"></i>
                </span>
              </Column>

              <Column col={10}>
                <h5>Địa chỉ:</h5>
                <p>Số 13A, đường Điện Biên Phủ, quận Ba Đình, Hà Nội</p>
              </Column>
            </Row>

            <Row row={"row mt-4 pt-2 bg-body-secondary rounded"}>
              <Column col={2} className={"p-2 d-flex justify-content-center align-items-center"}>
                <span 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger" 
                  style={{ width: "45px", height: "45px" }}
                >
                  <i className="fa-solid fa-question fs-4 text-white"></i>
                </span>
              </Column>

              <Column col={10}>
                <h5>Gửi thắc mắc:</h5>
                <p>support.tshop.vn</p>
              </Column>
            </Row>

            <Row row={"row mt-4 pt-2 bg-body-secondary rounded"}>
              <Column col={2} className={"p-2 d-flex justify-content-center align-items-center"}>
                <span 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger" 
                  style={{ width: "45px", height: "45px" }}
                >
                  <i className="fa-solid fa-phone fs-4 text-white"></i>
                </span>
              </Column>

              <Column col={10}>
                <h5>Liên hệ:</h5>
                <p>0987654321</p>
              </Column>
            </Row>
          </Column>

          <Column sm={12} md={6} lg={6} xl={6} xxl={6}>
            <form>
              <Row row={"row input-form"}>
                <Column col={6}>
                  <label htmlFor="fullname-contact" className="form-label">Họ và tên *:</label><br/>
                  <input 
                    className="bg-body-secondary p-3" 
                    type="text" 
                    name="fullname-contact" 
                    id="fullname-contact"
                  />
                </Column>

                <Column col={6}>
                  <label htmlFor="email-contact" className="form-label">Email *:</label><br/>
                  <input 
                    className="bg-body-secondary" 
                    type="text" 
                    name="email-contact" 
                    id="email-contact"
                  />
                </Column>
              </Row>

              <Row row={"row"}>
                <Column col={12} className={"content-form"}>
                  <label htmlFor="content-contact" className="form-label">Nội dung *:</label><br/>
                  <textarea 
                    className="bg-body-secondary p-3" 
                    type="text" 
                    name="content-contact" 
                    id="content-contact"
                  ></textarea>
                </Column>
              </Row>

              <Row row={"row"}>
                <Column col={12} className={"mt-4 pt-3 d-flex justify-content-center align-items-center"}>
                  <button type="submit" className="btn btn-danger text-white">
                    <i className="fa-solid fa-paper-plane"></i>
                    <span> Gửi đi </span>
                  </button>
                </Column>
              </Row>
            </form>
          </Column>
        </Row>
      </Container>
    </main>
  )
}

export default Contact