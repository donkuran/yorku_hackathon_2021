import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import "../../css/education.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import "bootstrap/dist/css/bootstrap.min.css";

const GradEducation = () => {
  const [program, setProgram] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        program,
        startDate,
        endDate,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setProgram("");
    setStartDate("");
    setEndDate("");;
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
