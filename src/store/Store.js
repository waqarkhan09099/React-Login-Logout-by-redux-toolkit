import React from 'react';
import {createStore} from 'redux'
const initialState = {
    counter:0,
    showCounter:true
}
const CounterReducer = (state=initialState,action) => {
    if(action.type==="increment"){
        return {
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }
    if(action.type==="decrement"){
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(action.type==="step"){
        return {
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type==="showCounter"){
        return {
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    return state;
}

const Store=createStore(CounterReducer); 

export default Store;