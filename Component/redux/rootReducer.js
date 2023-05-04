import { combineReducers } from 'redux';
import { reducer } from './reducer';
import productReducer from './reducer2';

export default combineReducers({
    reducer,
    productReducer,
});
