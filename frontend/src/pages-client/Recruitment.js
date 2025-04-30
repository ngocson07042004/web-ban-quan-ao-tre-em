import { Link } from 'react-router-dom'

function Recruitment() {
  document.title = "Tuyển dụng"

  return(
    <>
      <div className="content">
        <div className="url-content">
          <Link to="/">Trang chủ</Link> / <span>Tuyển dụng</span>
        </div>

        <h3>Tuyển dụng</h3>

        <hr/>

        <h3><strong>FRUIT MART TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG PART-TIME</strong></h3><br />
            
        <div className="map-img">
          <img src={recruitment} alt="tuyển dụng" />
        </div>

        <ul className="menu-main">
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
      </div>
    </>
  )
}
  
  export default Recruitment