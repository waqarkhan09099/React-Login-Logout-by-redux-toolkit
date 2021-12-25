import React from "react";
import {useSelector , useDispatch} from 'react-redux'
import {counterActions} from '../store/CounterSlice'

import classes from './counter.module.css'
const Counter = () => {
  const dispatch =useDispatch();
   const counter=useSelector(state=>state.countervalue.counter)
   const showCounter=useSelector(state=>state.countervalue.showCounter)
    console.log(counter)
    console.log(showCounter)
   const incrementHandler=()=>{
    //  dispatch({type:"increment"})
    dispatch(counterActions.increament());
   }
   const toggelHandler=()=>{
    //  dispatch({type:"showCounter"})
    dispatch(counterActions.toggel());
   }
   const decrementHandler=()=>{
    //  dispatch({type:"decrement"})
    dispatch(counterActions.decreament());

   }
   const stepHandler=()=>{
    //  dispatch({type:"step",amount:counter})
    dispatch(counterActions.step(10));

   }
  return (
    <div className={classes.container}>
      <h1>Counter</h1>
      {showCounter&&<h2>{counter}</h2>}
      <div className={classes.buttonBox}>
        <button onClick={incrementHandler}>Add</button>
        <button onClick={decrementHandler}>Sub</button>
        <button onClick={stepHandler}>Step</button>
        <button onClick={toggelHandler}>toggelHandler</button>
      </div>
    </div>
  );
};

export default Counter;
