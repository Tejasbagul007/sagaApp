import { constants as types } from '../actionTypes';

const initialState = {
    mobile: [],
};
const addMobilesReducer = (state = initialState, action) =>{
  switch (action.type){
     case types.ADD_MOBILE:{
        // console.log("Data from reducers", action.payload);
        return {
            mobile: [...state.mobile, action.payload],
        };
     }

     case types.DELETE_MOBILE: {
        let result = state.filter(item=>{
            return item.mobiles !== action.payload;
        });
        return [...result  ];
     }
     default :
         return state;
  }
};

module.exports = {
    addMobilesReducer,
};
