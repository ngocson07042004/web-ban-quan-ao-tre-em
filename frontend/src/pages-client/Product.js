import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Container, Column } from '../LayoutContainer'
import { ProductList } from '../compontents'
import { useAxios } from '../hooks'

function Product() {
  document.title = "Tất cả sản phẩm"
  const [products, setProduct] = useState([])
  const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-product`)
  
  useEffect(() => {
    if(data){
      setProduct(data)
    }
  },[data])

  return (
    <main className="main">
      <Container container={"container"}>
        <Row row={"row mt-2"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Tất cả sản phẩm</span>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <h3>TẤT CẢ SẢN PHẨM</h3>
          </Column>

          <Column sm={12} md={12} lg={12} xl={12} xxl={12}>
            <ProductList title="Quần áo" category={`${process.env.REACT_APP_CLOTHER}`} products={products} />
            <ProductList title="Mũ" category={`${process.env.REACT_APP_CAP}`} products={products} />
          </Column>
        </Row>
      </Container>
    </main>
  )
}

export default Product