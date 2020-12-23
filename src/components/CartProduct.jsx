import React from 'react';

class CartProduct extends React.Component {
    render() {
        const {price, title, thumbnail } = this.props.product;
        return(
            <div>
                <img src={thumbnail} alt="tattoos product" />
                <p>{title}</p>
                <p>${price}</p>
                <button type='button'>-</button>
                <span>quantity: </span>
                <button type='button'>+</button>
            </div>
        )
    }
}

export default CartProduct;
