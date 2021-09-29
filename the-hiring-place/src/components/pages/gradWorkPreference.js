import React, { useState } from "react";
import { Container, NavLink, Form, Row, Col, Button } from "reactstrap";
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
                <div className="cardTitle">
                  What type of positions are you interested in?
                </div>
                <label class="checkmark-container">
                  <input
                    type="checkbox"
                    name="position"
                    required
                    value="false"
                    onChange={(e) => setInternship(e.target.checked)}
                  />
                  <span className="checkmark">internship</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="position"
                    value="false"
                    onChange={(e) => setContract(e.target.checked)}
                  />
                  <span className="checkmark">Contract</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="position"
                    value="false"
                    onChange={(e) => setFullTime(e.target.checked)}
                  />
                  <span className="checkmark">Full time</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="position"
                    value="false"
                    onChange={(e) => setPartTime(e.target.checked)}
                  />
                  <span className="checkmark">Part time</span>
                </label>
              </div>

              <div className="card">
                <div className="workLocation-container">
                  <div className="cardTitle">
                    Which locations do you want to work in?
                  </div>
                  <div className="workLocation">
                    This is where the added City will be displayed
                  </div>
                  <div className="d-flex align-items-center">
                    <Row>
                      <Col>
                        <input
                          id="enterWorkLocation"
                          type="text"
                          placeholder="City"
                          required
                          value={prefLocation}
                          onChange={(e) => setPrefLocation(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Button id="addWorkLocation">Add</Button>
                      </Col>
                    </Row>
                  </div>
                  <label
                    class="checkmark-container"
                    style={{ marginLeft: "0" }}
                  >
                    <input
                      type="checkbox"
                      value="false"
                      onChange={(e) => setSalary(e.target.checked)}
                    />
                    <span className="checkmark">Open to working remotely</span>
                  </label>
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">
                  How important is it that your next role has a flexible remote
                  work policy?
                </div>
                <label class="radio-button-container">
                  <input
                    id="notImportant"
                    type="radio"
                    name="workPolicy"
                    required
                    value="false"
                    onChange={(e) => setNotImportant(e.target.checked)}
                  />
                  <span className="checkmark">Not Important</span>
                </label>
                <div className="radio-button-container">
                  <input
                    id="veryImportant"
                    type="radio"
                    name="workPolicy"
                    value="false"
                    onChange={(e) => setVeryImportant(e.target.checked)}
                  />
                  <span className="checkmark">Very Important</span>
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">
                  What is your desired annual salary?
                </div>
                <input
                  id="desiredSalary"
                  className="textbox"
                  type="text"
                  placeholder="$"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>

              <div className="card">
                <div className="cardTitle">
                  What is important to you in your next role?
                </div>
                <label class="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    required
                    value="false"
                    onChange={(e) => setNextRole1(e.target.checked)}
                  />
                  <span className="checkmark">Mentorshiip</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    value="false"
                    onChange={(e) => setNextRole2(e.target.checked)}
                  />
                  <span className="checkmark">Growth within the company</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    value="false"
                    onChange={(e) => setNextRole3(e.target.checked)}
                  />
                  <span className="checkmark">
                    Challenging problems to solve
                  </span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    value="false"
                    onChange={(e) => setNextRole4(e.target.checked)}
                  />
                  <span className="checkmark">
                    Having a voice in the company or team direction
                  </span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    value="false"
                    onChange={(e) => setNextRole5(e.target.checked)}
                  />
                  <span className="checkmark">
                    Opportunities to learn and develop new skills
                  </span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="important"
                    value="false"
                    onChange={(e) => setNextRole6(e.target.checked)}
                  />
                  <span className="checkmark">
                    A company with a strong growth trajectory
                  </span>
                </label>
              </div>

              <div className="card">
                <div className="cardTitle">
                  What size of company would you like to work in?
                </div>
                <label class="checkmark-container">
                  <input
                    type="checkbox"
                    name="size"
                    required
                    value="false"
                    onChange={(e) => setCompanySizeSmall(e.target.checked)}
                  />
                  <span className="checkmark">Small (1-10 employees)</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="size"
                    value="false"
                    onChange={(e) => setCompanySizeMid(e.target.checked)}
                  />
                  <span className="checkmark">
                    CMid-size (50-200 employees)
                  </span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="size"
                    value="false"
                    onChange={(e) => setCompanySizeLarge(e.target.checked)}
                  />
                  <span className="checkmark">Large (201-500 employees)</span>
                </label>
                <label className="checkmark-container">
                  <input
                    type="checkbox"
                    name="size"
                    value="false"
                    onChange={(e) => setCompanySizeVeryLarge(e.target.checked)}
                  />
                  <span className="checkmark">
                    Very Large (501-1000+ employees)
                  </span>
                </label>
              </div>

              <section>
                <Button id="submit">Submit</Button>
                <p>That's it!</p>
                <p>
                  Click Submit and your profile is ready to be seen by
                  recruiters.
                </p>
              </section>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradWorkPreference;
