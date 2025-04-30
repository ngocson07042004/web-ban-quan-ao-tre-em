import { Row } from '../LayoutContainer'
function Info() {
    return (
        <Row row={"row info"}>
            <div className="col">
              <Row row={"row"}>
                <div className="col-3 p-2 fs-5">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div className="col-9 info-title">
                    <span>Liên hệ</span><br />
                    <strong>0987654321</strong>
                  </div>
              </Row>
            </div>

            <div className="col">
              <Row row={"row"}>
                <div className="col-3 p-2 fs-5">
                  <i className="fa-solid fa-user"></i>
                </div>

                <div className="col-9 info-title">
                  <span>Xin chào!</span><br/>
                  <strong style={{ cursor: "pointer" }}>Đăng nhập</strong>
                </div>
              </Row>
            </div>
        </Row>
    )
}

export default Info