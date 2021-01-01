import React from 'react';
import { connect } from 'react-redux';
import { totalPriceAction } from '../actions/cartActions';
import CartProduct from '../components/CartProduct';
class Cart extends React.Component {
    render() {
        let { cart, totalPriceUpdate, totalPrice } = this.props;
        let allPrices = 0;
        cart.map(product => allPrices += product.newProduct.price * product.quantity)
        totalPriceUpdate(allPrices)
        return (
            <div className='cart-content'>
                {cart.length !== 0 ? cart.map((product) => <CartProduct key={product.newProduct.id} product={product} />) : 'empty cart'}
                <p className='total-price'>Total: ${totalPrice.toFixed(2)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
    totalPrice: state.productToCartReducer.totalPrice,
})

const mapDipatchToProps = (dispatch) => ({
    totalPriceUpdate: (totalPrice) => dispatch(totalPriceAction(totalPrice)),
})
export default connect(mapStateToProps, mapDipatchToProps)(Cart);
