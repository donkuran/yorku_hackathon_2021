import React, { useState } from "react";
import { Container, Form, Col, Row, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import profilePhoto from "../../images/profilepic.jpg";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import "bootstrap/dist/css/bootstrap.min.css";

const GradProfilePage = () => {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [user_role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [resume, setResume] = useState("");


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
        user_role,
        location,
        country,
        linkedin,
        portfolio,
        twitter,
        instagram,
        resume,
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
    setLocation("");
    setCountry("");
    setLinkedIn("");
    setPortfolio("");
    setTwitter("");
    setInstagram("");
    setResume("");;
  };

  return (
    <>
      <Navigation2 />
      <GradProfileNav />
      <Container>
        <div className="gradProfile-wrapper">
          <Form onSubmit={gradProfileSubmit}>
            <div className="card">
              <Row>
                <Col sm={3}>
                  <Row>
                    <img
                      className="profilePhoto"
                      src={profilePhoto}
                      alt="profilePhoto"
                      style={{ marginBottom: "2rem" }}
                    />
                  </Row>
                  <Row>
                    <input
                      id="upload"
                      type="button"
                      onclick="upload()"
                      value="Upload"
                      style={{ padding: "0.5rem" }}
                    />
                  </Row>
                </Col>
                <Col>
                  <div>
                    <label className="label">Name</label> <br />
                    <input
                      id="name"
                      className="input-text"
                      type="name"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />{" "}
                    <br />
                    <label className="label">Pronouns</label>
                    <br />
                    <input
                      id="pronouns"
                      className="input-text"
                      type="text"
                      placeholder="Pronouns"
                      required
                      value={pronouns}
                      onChange={(e) => setPronouns(e.target.value)}
                    />
                    <br />
                    <label className="roleTitle-label">Role/Title</label> <br />
                    <input
                      id="roleTitle"
                      className="input-text"
                      type="text"
                      placeholder="Role/Title"
                      required
                      value={user_role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    <label className="label">Location</label> <br />
                    <input
                      id="location"
                      className="input-text"
                      type="text"
                      placeholder="City, Province"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <select
                      id="country"
                      name="country"
                      style={{ margin: "0px 10px" }}
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="card">
              <div className="cardTitle">Links</div>
              <input
                id="linkedIn"
                type="text"
                placeholder="LinkedIn"
                value={linkedin}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
              <input
                id="websitePortfolio"
                type="text"
                placeholder="Website Or Portfolio"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
              />
              <input
                id="twitter"
                type="text"
                placeholder="Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
              <input
                id="instagram"
                type="text"
                placeholder="Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <input
                id="resume"
                type="text"
                placeholder="Resume Link"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
            </div>
            <section>
              <Button id="submit" tag={RouteLink} to="/gradAbout">
                Next
              </Button>
            </section>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradProfilePage;
