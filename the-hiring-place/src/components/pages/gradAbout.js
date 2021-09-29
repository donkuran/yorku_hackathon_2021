import React, { useState } from "react";
import { Container, Form, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/gradProfilePage.css";
import Navigation2 from "../shared/navigation2";
import GradProfileNav from "../shared/gradProfileNav";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";

const GradAbout = () => {
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
  const [description, setDescription] = useState("");

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
        description,
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
                <div className="cardTitle-aboutMe">About Me</div>

                {/*  aboutMe-tooltip-content="Tooltip: Remember this is an opportunity to tell recruiters about why you
                                    would be a great addition to a team/company" */}
                <div className="aboutMe-tooltip-container">
                  <i
                    className="far fa-question-circle"
                    data-tip
                    data-for="abtMe"
                  ></i>
                  <ReactTooltip id="abtMe" place="right" effect="solid">
                    Remember this is an opportunity to tell recruiters about why
                    you would be a great addition to a team/company.
                  </ReactTooltip>
                </div>

                <div className="aboutMeDesc-container">
                  <textarea
                    id="aboutMeDescription"
                    type="text"
                    placeholder="Description"
                    required
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                  />
                </div>
              </div>

              <div className="card">
                <div className="jobPreference">
                  Describe what you are looking for in your next role
                </div>

                {/*  aboutMe-tooltip-content="Tooltip: Remember this is an opportunity to tell recruiters about why you
                                      would be a great addition to a team/company" */}
                <div className="jobPreference-tooltip-container">
                  <i
                    className="far fa-question-circle"
                    data-tip
                    data-for="jobPref"
                  ></i>
                  <ReactTooltip id="jobPref" place="right" effect="solid">
                    Consider using searchable keywords such as "teamwork" or
                    "mentoring".
                  </ReactTooltip>
                </div>
                <div className="jobPreference-desc-container">
                  <textarea
                    id="jobPreference-description"
                    type="text"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <section>
              <Button id="submit" tag={RouteLink} to="/gradInterests">
                Next
              </Button>
            </section>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default GradAbout;
