import React from "react";
import Styled from "styled-components";
import { loginActions } from '../store/LoginSlice'
import {useDispatch} from 'react-redux'

const Container = Styled.div`
    display:flex;
    width:100%;
    padding:1rem 3rem;
    align-items:center;
    background:indigo;
    color:white;
    justify-Content:space-between;
    & .menuBox{
        width:50%;
        display:flex;
        justify-content:flex-end;
    }
    & a{
        text-decoration:none;
        color:white;
        font-size:1.3rem;

    }
    & .menuBox ul{
        width:25%;
        justify-content:space-between;
        display:flex;
        list-style-type:none;
        align-items:center;
    }

    & .menuBox li:hover{
        transform:scale(1.1);
        transition:all 0.6s ease;
        border-bottom:2px solid white;
        cursor:pointer;
    }

    & button{
        background-color:white;
        color:indigo;
        border:2px solid grey;
        cursor:pointer;
    }

    & button:hover{
      transform:scale(1.1);
      background:transparent;
      color:white;
      transition:all 0.6s ease;
    }

    .buttonBox{
      width:20%;
      display:flex;
      justify-content:flex-end;
      align-items:center;
    }
`;

const NavBar = (props) => {
  const dispatch = useDispatch()
  const logoutHandler=()=>{
    dispatch(loginActions.logout())
  }
  return (
    <Container>
      <h1>LOGO</h1>
      {props.auth&&<div className="menuBox"> 
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="buttonBox">
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>}
    </Container>
  );
};


 


export default NavBar;
