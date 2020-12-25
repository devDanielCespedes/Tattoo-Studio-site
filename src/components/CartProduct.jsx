import React from 'react';
import { connect } from 'react-redux';
import { removeItemCartAction, upDateCartQuantity } from '../actions/cartActions';

class CartProduct extends React.Component {
    addQuantity(product) {
        let { quantity } = product
        const { upDateQuantity } = this.props
        if (quantity >= product.newProduct.available_quantity) {
            alert(`${quantity} is the quantity we have in stock`)
            return
        }
        quantity = quantity += 1
        upDateQuantity(product.newProduct.id, quantity)
    }

    removeQuantity(product) {
        let { quantity } = product
        const { upDateQuantity } = this.props
        if (quantity === 1) {
            alert(`${quantity} item is the minimum allowed`);
            return
        }

        quantity = quantity -= 1
       upDateQuantity(product.newProduct.id, quantity)
    }
    render() {
        const { product, removeItem, cart } = this.props;
        return (
            <div className='cart-product'>
                <img src={product.newProduct.thumbnail} alt="tattoos product" />
                <p>{product.newProduct.title}</p>
                <div className='div-quantity'>
                    <button type='button'
                        onClick={() => {
                            this.removeQuantity(product);
                        }
                        }
                    >-</button>
                    <span className='quantity-item'>{product.quantity}</span>
                    <button type='button'
                        onClick={() => {
                            this.addQuantity(product);
                        }
                        }
                    >+</button>
                    <button type='button'
                        className='remove-item-btn'
                        onClick={() => {
                            removeItem(cart, product)
                        }
                        }
                    >Remove</button>
                </div>
                <p>Price ${(product.newProduct.price).toFixed(2)}</p>
                <p>Subtotal ${(product.newProduct.price * product.quantity).toFixed(2)}</p>
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
