import { Link } from 'react-router-dom'
import { Column, Row, Container } from '../LayoutContainer'

function Recruitment() {
  document.title = "Tuyển dụng"

  return(
    <main className="main">
      <Container container={"container"}>
        <Row row={"row mt-2"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Tuyển dụng</span>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <h3 style={{ fontSize: "clamp(1.25rem, 1.1364rem + 0.5682vw, 1.5625rem)" }}>TUYỂN DỤNG</h3>
            <hr />
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2 text-center"}>
            <h3 style={{ fontSize: "clamp(1rem, 1.13rem + 0.5682vw, 1.5625rem)", margin: 0 }}
            >T-SHOP TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG PART-TIME</h3>
            <img src="./images/tuyen-dung.jpg" alt="recruitment" className="img-fluid"/>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            <ul style={{ fontSize: "clamp(0.875rem, 0.8295rem + 0.2273vw, 1rem)", padding: 0, margin: 0 }}>
              <li>
                <strong><br />MÔ TẢ CÔNG VIỆC:</strong>
                <ol style={{listStyleType: "square"}}>
                  <li>Tiếp nhận hàng, trưng bày đúng quy tắc.</li>
                  <li>Vệ sinh cửa hàng sạch sẽ ngăn nắp.</li>
                  <li>Chủ động hỗ trợ, phục vụ khách hàng.</li>
                  <li>Tư vấn giải đáp thắc mắc của khách hàng khi mua tại cửa hàng.</li>
                </ol>
              </li>

              <li>
                <strong><br />YÊU CẦU:</strong>
                  <ol className="sub-menu-main" style={{listStyleType: "square"}}>
                    <li>Nam/nữ trên từ 18 tuổi trở lên.</li>
                    <li>Chỉ cần giao tiếp cơ bản là được.</li>
                    <li>
                      Có khả năng xoay ca linh hoạt:
                      <ol className="sub-menu-main sub-menu-time" style={{listStyleType: "disc"}}>
                        <li>Ca 1: 8h-11h.</li>
                        <li>Ca 2: 11h-14h.</li>
                        <li>Ca 3: 14h-17h.</li>
                        <li>Ca 4: 17h-20h.</li>
                    </ol>
                  </li>

                  <li>Chăm chỉ, trung thực, nhanh nhẹn, hòa đồng.</li>
                </ol>
              </li>

              <li>
                <strong><br />LƯƠNG THƯỞNG:</strong>
                <ol className="sub-menu-main" style={{listStyleType: "square"}}>
                  <li>Lương: 25h/h + thưởng.</li>
                  <li>Được đóng BHXH, BHYT.</li>
                </ol>
              </li>
            </ul>
          </Column>
        </Row>
      </Container>
    </main>
  )
}
  
  export default Recruitment