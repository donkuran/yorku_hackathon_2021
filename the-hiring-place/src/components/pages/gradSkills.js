import React, { useState } from "react";
import { Container, NavLink, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";

const GradSkills = () => {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [role, setRole] = useState("");
  const [program, setProgram] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");
  const [link5, setLink5] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [education, setEducation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [techSkills, setTechSkills] = useState("");
  const [personalSkills, setPersonalSkills] = useState("");
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
        name,
        pronouns,
        role,
        program,
        gradYear,
        location,
        country,
        link1,
        link2,
        link3,
        link4,
        link5,
        aboutMe,
        education,
        startDate,
        endDate,
        techSkills,
        personalSkills,
        languages,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setName("");
    setPronouns("");
    setRole("");
    setProgram("");
    setGradYear("");
    setLocation("");
    setCountry("");
    setLink1("");
    setLink2("");
    setLink3("");
    setLink4("");
    setLink5("");
    setAboutMe("");
    setAboutMe("");
    setEducation("");
    setStartDate("");
    setEndDate("");
    setTechSkills("");
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
                          value={techSkills}
                          onChange={(e) => setTechSkills(e.target.value)}
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
                          value={personalSkills}
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
