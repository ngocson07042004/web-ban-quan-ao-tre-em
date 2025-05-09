import { Row, Column } from '../LayoutContainer'

function Info() {
  return (
    <Row row={"row info"}>
      <Column>
        <Row row={"row"}>
          <Column col={3} className={"p-2 fs-5"}>
            <i className="fa-solid fa-phone"></i>
          </Column>

          <Column col={9} className={"info-title"}>
            <span>Liên hệ</span><br />
            <span className="text-danger fw-bold" style={{ cursor: "pointer"}}>0987654321</span>
          </Column>
        </Row>
      </Column>

      <Column>
        <Row row={"row"}>
          <Column col={3} className={"p-2 fs-5"}>
            <i className="fa-solid fa-user"></i>
          </Column>

          <Column col={9} className={"info-title"}>
            <span>Xin chào!</span><br />
            <span className="text-danger fw-bold" style={{ cursor: "pointer"}}>Đăng nhập</span>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}

export default Info