import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import "bootstrap/dist/css/bootstrap.min.css";

const GradSkills = () => {
  const [technical_skills, setTechnicalSkills] = useState("");
  const [personal_skills, setPersonalSkills] = useState("");
  const [languages, setLanguages] = useState("");

  const gradProfileSubmit = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:4000/gradProfilePage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        technical_skills,
        personal_skills,
        languages,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setTechnicalSkills("");
    setPersonalSkills("");
    setLanguages("");
  };

  return (
    <>
      <Navigation2 />
      <GradProfileNav />
      <Container>
        <div className="gradProfile-wrapper">
          <Form onSubmit={gradProfileSubmit}>
            <div className="row">
              <div className="card">
                <div className="techskills-container">
                  <div className="cardTitle">Technical Skills</div>
                  <div className="techSkills">
                    This is where the added skills will be displayed
                  </div>
                  <div className="d-flex align-items-center">
                    <Row>
                      <Col>
                        <input
                          id="enterTechSkills"
                          type="text"
                          placeholder="Enter Skills"
                          required
                          value={technical_skills}
                          onChange={(e) => setTechnicalSkills(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Button id="addTechSkills">Add</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="personalSkills-container">
                  <div className="cardTitle">Personal Skills</div>
                  <div className="personalSkills">
                    This is where the added skills will be displayed
                  </div>
                  <div className="d-flex align-items-center">
                    <Row>
                      <Col>
                        <input
                          id="enterPersonalSkills"
                          type="text"
                          placeholder="Enter Skills"
                          required
                          value={personal_skills}
                          onChange={(e) => setPersonalSkills(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Button id="addPersonalTechSkills">Add</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="languages">
                  <div className="cardTitle">Languages</div>
                  <input
                    id="languages"
                    type="text"
                    placeholder="Languages"
                    required
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <section>
              <Button id="submit">Next</Button>
            </section>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradSkills;
