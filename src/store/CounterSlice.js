import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const CounterSlice = createSlice({
    name: 'counter',
    // thats a initialstate
    initialState: initialCounterState,
    // reducers have method to take perform action 
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        step(state, action) {
            // payload is for extra data input
            state.counter = state.counter + action.payload;
        },
        toggel(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterActions = CounterSlice.actions;


// this is action of sclice to dipatch acti

export default CounterSlice.reducer;