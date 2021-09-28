import React, { useState } from "react";
import { Container, CardBody, Card, Row, Col, Form, Button } from "reactstrap";
import NavHomepage from "../shared/navHomepage";
import "../../css/honeyComb.css";
import { NavLink as RouteLink } from "react-router-dom";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ContactSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <NavHomepage />
      <div
        className="align-items-center"
        style={{
          width: "100%",
          height: "591px",
          backgroundColor: "#ffffff",
          margin: "0px",
        }}
      >
        <Row className="align-items-center" style={{ paddingTop: "4rem" }}>
          <Col>
            <Container
              style={{
                marginLeft: "60px",
                paddingLeft: "5rem",
              }}
            >
              <span
                style={{
                  color: "#3AC2EF",
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontSize: "96px",
                }}
              >
                YOH!
              </span>
              <p style={{ fontSize: "38px" }}>
                Welcome to the
                <br />
                <b>YORK OPPORTUNITY HUB</b>
              </p>
              <span>
                <p style={{ fontSize: "15.45px" }}>
                  The York Opportunity Hub is a new database for York University
                  <br />
                  Graduates to showcase their work, skills and experience,
                  thereby
                  <br />
                  allowing recruiters and employers to learn more about them as
                  <br />
                  individuals and potential .
                </p>
              </span>
              <span>
                <Button
                  style={{ color: "#ffffff", backgroundColor: "#3AC2EF" }}
                  tag={RouteLink}
                  to="/signUp"
                >
                  Get started!
                </Button>
              </span>
            </Container>
          </Col>
          <Col>
            <Container
              style={{
                backgroundColor: "#3AC2EF",
                width: "60%",
                height: "420px",
                padding: "7rem 0 0 8.5rem",
              }}
            >
              <svg
                version="1.2"
                baseProfile="tiny"
                id="Layer_1"
                // xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="170.49px"
                height="177px"
                viewBox="0 0 170.49 177"
                overflow="inherit"
                // xml:space="preserve"
              >
                <polygon
                  class="hex"
                  points="16.623,87 0,58.5 16.623,30 49.868,30 66.49,58.5 49.868,87 "
                />
                <polygon
                  class="hex"
                  points="68.623,57 52,28.5 68.623,0 101.868,0 118.49,28.5 101.868,57 "
                />
                <polygon
                  class="hex"
                  points="120.623,87 104,58.5 120.623,30 153.868,30 170.49,58.5 153.868,87 "
                />
                <polygon
                  class="hex"
                  points="120.623,147 104,118.5 120.623,90 153.868,90 170.49,118.5 153.868,147 "
                />
                <polygon
                  class="hex"
                  points="68.623,177 52,148.5 68.623,120 101.868,120 118.49,148.5 101.868,177 "
                />
                <polygon
                  class="hex"
                  points="16.623,147 0,118.5 16.623,90 49.868,90 66.49,118.5 49.868,147 "
                />
                <polygon
                  class="hex"
                  points="68.623,117 52,88.5 68.623,60 101.868,60 118.49,88.5 101.868,117 "
                />
              </svg>
            </Container>
          </Col>
        </Row>
      </div>
      <div
        className="d-flex align-items-center"
        style={{
          width: "100%",
          height: "515px",
          backgroundColor: "#F5F5F5",
          margin: "0px",
        }}
      >
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
      <div
        style={{
          width: "100%",
          height: "515px",
          backgroundColor: "#F5F5F5",
          margin: "0px",
        }}
      ></div>
      <div
        className="d-flex align-items-center"
        style={{
          width: "100%",
          height: "555px",
          backgroundColor: "none",
          margin: "0px",
        }}
      >
        <Row>
          <Col></Col>
          <Col>
            <Form></Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homepage;
