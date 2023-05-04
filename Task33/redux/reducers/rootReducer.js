import { combineReducers } from 'redux';
import { addMobilesReducer } from './MobileReducer';

const appReducer = combineReducers({
    addMobilesReducer,
});

const rootReducer = (state, action)=>{
    return appReducer(state, action)
};

export default rootReducer;
