const addToCartType = "ADD_TO_CART";

export default function addToCartAction(newProductToCart) {
  return {
    type: addToCartType,
    newProductToCart,
  };
}
