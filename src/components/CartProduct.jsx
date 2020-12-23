import React from 'react';

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

    removeQuantity(){
        let { quantity } = this.state
        if(quantity === 1) {
            alert('quantidade minima atingida');
            return
        }
        this.setState({
            quantity: quantity -= 1
        })
    }
    render() {
        const { price, title, thumbnail } = this.props.product;
        const { quantity } = this.state
        return(
            <div>
                <img src={thumbnail} alt="tattoos product" />
                <p>{title}</p>
                <p>${price}</p>
                <button type='button'
                    onClick={() => this.removeQuantity()}
                >-</button>
                <span>quantity: {quantity}</span>
                <button type='button'
                    onClick={() => this.addQuantity()}
                >+</button>
            </div>
        )
    }
}

export default CartProduct;
