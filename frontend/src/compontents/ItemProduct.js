import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataGlobal } from '../hooks'
import { formatPrice, handleAddToCart, shortenText } from '../function'
import './scss/ItemProduct.scss'

function ItemProduct({ product }) {
    const navDetail = useNavigate()
    const { setCarts, checkLogin } = useDataGlobal()

    return (
        <div className="card item-product">
            <div className="card-header">
                <img src={product.imageUrl} className="card-img-top" alt={product.nameProduct}/>
            </div>
            
            <div className="card-body">
                <h6 className="card-title">{shortenText(product.nameProduct, product.nameProduct.length / 2 + 10)}</h6>
                
                <p className="card-text text-success">Giá: {formatPrice(product.price)}</p>
            </div>

            <div className="card-footer">
                <button type="button" className="btn btn-success" id="btn-cart" 
                    onClick={() => handleAddToCart(checkLogin.auth, product?.idProduct, 
                    product?.nameProduct, product?.imageUrl, product?.price, setCarts)}
                >
                    <i className="fa-solid fa-shopping-cart"></i>
                    <span> Thêm giỏ hàng</span> 
                </button>

                <button type="button" className="btn" onClick={() => navDetail(`/product/${product.idProduct}`)}>
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}

export default React.memo(ItemProduct)