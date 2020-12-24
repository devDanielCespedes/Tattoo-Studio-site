const removeItemCart = 'REMOVE_ITEM_CART';

export default function removeItemCartAction(cart, itemToRemove) {
    const upDateCart = cart.filter(product => product.id !== itemToRemove.id);
    return {
        type: removeItemCart,
        upDateCart: upDateCart,
    }
}
