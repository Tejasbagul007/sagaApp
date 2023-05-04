import { configureStore } from '@reduxjs/toolkit';
//import formReducer from './reducers/reducer';
//import rootReducer from './reducers/rootReducer';
 import usersReducer from './reducers/reducer';

const store = configureStore({
    reducer: {
      mobiles: usersReducer,
    },
  });

export default store;



// store.js
// import { createStore, combineReducers } from 'redux';
// import formReducer from './reducer';

// const rootReducer = combineReducers({
//   form: formReducer,
//   // other reducers can be added here
// });

// const store = createStore(rootReducer);

// export default store;





