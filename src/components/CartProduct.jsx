import React from 'react';
import { connect } from 'react-redux';
import removeItemCartAction from '../actions/removeItemCartAction';

class CartProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
        }
    }

    addQuantity() {
        let { quantity } = this.state
        this.setState({
            quantity: quantity += 1
        })
    }

    removeQuantity() {
        let { quantity } = this.state
        if (quantity === 1) {
            alert('quantidade minima atingida');
            return
        }
        this.setState({
            quantity: quantity -= 1
        })
    }
    render() {
        const { product, removeItem, cart } = this.props;
        const { quantity } = this.state;
        return (
            <div>
                <img src={product.thumbnail} alt="tattoos product" />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button type='button'
                    onClick={() => {
                        this.removeQuantity();
                    }
                    }
                >-</button>
                <span>quantity: {quantity}</span>
                <button type='button'
                    onClick={() => {
                        this.addQuantity();
                    }
                    }
                >+</button>
                <button type='button'
                    onClick={() => removeItem(cart, product)}
                >Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.productToCartReducer.cart,
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (cart, itemToRemove) => dispatch(removeItemCartAction(cart, itemToRemove)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
