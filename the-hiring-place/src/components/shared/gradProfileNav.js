import React, { useState } from "react";
import { Nav, NavLink } from "reactstrap";
import "../../css/navigation.css";
import { NavLink as RouteLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GradProfileNav = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="topnav">
      <Nav>
        <NavLink id="profile" tag={RouteLink} to="/gradProfilePage">
          Profile
        </NavLink>
        <NavLink id="workPreference" tag={RouteLink} to="/gradAbout">
          About
        </NavLink>
        <NavLink id="workPreference" tag={RouteLink} to="/gradInterests">
          Interests
        </NavLink>
        <NavLink id="workPreference" tag={RouteLink} to="/gradEducation">
          Education
        </NavLink>
        <NavLink id="workPreference" tag={RouteLink} to="/gradSkills">
          Skills
        </NavLink>
        <NavLink id="workPreference" tag={RouteLink} to="/gradWorkPreference">
          Work Preference
        </NavLink>
      </Nav>
      <input
        id="view"
        type="button"
        style={{ float: "right" }}
        onclick="viewGradProfile()"
        value="View"
      />
      <input
        id="edit"
        type="button"
        style={{ float: "right" }}
        onclick="editGradProfile()"
        value="Edit"
      />
      <input
        id="save"
        type="submit"
        style={{ float: "right" }}
        onclick="saveGradProfile()"
        value="Save"
      />
    </div>
  );
};

export default GradProfileNav;
