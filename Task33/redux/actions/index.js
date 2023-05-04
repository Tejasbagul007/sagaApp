import { constants as types } from '../actionTypes';

export const addMobile = (payload)=>{
    // console.log("Show data from actions", payload);
    const action = {
        type: types.ADD_MOBILE,
        payload,
    };

    return action;

};

// Update Mobile
const updateMobile = (payload)=>{
    const action = {
        type: types.UPDATE_MOBILE,
        payload,
    };

    return action;

};


export const deleteMobile = (payload)=>{
    const action = {
        type: types.DELETE_MOBILE,
        payload,
    };

    return action;

};


const storeMobile = (payload)=>{
    const action = {
        type: types.STORE_MOBILE,
        payload,
    };

    return action;

};

module.exports = {
    addMobile,
    updateMobile,
    deleteMobile,
    storeMobile,

};
