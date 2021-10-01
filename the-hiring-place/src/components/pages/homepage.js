import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "reactstrap";
import NavHomepage from "../shared/navHomepage";
import "../../css/honeyComb.css";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/signup.css";
import Hands from "../../images/hands.png";
import HexagonBackground from "../../images/hexagonBackground.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Row
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
              <Row
                style={{
                  color: "#3AC2EF",
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontSize: "96px",
                }}
              >
                YOH!
              </Row>
              <p style={{ fontSize: "38px" }}>
                Welcome to the
                <br />
                <b>YORK OPPORTUNITY HUB</b>
              </p>
              <Row>
                <p style={{ fontSize: "" }}>
                  The York Opportunity Hub is a new database for York University
                  <br />
                  Graduates to showcase their work, skills and experience,
                  thereby
                  <br />
                  allowing recruiters and employers to learn more about them as
                  <br />
                  individuals and potential .
                </p>
              </Row>
              <Row>
                <Button
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#3AC2EF",
                    border: "none",
                  }}
                  tag={RouteLink}
                  to="/signUp"
                >
                  Get started!
                </Button>
              </Row>
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
      </Row>
      <Row
        className="d-flex align-items-center"
        style={{
          width: "100%",
          height: "515px",
          backgroundColor: "#F5F5F5",
          margin: "0px",
        }}
      >
        <Row style={{}}>
          <Col>
            <Container
              style={{
                width: "700px",
                height: "515px",
                marginLeft: "5rem",
                paddingTop: "4rem",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Helping York University Grads stand out and get noticed.
              </h2>
              <p>
                The purpose of your YOH! Profile is to highlight your unique set
                of skills,
                <br /> strengths and interests.
                <br />
                YOH! Go show the world your potential as a team member and
                future
                <br /> employee!
              </p>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Making it easy for companies to find new talent for a team.
              </h2>
              <p>
                We have designed the YOH! interface to be easily searchable by
                any type of
                <br /> program our students graduate from, as well as by any
                type of skills you are
                <br /> looking for on a team.
              </p>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                A team member is more than just a resume...
              </h2>
              <p>
                YOH! Graduate Profiles offer numerous areas for our students to
                give employers a<br /> sense of their unique personalities and
                abilities. We make it easy to search our
                <br /> talent pool and discover a new brilliant mind that you
                can <b>work with.</b>
              </p>
            </Container>
          </Col>
          <Col>
            <Container style={{ width: "600px", height: "515px" }}>
              <img
                src={Hands}
                alt="fists put together in a circle"
                style={{ width: "auto", height: "358px", marginTop: "4rem" }}
              />
            </Container>
          </Col>
        </Row>
      </Row>
      <Row
        style={{
          width: "100%",
          height: "515px",
          backgroundColor: "#F5F5F5",
          margin: "0px",
          backgroundImage: `url(${HexagonBackground})`,
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "54px", paddingTop: "30px" }}>
          Ready to Get Started?
        </h2>
        <Row style={{ marginTop: "35px" }}>
          <Col>
            <Container
              style={{
                width: "356px",
                height: "292px",
                border: "1px solid #3AC2EF",
                borderRadius: "20%",
                backgroundColor: "#ffffff",
                boxShadow: "10px 10px 30px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i
                class="fas fa-user-plus fa-3x"
                style={{ paddingTop: "22px" }}
              ></i>
              <h3 style={{ fontSize: "24px", paddingTop: "7.94px" }}>
                Join Now
              </h3>
              <p>
                Simply sign up as a York
                <br /> Graduating Student or as an
                <br />
                Employer/Recruiter looking
                <br /> for talent.
              </p>
            </Container>
          </Col>
          <Col>
            <Container
              style={{
                width: "356px",
                height: "292px",
                border: "1px solid #3AC2EF",
                borderRadius: "20%",
                backgroundColor: "#ffffff",
                boxShadow: "10px 10px 30px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i
                class="fas fa-address-card fa-3x"
                style={{ paddingTop: "22px" }}
              ></i>
              <h3 style={{ fontSize: "24px", paddingTop: "7.94px" }}>
                Create Profile
              </h3>
              <p>
                Students create a profile to share their
                <br /> background, experience,and skills.
              </p>
              <p>
                Recruiters/Employers create a<br /> quick profile to save
                preferences
                <r />
                and then proceed to search.
              </p>
            </Container>
          </Col>
          <Col>
            <Container
              style={{
                width: "356px",
                height: "292px",
                border: "1px solid #3AC2EF",
                borderRadius: "20%",
                backgroundColor: "#ffffff",
                boxShadow: "10px 10px 30px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i
                className="fas fa-network-wired fa-3x"
                style={{ paddingTop: "22px" }}
              ></i>
              <h3 style={{ fontSize: "24px", paddingTop: "7.94px" }}>
                Connect
              </h3>
              <p>
                {" "}
                To connect or discuss
                <br /> potential job opportunities,
                <br /> our interface allows you to
                <br /> Add Favorites, send Messages
                <br /> and receive Notifications
                <br /> through your E-mail inbox.
              </p>
            </Container>
          </Col>
        </Row>
        <Row style={{}}>
          <span>
            <Button
              style={{
                color: "#ffffff",
                backgroundColor: "#3AC2EF",
                border: "none",
                marginTop: "25px",
              }}
              tag={RouteLink}
              to="/signUp"
            >
              Get started!
            </Button>
          </span>
        </Row>
      </Row>
      <Row
        className="d-flex align-items-center"
        style={{
          width: "100%",
          height: "555px",
          backgroundColor: "none",
          paddingTop: "3rem",
        }}
      >
        <Row>
          <Col>
            {" "}
            <Container
              style={{
                width: "715px",
                height: "515px",
                marginLeft: "70px",
              }}
            >
              <p
                style={{
                  fontSize: "300px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#686260",
                }}
              >
                YOH!
              </p>
            </Container>
          </Col>
          <Col>
            <Container
              style={{
                width: "500px",
                height: "515px",
                paddingTop: "40px",
                marginLeft: "6rem",
              }}
            >
              <div
                className="signup-wrapper"
                style={{ padding: "20px", width: "400px" }}
              >
                <p>
                  Have any questions? Just ask! We are here to help you reach
                  your next goal.
                </p>
                <Form className="inputForm" onSubmit={ContactSubmit}>
                  <div className="name-container">
                    <input
                      id="contactName"
                      type="name"
                      placeholder="Name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        paddingLeft: "3px",
                        letterSpacing: "0.03rem",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="email-container"
                    style={{ paddingTop: "20px" }}
                  >
                    <input
                      id="contactEmail"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        paddingLeft: "3px",
                        letterSpacing: "0.03rem",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="message-container"
                    style={{ paddingTop: "20px" }}
                  >
                    <textarea
                      id="contactMessage"
                      type="password"
                      placeholder="Message"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        paddingLeft: "3px",
                        letterSpacing: "0.1rem",
                        width: "100%",
                        height: "150px",
                      }}
                    />
                  </div>
                  <Button
                    id="signUp"
                    type="submit"
                    style={{ color: "#ffffff", marginLeft: "0" }}
                  >
                    Send
                  </Button>
                </Form>
              </div>
            </Container>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Homepage;
