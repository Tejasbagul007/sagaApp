import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
         case ADD_TO_CART:
            return [
                ...state,    //This Add the product in cart
                action.data, // one-by-one
            ];
            // logic for Remove From cart....
            case REMOVE_FROM_CART:
                let result = state.filter(item=>{
                    return item.name !== action.data;
                });
                return [...result  ];

            default:
                return state;
    }
};
