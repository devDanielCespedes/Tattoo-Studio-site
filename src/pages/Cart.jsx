import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';
class Cart extends React.Component {
    render() {
        const { arrProductsToCart, total } = this.props;
        return(
            <div>
                {arrProductsToCart ? arrProductsToCart.map((product) => <CartProduct product={product} />) :  'cart'}
                <p>Total: ${total}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrProductsToCart: state.productToCartReducer.cart,
    total: state.productToCartReducer.total
})

export default connect(mapStateToProps)(Cart);
