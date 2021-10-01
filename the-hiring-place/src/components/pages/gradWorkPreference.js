import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradWorkPreference.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import "bootstrap/dist/css/bootstrap.min.css";

const GradWorkPreference = () => {
  const [internship, setInternship] = useState("");
  const [contract, setContract] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [partTime, setPartTime] = useState("");
  const [pref_location, setPrefLocation] = useState("");
  const [open_to_remote, setOpenToRemote] = useState("");
  const [not_important, setNotImportant] = useState("");
  const [very_important, setVeryImportant] = useState("");
  const [salary, setSalary] = useState("");
  const [next_role1, setNextRole1] = useState("");
  const [next_role2, setNextRole2] = useState("");
  const [next_role3, setNextRole3] = useState("");
  const [next_role4, setNextRole4] = useState("");
  const [next_role5, setNextRole5] = useState("");
  const [next_role6, setNextRole6] = useState("");
  const [company_small, setCompanySizeSmall] = useState("");
  const [company_mid, setCompanySizeMid] = useState("");
  const [company_large, setCompanySizeLarge] = useState("");
  const [company_very_large, setCompanySizeVeryLarge] = useState("");

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
        internship,
        contract,
        fullTime,
        partTime,
        pref_location,
        open_to_remote,
        not_important,
        very_important,
        salary,
        next_role1,
        next_role2,
        next_role3,
        next_role4,
        next_role5,
        next_role6,
        company_small,
        company_mid,
        company_large,
        company_very_large,
      }),
    });
    const payload = await response.json();
    if (response.status >= 400) {
      alert(`Oops! Error ${response.status}:  ${payload.message}`);
    } else {
      alert(payload);
    }
    setNotImportant("");
    setVeryImportant("");
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
                          value={pref_location}
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
