import React, { useState } from "react";
// import { Component } from 'react';
import logo from '../../logo.png';


import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
  FormText
} from "reactstrap";
import '../../App.css';
import '../../css/signIn.css';
// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useHistory, useLocation } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);

  const SignInSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const payload = await response.json();
    if (response.status >= 400) {
      setAuth(false);
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      sessionStorage.setItem("token", payload.token);

      let { from } = location.state || { from: { pathname: "/submissions" } };
      history.replace(from);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin-wrapper">
        <div className="title-container">
            <h1 className="title">Login</h1>
        </div>
        <div className="loginGoogle-container">
          <input id="loginGoogle" type="button" value="Login with Google" />
        </div>          
        <div className="loginLinkedIn-container">
          <input id="loginlinkedIn" type="button" value="Login with LinkedIn " />
        </div>

        <form className="inputForm">
            
            <div className="user-container">
                <input id="userName" type="text" placeholder="Email Address" required />
            </div> 
            <div className="pw-container">
                <input id="password" type="Password" placeholder="Password" required />
            </div> 
            <input id="login" type="button" onclick="validateUser()" value="Login" />
            <a id="forgotPassword" href="#">Forgot Password?</a> <br/> <br/>          
       </form>

        <a id="needAccount" href="#">Need an account?</a>
        <a id="signUp" href="#">Sign Up</a>
        <br/>
        <br/>
    </div>
  );
};

export default SignIn;
