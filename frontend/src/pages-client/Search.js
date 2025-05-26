import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { ItemProduct } from '../compontents'

function removeVietnameseTones(str) {
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
}

function Search() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const keywordRaw = searchParams.get("search") || ""
  const keyword = removeVietnameseTones(keywordRaw.toLowerCase())

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/all-product`)
      .then(res => {
        const filtered = res.data.filter(product =>
          removeVietnameseTones(product.name.toLowerCase()).includes(keyword)
        )
        setProducts(filtered)
      })
      .catch(err => console.log(err))
  }, [keyword])

  return (
    <div>
      <h2>Kết quả cho: "{keywordRaw}"</h2>
      {products.length ? (
        <ul>
          {products.map(product => (
            <li key={product.idProduct}>
              <ItemProduct product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  )
}

export default Search