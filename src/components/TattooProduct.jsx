import React from 'react';
import { connect } from 'react-redux';
import addToCartAction from '../actions/addToCartAction';
class TattoosProducts extends React.Component {
    constructor() {
        super();
        this.isProductInTheCart = this.isProductInTheCart.bind(this);
    }

    isProductInTheCart(newProduct) {
     const { addToCartFunc, cart } = this.props

     const alreadyExistThisProductInTheCart = cart.find(product => product.id === newProduct.id)
     alreadyExistThisProductInTheCart ? alert('This product has already been added to the cart')
     : addToCartFunc(newProduct);
    }
    render() {
        const { product } = this.props;
        return (
            <div>
                <img src={product.thumbnail} alt="tattoos products" />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button
                    type='button'
                    onClick={() => this.isProductInTheCart(product)}
                >add to cart</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
})

const mapDispathToProps = (dispatch) => ({
    addToCartFunc: (newProduct, total) => dispatch(addToCartAction(newProduct)),
})

export default connect(mapStateToProps, mapDispathToProps)(TattoosProducts);
