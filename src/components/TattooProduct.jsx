import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions/cartActions';
class TattoosProducts extends React.Component {
    constructor() {
        super();
        this.isProductInTheCart = this.isProductInTheCart.bind(this);
    }

    isProductInTheCart(newProduct) {
     const { addToCartFunc, cart } = this.props

     const alreadyExistThisProductInTheCart = cart.find(product => product.newProduct.id === newProduct.id);
     alreadyExistThisProductInTheCart ? alert('This product has already been added to the cart')
     : addToCartFunc(newProduct);
    }
    render() {
        const { product } = this.props;
        return (
            <div>
                <img src={product.thumbnail} alt="tattoos products" />
                <p className='tattoo-product-title'>{product.title}</p>
                <p className='tattoo-product-price'>{product.price}</p>
                <button
                    type='button'
                    className='add-to-cart-btn'
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
    addToCartFunc: (newProduct) => dispatch(addToCartAction(newProduct)),
})

export default connect(mapStateToProps, mapDispathToProps)(TattoosProducts);
