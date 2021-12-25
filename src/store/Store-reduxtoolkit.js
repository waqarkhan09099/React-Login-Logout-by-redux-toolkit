import React from 'react';
import {counterSlice} from './CounterSlice'
// configurestore is use to make store of reducer methods of funtion
// createSlice is use to make reducers and perform action by method
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './LoginSlice';
import counterReducer from './CounterSlice'



// this is action of sclice to dipatch action and method works

// this is redux tool kit store
const store = configureStore({
    reducer: {countervalue:counterReducer , auth:loginReducer},
})



export default store;