import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCT_PRICE, SET_PRODUCT_NAME, SET_PRODUCT_DESCRIPTION } from './constants';

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        data: item, //data or payload
    };
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item, //data or payload
    };
}

export const setProductName = (name) => ({
    type: SET_PRODUCT_NAME,
    data: name,
});
export const setProductDescription = (description) => ({
    type: SET_PRODUCT_DESCRIPTION,
    data: description,
});
export const setProductPrice = (price) => ({
    type: SET_PRODUCT_PRICE,
    data: price,
});
