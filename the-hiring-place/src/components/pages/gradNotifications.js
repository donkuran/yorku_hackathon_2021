import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/settings.css";
import Navigation2 from "../shared/navigation2";
import "bootstrap/dist/css/bootstrap.min.css";

const GradNotification = () => {
  const [notification, setNotification] = useState("");
  const [auth, setAuth] = useState("");

  const SignInSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/notifications", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notification }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      setAuth(false);
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      sessionStorage.setItem("token", payload.token);
    }
    setNotification("");
  };

  return (
    <>
      <Navigation2 />
      <Container>
        <div>
          
        </div>
      </Container>
    </>
  );
};

export default GradNotification;
