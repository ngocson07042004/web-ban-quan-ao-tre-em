import { useParams, Link } from 'react-router-dom'
import { Container, Row, Column} from '../LayoutContainer'
import { useEffect, useState } from 'react'
import { useAxios } from '../hooks'

function Detail() {
    const { detail }  = useParams()
    const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-product`)
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        if(data) {
            setProductDetail(data.find(d => d.idProduct === detail))
        }
    }, [data, detail])
    
    return (
        <main className="main">
            <Container container={"container"}>
                <Row row={"row mt-2"}>
                    <Column sm={12} md={12} lg={12} xl={12} xxl={12} className={"p-2"}>
                        <Link to="/">Trang chủ</Link> / 
                        <Link to="/product">Sản phẩm</Link> /
                        <span className="text-success">{productDetail.nameProduct}</span>
                    </Column>
                </Row>
            </Container>
        </main>
    )
}

export default Detail