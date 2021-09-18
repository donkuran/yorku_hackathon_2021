import React, { useState } from "react";
// import { Component } from 'react';
import logo from "../../logo.png";

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
  CardTitle,
  CardBody,
  CardText,
  FormText,
} from "reactstrap";
import { NavLink, NavLink as RouteLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import "../../App.css";
import "../../css/signIn.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory, useLocation } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);

  const SignInSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
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

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Container>
      {!auth && (
        <Card className="text-white bg-primary my-5 py-4 text-center">
          <CardBody>
            <CardText className="text-white m-0">
              Invalid credentials, please try again
            </CardText>
          </CardBody>
        </Card>
      )}
      <div className="signin-wrapper">
        <div className="title-container">
          <h1 className="title">Login</h1>
        </div>
        <GoogleLogin
          className="loginGoogle-container"
          color="none"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            borderColor: "#3AC2EF",
            color: "#3AC2EF",
          }}
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        >
          Login with Google
        </GoogleLogin>
        <Button
          className="loginLinkedIn-container"
          color="none"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            borderColor: "#3AC2EF",
            color: "#3AC2EF",
          }}
        >
          Login with LinkedIn
        </Button>

        <Form className="inputForm" onSubmit={SignInSubmit}>
          <div className="user-container">
            <input
              id="userName"
              type="text"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pw-container">
            <input
              id="password"
              type="Password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button id="login">Login</Button>
          <NavLink id="forgotPassword" tag={RouteLink} to="/signUp">
            Forgot Password?
          </NavLink>{" "}
          <br /> <br />
        </Form>

        <a id="needAccount">Need an account?</a>
        <NavLink id="signUp" tag={RouteLink} to="/signUp">
          Sign Up
        </NavLink>
        <br />
        <br />
      </div>
    </Container>
  );
};

export default SignIn;
