import React from "react";
import { loginActions } from '../store/LoginSlice'
import {useDispatch} from 'react-redux'
import Styled from "styled-components";

const Container = Styled.div`
  display:flex;
    margin:1rem auto;
    color:indigo;
    max-width: 800px;
    padding:1rem;
    border-radius: 2rem;
    box-shadow: 2px 2px 10px rgba(128, 128, 128, 0.781);
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:transparent;
    background:rgba(91, 92, 90, 0.466);  
`;

const Form = Styled.form`
    display:flex;
    margin:1rem auto;
    color:indigo;
    max-width: 800px;
    padding:1rem;
    border-radius: 2rem;
    box-shadow: 2px 2px 10px rgba(128, 128, 128, 0.781);
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:transparent;
    background:rgba(91, 92, 90, 0.466);
    & button{
        transition:all 0.7s ease;
    }
    & button:hover{
        background-color:indigo;
        color:white;
        
    }
    & button:active{
        transform:translateY(-5px);
    }
    & .controls{
        padding:0.5rem;
    }
    & label{
        display:inline-block;
        font-size:1.2rem;
        color:indigo;
        padding:0.6rem;
        font-weight:bold;
    }
    & input{
        outline:none;
        border-radius:3rem;
        font-size:1rem;
        padding:0.5rem 1rem;
        border:2px solid indigo;
    }
    
`;

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginActions.login());
    console.log("click!!!!")
    
  };
  return (
    <Form onSubmit={submitHandler}>
      <h1>Login Form</h1>
      <div className="controls">
        <label htmlFor="email">Email: </label>
        <br />
        <input type="email" id="email" required />
      </div>
      <div className="controls">
        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" required/>
      </div>
      <button type="submit" >Submit</button>
    </Form>
  );
};

export const Profile = () => {
  return (
    <Container>
      <h1>My Profile</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem
        libero temporibus mollitia beatae similique provident repudiandae sunt
        quo distinctio, iste voluptatibus nisi natus, doloremque voluptate ab
        laudantium illo debitis?
      </p>
    </Container>
  );
};

export default LoginForm;
