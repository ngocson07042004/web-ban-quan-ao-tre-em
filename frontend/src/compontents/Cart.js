import { Row, Column } from '../LayoutContainer'
import './scss/Cart.scss'

function Cart() {
    return (
        <div className="container-cart">
            <div className="cart-header">
                <h5>Giỏ hàng(0)</h5>
                <button type="button" className="btn" id="btn-close">
                    <i className="fa-solid fa-xmark fs-4"></i>
                </button>
            </div>

            <div className="cart-body">

            </div>

            <div className="cart-footer">
                <Row row={"row"}>
                    <Column className={"cart-footer-item"}>
                        <input id="check-all-cart" className="form-check-input mt-0" type="checkbox" value=""/>
                        <label htmlFor="check-all-cart">Tất cả</label>
                    </Column>

                    <Column className={"cart-footer-item"}>
                        <span>Tổng cộng: <span className="text-success">0đ</span></span>
                    </Column>

                    <Column className={"cart-footer-item"}>
                        <button type="button" id="btn-cart-sell" className="btn btn-danger">Mua hàng(0)</button>
                    </Column>
                </Row>
            </div>
        </div>
    )
}

export default Cart