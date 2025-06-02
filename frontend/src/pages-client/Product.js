import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Container, Column } from '../LayoutContainer'
import { ProductList } from '../compontents'
import { useAxios } from '../hooks'
import './scss/Product.scss'

function Product() {
  document.title = "Tất cả sản phẩm"
  const [products, setProduct] = useState([])
  const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-product`)
  
  useEffect(() => {
    if(data) {
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

          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2 d-sm-flex product-title"}>
            <h3>TẤT CẢ SẢN PHẨM</h3>
            <select 
              className="form-select form-control" 
              id="sort" 
              name="sort"
            >    
              <option value="">-- Sắp xếp theo --</option>
              <option value="Từ A - Z">Từ A - Z</option>
              <option value="Từ Z - A">Từ Z - A</option>
              <option value="Giá từ cao đến thấp">Giá từ cao đến thấp</option>
              <option value="Giá từ thấp đến cao">Giá từ thấp đến cao</option>
              </select>
          </Column>
        </Row>
      </Container>
      
      <ProductList title="Quần áo" category={`${process.env.REACT_APP_CLOTHER}`} products={products} />
      <ProductList title="Mũ" category={`${process.env.REACT_APP_CAP}`} products={products} />
      <ProductList title="Giày dép" category={`${process.env.REACT_APP_SHOES}`} products={products} />
      <ProductList title="Phụ kiện" category={`${process.env.REACT_APP_ACCESSORY}`} products={products} />
    </main>
  )
}

export default Product