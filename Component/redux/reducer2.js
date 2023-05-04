import ProductData from '../ProductData';
import { SET_PRODUCT_NAME, SET_PRODUCT_DESCRIPTION, SET_PRODUCT_PRICE } from './constants';


const productReducer = (state = ProductData, action) => {
  switch (action.type) {
    case SET_PRODUCT_NAME:
      return { ...state, productName: action.data };
    case SET_PRODUCT_DESCRIPTION:
      return { ...state, productDescription: action.data };
    case SET_PRODUCT_PRICE:
      return { ...state, productPrice: action.data };
    default:
      return state;
  }
};

export default productReducer;
