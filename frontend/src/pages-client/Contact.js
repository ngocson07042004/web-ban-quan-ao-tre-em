import { Link } from 'react-router-dom'

function Contact() {
  document.title = "Liên hệ"
  
  return (
    <>
      <div className="content">
        <div className="url-content">
          <Link to="/">Trang chủ</Link> / <span>Liên hệ</span>
        </div>

        <h3>Liên hệ</h3><br/>

        <hr/>

        <div className="map-img">
          {/* <img src={Map} alt="Map" /> */}
        </div>

        <div className="contact-content">
          <div className="contact-title">
            <div className="contact-address contact">
              <div className="round-contact">
                <span><i class="fa-solid fa-location-dot"></i></span>
              </div>

              <div className="title">
                <h4>Địa chỉ: </h4>
                <p>Toà nhà LALA, đường A, quận Ba Đình, Hà Nội</p></div>
            </div>

            <div className="contact-support contact">
              <div className="round-contact">
                <span><i class="fa-solid fa-question"></i></span>
              </div>

              <div className="title">
                <h4>Gửi thắc mắc: </h4>
                <p>support.fruit.mart@.vn</p>
              </div>
            </div>

            <div className="contact-phone contact">
              <div className="round-contact">
                <span><i class="fa-solid fa-phone"></i></span>
              </div>

              <div className="title">
                <h4>Liên hệ: </h4>
                <p>0987654321</p>
              </div>
            </div>
          </div>

          <div className="contact-input">
            <div className="input-group-user">
              <div className="input-group-name input-group">
                <label>Họ và tên *:</label><br />
                <input type="text" id="user"/>
              </div>

              <div className="input-group-email input-group">
                <label>Email *:</label><br />
                <input type="text" id="email"/>
              </div>
            </div>

            <div className="contact-input-content">
              <label>Nội dung *:</label><br />
              <textarea id="content"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
  export default Contact