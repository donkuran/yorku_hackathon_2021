import React, { useState } from "react";
import { Component } from 'react';
import '../../css/signIn.css';
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
    <Container>
        <div className="signIn-container">
            <Row>
                <h2>Sign In</h2>
            </Row>  
            <Form inline>
              <Row>
          
                <Col md={3} sm={6} xs={6}>
                  <FormGroup controlID="signID">
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail address"
                    />
                  </FormGroup>
                </Col>
     
              </Row>

              <Row>
        
                <Col md={3} sm={6} xs={6}>
                  <FormGroup controlID="signInpassword">
                    <Label for="password">Password</Label>
                   <Input
                      type="password"
                      name="password"
                      id="password"
                       placeholder="Password"
                    />
                  </FormGroup>
                </Col>
       
              </Row>
      
             
                <Button>Sign up</Button>
             
            
            </Form>
        </div>
    </Container>  
  );
};

export default SignIn;
