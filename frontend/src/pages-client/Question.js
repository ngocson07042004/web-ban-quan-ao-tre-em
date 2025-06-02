import { Link } from 'react-router-dom'
import { Row, Column, Container } from '../LayoutContainer'

const questions = [
  {
    id: 1,
    question: "T-Shop có xác nhận đơn hàng với tôi không?",
    answer: "Với khách hàng đặt mua hàng thành công đầu tiên, để đẩy nhanh tiến độ xử lý và giao hàng đến quý khách"
    +", các đơn hàng sẽ được xác nhận qua email."
  },
  
  {
    id: 2,
    question: "Làm thế nào để đặt nhiều sản phẩm trên cùng một đơn hàng?",
    answer: "Qúy khách có thể đặt các sản phẩm khác nhau trong 1 giỏ hàng thành 1 đơn hàng, các sản phẩm"  +
    "trong giỏ hàng sẽ được đóng thành 1 kiện hàng (nếu các sản phẩm có cùng kho xử lý/nhà bán hàng) và giao đến địa chỉ quý khách đã đăng ký."
  },
  
  {
    id: 3,
    question: "Tôi có thể thanh toán khi nhận hàng không?",
    answer: "T-Shop hỗ trợ giao hàng và thanh toán tận nơi " +
      "cho các đơn hàng có tổng trị giá từ 100.000đ trở xuống trên toàn quốc." +
      " Quý khách có thể tham khảo thêm các phương thức thanh toán khác."
  },

  {
    id: 4,
    question: "T-Shop bán những sản phẩm gì?",
    answer: "Được thành lập từ tháng 10/2024, đến nay T-Shop cung cấp các sản phẩm như sau: " +
      "quần áo thời trang, giày dép, phụ kiện,..."
  },

  {
    id: 5,
    question: "Làm thế nào để tôi nhận biết sản phẩm còn hay hết hàng?",
    answer: "Quý khách có thể nhận biết sản phẩm còn hàng hay hết hàng tại T-Shop " +
      "bằng cách truy cập vào thông tin chi tiết của sản phẩm và kiểm tra trạng thái sau: Nút mua hàng hiển thị và ngược lại."
  }
]

function Question() {
  document.title = "Câu hỏi thường gặp"

  return (
    <main className="main">
      <Container container={"container"}>
        <Row row={"row mt-2"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Câu hỏi thường gặp</span>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <h3 style={{ fontSize: "clamp(1.25rem, 1.1364rem + 0.5682vw, 1.5625rem)" }}>CÂU HỎI THƯỜNG GẶP</h3>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <hr />
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            {questions.map(ques => {
              return(
                <details  className="question border border-black rounded p-2 mt-2" key={ques.id}>
                  <summary className="mess fw-bold">{ques.question}</summary>
                  <span className="hidden">{ques.answer}</span>
                </details>
              )})}
          </Column>
        </Row>
      </Container>
    </main>
  )
}

export default Question