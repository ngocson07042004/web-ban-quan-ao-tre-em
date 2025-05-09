import { Link } from 'react-router-dom'
import { Row, Container, Column } from '../LayoutContainer'

function Introduction() {
  document.title = "Giới thiệu"
  
  return (
    <main className="main">
      <Container container={"container"}>
        <Row row={"row mt-2"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Giới thiệu</span>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <h3>GIỚI THIỆU</h3>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <hr />
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            <p>
              T-Shop là hệ thống siêu thị thuộc tập đoàn LALA, Việt Nam. Hệ thống này khai trương ngày tháng 09 tháng 10. Theo thống kê của Vietnam Report, tính đến tháng 11/2024, FruitMart nằm top 2 nhà bán lẻ được người tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10 nhà bán lẻ uy tín năm 2024.<br/><br/>
              Ngày 31/10/2024, T-Shop có khoảng 40 siêu thị và khoảng hơn 600 cửa hàng T-Shop trên gần 45 tỉnh thành với tổng diện tích mặt bằng kinh doanh <br/>hơn 300.000 m<sup>2</sup>, số lượng nhân viên khoảng hơn 3.000 người.<br/><br/>
              Các sản phẩm của FruitMart bao gồm nước ép, trái cây tươi, trái cây đóng hộp.
            </p>
          </Column>
        </Row>
      </Container>
    </main>
  )
}

export default Introduction