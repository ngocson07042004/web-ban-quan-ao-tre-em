import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ItemProduct } from '../compontents'
import { Column, Container, Row } from '../LayoutContainer'
import { useDataGlobal } from '../hooks'

function Search() {
  const { query, filter, setFilter } = useDataGlobal()

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() !== "") {
        try {
          const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/search?q=${query}`)
          
          if(res.data === "Error") {
            setFilter([])
          }
          else {
            setFilter(res.data)
          }
        }
      catch(err) {
        console.log(err)
        setFilter([])
      }
    }
  }
  fetchData()
  }, [query, setFilter])
  
  return (
    <main className="main mt-4" style={{ minHeight: "70vh" }}>
      <Container container={"container"}>
        <Row row={"row"}>
          <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
            <Link to="/">Trang chủ</Link> / <span className="text-success">Tìm kiếm sản phẩm</span>
          </Column>

          <Column col={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <h4>Trả về kết quả cho: "{query}"</h4>
          </Column>

          <Column col={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            {filter.length ? 
            (<Row row={"row"}>
              {filter.map(item => (
                <Column col={3}>
                  <ItemProduct product={item}/>
                </Column>
            ))}
            </Row>) : 
            (<div>
              <p>Không có sản phẩm nào</p>
            </div>)
            }
          </Column>
        </Row>
      </Container>
    </main>
  )
}

export default Search