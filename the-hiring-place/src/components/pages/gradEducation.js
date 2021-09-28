import React, { useState } from "react";
import { Container, NavLink, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import "../../css/education.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import tooltip from "../../images/tooltip.png";

const GradEducation = () => {
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
        <div style={{ marginBottom: "12rem" }}>
          <Form onSubmit={gradProfileSubmit}>
            <div className="card">
              <div className="cardTitle">Education</div>
              <input
                id="programCourse"
                type="text"
                placeholder="Program / Course"
                required
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              />
              <Row>
                <Col>
                  <label className="startDate-label">Start Date</label>
                  <br />
                  <input
                    id="startDate"
                    className="input-text"
                    type="date"
                    placeholder="MM / YYYY"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Col>
                <Col>
                  <label className="endDate-label">End Date</label>
                  <br />
                  <input
                    id="endDate"
                    className="input-text"
                    type="date"
                    placeholder="MM / YYYY"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <input
                id="programCourse"
                type="text"
                placeholder="Program / Course"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              />
              <Row>
                <Col>
                  <label className="startDate-label">Start Date</label>
                  <br />
                  <input
                    id="startDate"
                    className="input-text"
                    type="date"
                    placeholder="MM / YYYY"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Col>
                <Col>
                  <label className="endDate-label">End Date</label>
                  <br />
                  <input
                    id="endDate"
                    className="input-text"
                    type="date"
                    placeholder="MM / YYYY"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
            <section>
              <Button id="submit" tag={RouteLink} to="/gradSkills">
                Next
              </Button>
            </section>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradEducation;
