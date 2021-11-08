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
import "../../css/gradNotifications.css";
import Navigation2 from "../shared/navigation2";
import "bootstrap/dist/css/bootstrap.min.css";

const GradNotifications = () => {
  const [notification, setNotification] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth, setAuth] = useState(true);
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
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navigation2 />
      <Container className="card">
        <div className="notificationCenter">
         <row className="header-box">
           <h1 className="header-text">Notification Center</h1>
           </row> 
           <row className="text-box">
           <p>View recruiter connections and updates.</p>
          </row>
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
         
        
        </Form>
        
           <button id="contact-notifications">See More</button>
      
      </Container>
    
      </> 
  );
  };

export default GradNotifications;
