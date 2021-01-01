const addToCartType = "ADD_TO_CART";
const removeItemCartType = "REMOVE_ITEM_CART";
const updateQuantityType = 'UPDATE_QUANTITY';
const totalPrice = 'TOTAL_PRICE';

export function addToCartAction(newProduct) {
  return {
    type: addToCartType,
    newProductToCart: {
      newProduct,
      quantity: 1,
    }
  };
}

export function removeItemCartAction(cart, itemToRemove) {
  const upDateCart = cart.filter((product) => product !== itemToRemove);
  return {
    type: removeItemCartType,
    upDateCart,
  };
}

export function upDateCartQuantity(productId, quantity) {
  return {
    type: updateQuantityType,
    payload: {
      productId,
      quantity,
    }
  }
}

export function totalPriceAction(totalPriceCart) {
  return {
    type: totalPrice,
    totalPriceCart,
  }
}
