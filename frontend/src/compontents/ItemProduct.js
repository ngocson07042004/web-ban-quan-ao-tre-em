import './scss/ItemProduct.scss'

function ItemProduct({ product }) {
    return (
        <div className="card item-product">
            <img src={product.imageUrl} className="card-img-top" alt={product.imageUrl}/>
            
            <div className="card-body">
                <h5 className="card-title fs-6">{product.nameProduct}</h5>
                
                <p className="card-text fs-6">Giá: {product.price}.000đ</p>
                
                <button type="button" className="btn text-center" id="btn-heart">
                    <i className="fa-solid fa-heart"></i>
                </button>

                <button type="button" className="btn text-center" id="btn-cart">
                    <i className="fa-solid fa-shopping-cart"></i>
                </button>

                <div className="btns-group d-flex justify-content-center">
                    <button className="btn btn-primary text-center" id="btn-detail">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct