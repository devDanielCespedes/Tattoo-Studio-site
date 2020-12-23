import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';
class Cart extends React.Component {
    render() {
        const { cart } = this.props;
        console.log(cart)
        return(
            <div>
                {cart.length !== 0 ? cart.map((product) => <CartProduct product={product} />) :  'empty cart'}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
})

export default connect(mapStateToProps)(Cart);
