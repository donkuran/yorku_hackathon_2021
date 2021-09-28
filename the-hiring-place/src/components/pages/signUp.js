import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink, NavLink as RouteLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import "../../App.css";
import "../../css/signUp.css";
import NavSignUp from "../shared/navSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("")

  const SignUpSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, userType }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setEmail("");
    setPassword("");
    setUserType("");
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <NavSignUp />
      <div className="signup-wrapper">
        <h1 className="title">Sign Up</h1>
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
        <br />
        <span
          style={{
            width: "100%",
            display: "inline-block",
            textAlign: "center",
            paddingTop:"1rem",
            fontFamily: "Montserrat",
            fontSize: "15px",
            letterSpacing: "-0.015em"
          }}
        >
          --OR--
        </span>
        <div className="inputForm">
          <Form className="inputForm" onSubmit={SignUpSubmit}>
            <div className="user-container">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: "3px", letterSpacing: "0.03rem" }}
              />
            </div>
            <div className="pw-container">
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: "3px", letterSpacing: "0.03rem" }}
              />
            </div>
            <div className="pw-container">
              <input
                id="password"
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: "3px", letterSpacing: "0.1rem" }}
              />
            </div>
            <div>
              <br />
              <FormGroup tag="fieldset">
                <Row
                  style={{
                    padding: "5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <Col sm={3}>
                    <legend style={{ fontWeight: "bold", fontSize: "14px" }}>
                      I am a:
                    </legend>
                  </Col>
                  <Col>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="user"
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                        />
                        Graduate looking for work
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="user"
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                        />
                        Recruiter looking to hire
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </div>
            <Button id="signUp" type="submit" >Sign Up</Button>
          </Form>
          <p
            style={{
              fontSize: "0.7rem",
              marginLeft: "4rem",
              paddingTop: "2rem",
            }}
          >
            By continuing you accept our standard{" "}
            <a id="terms" href="#">
              terms and conditions
            </a>{" "}
            and our{" "}
            <a id="terms" href="#">
              privacy policy.
            </a>
          </p>
          <a id="haveAccount" href="#" style={{ marginLeft: "10rem" }}>
            Have an account?
          </a>
          <NavLink id="signIn" tag={RouteLink} to="/signIn">
            Sign In
          </NavLink>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default SignUp;
