import { combineReducers } from 'redux';
import galeryTattoosReducer from './galeryTattoosReducer';
import productToCartReducer from './productsToCartReducer';

export default combineReducers({
    galeryTattoosReducer,
    productToCartReducer,
})