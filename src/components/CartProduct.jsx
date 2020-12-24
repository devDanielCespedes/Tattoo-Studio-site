import React from 'react';
import { connect } from 'react-redux';
import { removeItemCartAction, upDateCartQuantity } from '../actions/cartActions';

class CartProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
        }
    }

    addQuantity(product) {
        let { quantity } = this.state
        const { upDateQuantity } = this.props
        console.log(product)
        if(quantity >= product.newProduct.available_quantity) {
            alert('limite em estoque atingido')
            return
        }
        this.setState(({
            quantity: quantity += 1
        }), () => upDateQuantity(product.newProduct.id, quantity))
    }

    removeQuantity(product) {
        let { quantity } = this.state
        const { upDateQuantity } = this.props
        if (quantity === 1) {
            alert('quantidade minima atingida');
            return
        }
        this.setState(({
            quantity: quantity -= 1
        }), () => upDateQuantity(product.newProduct.id, quantity))
    }
    render() {
        const { product, removeItem, cart } = this.props;
        const { quantity } = this.state;
        return (
            <div className='cart-product'>
                <img src={product.newProduct.thumbnail} alt="tattoos product" />
                <p>{product.newProduct.title}</p>
                <button type='button'
                    onClick={() => {
                        this.removeQuantity(product);
                    }
                }
                >-</button>
                <span>quantity: {quantity}</span>
                <button type='button'
                    onClick={() => {
                        this.addQuantity(product);
                    }
                }
                >+</button>
                <button type='button'
                    onClick={() => {
                        removeItem(cart, product.newProduct)
                    } }
                    >Remove</button>
                <p>${product.newProduct.price}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (cart, itemToRemove) => dispatch(removeItemCartAction(cart, itemToRemove)),
    upDateQuantity: (productId, quantity) => dispatch(upDateCartQuantity(productId, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
