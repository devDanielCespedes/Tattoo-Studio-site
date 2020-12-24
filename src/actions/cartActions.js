const addToCartType = "ADD_TO_CART";
const removeItemCartType = "REMOVE_ITEM_CART";
const updateQuantityType = 'UPDATE_QUANTITY';

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
  const upDateCart = cart.filter((product) => product.newProduct.id !== itemToRemove.id);
  return {
    type: removeItemCartType,
    upDateCart: upDateCart,
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
