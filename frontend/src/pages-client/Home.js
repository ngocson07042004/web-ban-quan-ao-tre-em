import { useEffect, useState } from 'react'
import { Slider, ProductList } from '../compontents'
import { useAxios } from '../hooks'


function Home() {
  document.title = "T-Shop | Shop bán quần áo thời trang trẻ em"
  const [products, setProduct] = useState([])
  const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-product`)
  
  useEffect(() => {
    if(data){
      setProduct(data)
    }
  },[data])

  return (
    <main className="main" style={{ minHeight: "100vh" }}>
      <Slider/>

      <ProductList title="Quần áo bé trai" gender="Trai" products={products} />
      <ProductList title="Quần áo bé gái" gender="Gái" products={products} />
      <ProductList title="Mũ" category={`${process.env.REACT_APP_CAP}`} products={products} />
    </main>
  )
}

export default Home