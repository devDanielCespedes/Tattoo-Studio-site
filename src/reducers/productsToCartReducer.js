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
    case "UPDATE_QUANTITY":
        let cart = state.cart;
        let updateCart = Object.assign([], cart.map(product => {
            if(product.newProduct.id === action.payload.productId) {
                product.quantity = action.payload.quantity
            }

            return product;
        }));
        return {
            ...state,
            cart: updateCart
        }

    case "REMOVE_ITEM_CART":
      return {
        ...state,
        cart: action.upDateCart,
      };
    case 'TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.totalPriceCart
      }
    default:
      return state;
  }
}

export default productToCartReducer;
