const INITIAL_STATE = {
    cart: [],
    total: 0,
};

function productToCartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                cart: [action.newProductToCart, ...state.cart],
                total: action.total + state.total,
            }
        default:
            return state;
    }
}

export default productToCartReducer;
