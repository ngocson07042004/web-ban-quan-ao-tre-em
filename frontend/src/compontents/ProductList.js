import { useDeferredValue, useState } from 'react'
import { Row, Column, Container } from '../LayoutContainer'
import { ItemProduct } from '../compontents'
import './scss/ProductList.scss'

function ProductList({ title, gender, category, products }) {
    const productsDeffered = useDeferredValue(products)
    const [showAll, setShowAll] = useState(false)

    const filteredProducts = Array.isArray(productsDeffered) ? productsDeffered.filter(p => p.genderProduct === gender || p.idCategory === category) : []
    const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4)

    return (
        <Container container={"container container-product-list"}>
            <div className="title-product-list">
                <button className="title fs-5">{title}</button>
                {filteredProducts.length > 4 && (
                    <button className="btn btn-link" type="button" onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Thu gọn" : "Xem tất cả"}
                    </button>
                )}
            </div>

            <Row row="row product-item">
                {visibleProducts.map(product => (
                <Column col={6} sm={6} md={6} lg={3} xl={3} xxl={3} key={product.idProduct} className="p-3">
                    <ItemProduct product={product} />
                </Column>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList