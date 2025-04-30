import { Link } from 'react-router-dom'

function Introduction() {
  document.title = "Giới thiệu"
  
  return (
    <>
      <div className="content">
        <div className="url-content">
          <Link to="/">Trang chủ</Link> / <span>Giới thiệu</span>
        </div>
        
        <h3>GIỚI THIỆU</h3><br/>

        <hr/>
        
        <h4>
          FRUIT MART là hệ thống siêu thị thuộc tập đoàn LALA, Việt Nam. Hệ thống này khai trương ngày tháng 09 tháng 10. Theo thống kê của Vietnam Report, tính đến tháng 11/2024, FruitMart nằm top 2 nhà bán lẻ được người tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10 nhà bán lẻ uy tín năm 2024.<br/><br/>
          Ngày 31/10/2024, Fruit Mart có khoảng 40 siêu thị và khoảng hơn 600 cửa hàng Fruit Mart trên gần 45 tỉnh thành với tổng diện tích mặt bằng kinh doanh <br/>hơn 300.000 m<sup>2</sup>, số lượng nhân viên khoảng hơn 3.000 người.<br/><br/>
          Các sản phẩm của FruitMart bao gồm nước ép, trái cây tươi, trái cây đóng hộp.
        </h4>
      </div>
    </>
  )
}

export default Introduction