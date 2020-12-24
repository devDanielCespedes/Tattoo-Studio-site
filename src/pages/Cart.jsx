import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';
class Cart extends React.Component {
    render() {
        let { cart } = this.props;
        let totalPrice = 0;
        cart.map(product => totalPrice += product.newProduct.price * product.quantity)
        return (
            <div className='cart-content'>
                {cart.length !== 0 ? cart.map((product) => <CartProduct product={product} />) : 'empty cart'}
                <p className='total-price'>Total price: {totalPrice.toFixed(2)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
})

export default connect(mapStateToProps)(Cart);
