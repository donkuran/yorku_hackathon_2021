import React, { useState } from "react";
import { Row, Col, Button, Container, NavLink, Form, Card, CardBody,CardText } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/settings.css";
import Navigation2 from "../shared/navigation2";

const GradProfilePage = () => {
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
  }
  setEmail("");
  setPassword("");
};

  return (
    <>
      <Navigation2 />
      <Container>
        <div>
          <Form>
            <div className="settings-wrapper">
              {!auth && (
                <Card className="text-white bg-primary my-5 py-4 text-center">
                  <CardBody>
                    <CardText className="text-white m-0">
                      Invalid credentials, please try again
                    </CardText>
                  </CardBody>
                </Card>
              )}
              <div>
                <h1 className="title">Account Details</h1>
              </div>
              <Form className="inputForm" onSubmit={SignInSubmit}>
                <div>
                  <input
                    id="userName"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ paddingLeft: "3px", letterSpacing: "0.03rem" }}
                  />
                </div>
                <div>
                  <input
                    id="password"
                    type="Password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ paddingLeft: "3px", letterSpacing: "0.03rem" }}
                  />
                </div>
                <Button id="signUp" type="submit">
                  Save
                </Button>
              </Form>
              <br />
              <br />
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradProfilePage;
