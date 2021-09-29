import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradWorkPreference.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import "bootstrap/dist/css/bootstrap.min.css";

const GradWorkPreference = () => {
  const [description, setDescription] = useState("");
  const [interestQ1, setInterestQ1] = useState("");
  const [interestR1, setInterestR1] = useState("");
  const [interestQ2, setInterestQ2] = useState("");
  const [interestR2, setInterestR2] = useState("");
  const [interestQ3, setInterestQ3] = useState("");
  const [interestR3, setInterestR3] = useState("");
  const [notImportant, setNotImportant] = useState("");
  const [veryImportant, setVeryImportant] = useState("");
  const [industry, setIndustry] = useState("");
  const [internship, setInternship] = useState("");
  const [contract, setContract] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [partTime, setPartTime] = useState("");
  const [companySizeSmall, setCompanySizeSmall] = useState("");
  const [companySizeMid, setCompanySizeMid] = useState("");
  const [companySizeLarge, setCompanySizeLarge] = useState("");
  const [companySizeVeryLarge, setCompanySizeVeryLarge] = useState("");
  const [salary, setSalary] = useState("");
  const [prefLocation, setPrefLocation] = useState("");
  const [openToRemote, setOpenToRemote] = useState("");
  const [nextRole1, setNextRole1] = useState("");
  const [nextRole2, setNextRole2] = useState("");
  const [nextRole3, setNextRole3] = useState("");
  const [nextRole4, setNextRole4] = useState("");
  const [nextRole5, setNextRole5] = useState("");
  const [nextRole6, setNextRole6] = useState("");

  const gradWorkPreferencesSubmit = async (event) => {
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
        description,
        interestQ1,
        interestR1,
        interestQ2,
        interestR2,
        interestQ3,
        interestR3,
        notImportant,
        veryImportant,
        industry,
        internship,
        contract,
        fullTime,
        partTime,
        companySizeSmall,
        companySizeMid,
        companySizeLarge,
        companySizeVeryLarge,
        salary,
        prefLocation,
        openToRemote,
        nextRole1,
        nextRole2,
        nextRole3,
        nextRole4,
        nextRole5,
        nextRole6,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setDescription("");
    setInterestQ1("");
    setInterestR1("");
    setInterestQ2("");
    setInterestR2("");
    setInterestQ3("");
    setInterestR3("");
    setNotImportant("");
    setVeryImportant("");
    setIndustry("");
    setInternship("");
    setContract("");
    setFullTime("");
    setPartTime("");
    setCompanySizeSmall("");
    setCompanySizeMid("");
    setCompanySizeLarge("");
    setCompanySizeVeryLarge("");
    setSalary("");
    setPrefLocation("");
    setOpenToRemote("");
    setNextRole1("");
    setNextRole2("");
    setNextRole3("");
    setNextRole4("");
    setNextRole5("");
    setNextRole6("");
  };

  return (
    <>
      <Navigation2 />
      <GradProfileNav />
      <Container>
        <div className="gradProfile-wrapper">
          <Form onSubmit={gradWorkPreferencesSubmit}>
            <div className="row">
              <div className="card">
                <div className="interests-container">
                  <div className="cardTitle">Interests</div>
                  <div className="drop-down">
                    <select
                      id="accomplishments"
                      value={interestQ1}
                      onChange={(e) => setInterestQ1(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        A professional accomplishment I'm proud of is...
                      </option>
                      <option value="1">Option1</option>
                      <option value="2">Option2</option>
                      <option value="3">Option3</option>
                    </select>
                    <input
                      id="accomplishments"
                      className="textbox"
                      type="text"
                      placeholder="Your Answer"
                      value={interestR1}
                      onChange={(e) => setInterestR1(e.target.value)}
                    />
                  </div>
                  <div className="drop-down">
                    <select
                      id="superpower"
                      value={interestQ2}
                      onChange={(e) => setInterestQ2(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        My professional superpower is...
                      </option>
                      <option value="1">Option1</option>
                      <option value="2">Option2</option>
                      <option value="3">Option3</option>
                    </select>
                    <input
                      id="superpower"
                      className="textbox"
                      type="text"
                      placeholder="Your Answer"
                      value={interestR2}
                      onChange={(e) => setInterestR2(e.target.value)}
                    />
                  </div>
                  <div className="drop-down">
                    <select
                      id="iLikeTo"
                      value={interestQ3}
                      onChange={(e) => setInterestQ3(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        When not working I like to...
                      </option>
                      <option value="1">Option1</option>
                      <option value="2">Option2</option>
                      <option value="3">Option3</option>
                    </select>
                    <input
                      id="iLikeTo"
                      className="textbox"
                      type="text"
                      placeholder="Your Answer"
                      value={interestR3}
                      onChange={(e) => setInterestR3(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="industry-container">
                  <div className="cardTitle">
                    Which markets are you most interested in working in
                  </div>
                  <div className="industry">
                    This is where the added Industry will be displayed
                  </div>
                  <div className="d-flex align-items-center">
                    <Row>
                      <Col>
                        <input
                          id="enterIndustry"
                          type="text"
                          placeholder="Industry"
                          required
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Button
                          id="addIndustry"
                          tag={RouteLink}
                          to="/gradEducation"
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </div>
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

export default GradWorkPreference;
