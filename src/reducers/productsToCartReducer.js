const INITIAL_STATE = {
  cart: [],
  totalPrice: 0, 
};

function productToCartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.newProductToCart, ...state.cart],
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        cart: action.upDateCart,
      };
    default:
      return state;
  }
}

export default productToCartReducer;
