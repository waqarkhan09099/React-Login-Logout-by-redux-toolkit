import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

const loginstate={logincondition:false}

const LoginSlice=createSlice({
    name:'Login and logout',
    initialState:loginstate,
    reducers:{
        login(state){
            state.logincondition=true
        },
        logout(state){
            state.logincondition=false
        }
    }
})

export const loginActions= LoginSlice.actions;


export default LoginSlice.reducer;