import { createSlice } from '@reduxjs/toolkit';
import { MobileData } from '../../DisplayData';

export const userSlice = createSlice({
  name: 'mobiles',
  initialState: { value : MobileData },
  reducers: {
    addUser: (state, action) => {
      // console.log("hello", action);
      state.value.push(action.payload);
    },

    deleteMobile: (state, action) => {
      state.value = state.value.filter((mobile) => mobile.price !== action.payload.price);
    },

    updateColor: (state, action) => {
      state.value.map((mobile) => {
        if (mobile.price === action.payload.price) {
          mobile.color = action.payload.color;
        }
      });
    },
  },
});

export const { addUser, deleteMobile, updateColor } = userSlice.actions;
export default userSlice.reducer;









// import { UPDATE_FORM_DATA } from '../constant';

// const initialState = {};

// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_FORM_DATA:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   name: '',
//   email: '',
// };

// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_FORM_DATA:
//       return {
//         ...state,
//         name: action.payload.name,
//         email: action.payload.email,
//       };
//     default:
//       return state;
//   }
// };

// export default formReducer;
