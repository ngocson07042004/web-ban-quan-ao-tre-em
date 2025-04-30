import { Link } from 'react-router-dom'

function Question() {
  document.title = "Câu hỏi thường gặp"
  
  const questions = [
    {
      id: 1,
      question: "Fruit Mart có xác nhận đơn hàng với tôi không?",
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
      answer: "Fruit Mart hỗ trợ giao hàng và thanh toán tận nơi " +
        "cho các đơn hàng có tổng trị giá từ 100.000đ trở xuống trên toàn quốc." +
        " Quý khách có thể tham khảo thêm các phương thức thanh toán khác."
    },

    {
      id: 4,
      question: "Fruit Mart bán những sản phẩm gì?",
      answer: "Được thành lập từ tháng 10/2024, đến nay Fruit Mart cung cấp các sản phẩm như sau: " +
        "trái cây tươi, nước ép và trái cây lạnh đóng hộp."
    },

    {
      id: 5,
      question: "Làm thế nào để tôi nhận biết sản phẩm còn hay hết hàng?",
      answer: "Quý khách có thể nhận biết sản phẩm còn hàng hay hết hàng tại Fruit Mart " +
        "bằng cách truy cập vào thông tin chi tiết của sản phẩm và kiểm tra trạng thái sau: Nút mua hàng hiển thị và ngược lại."
    }
  ]

  return(
    <>
      <div className="content">
        <div className="url-content">
          <Link to="/">Trang chủ</Link> / <span>Câu hỏi thường gặp</span>
        </div>

        <h3>Câu hỏi thường gặp</h3><br/>

        <hr/>

        <div className="questions">
          {questions.map(ques =>{
            return(
              <details  className="question" key={ques.id}>
                <summary className="mess">{ques.question}</summary>
                <span className="hidden">{ques.answer}</span>
              </details>
            )
          })}
        </div>
      </div>
    </>
  )
}
  
  export default Question