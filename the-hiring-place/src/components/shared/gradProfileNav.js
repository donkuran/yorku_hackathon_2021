import React, { useState } from "react";
import { Nav, NavLink, Row, Col, NavItem, Navbar } from "reactstrap";
import "../../css/navigation.css";
import { NavLink as RouteLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GradProfileNav = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="topnav">
      <Nav>
        <NavItem>
          <NavLink id="profile" tag={RouteLink} to="/gradProfilePage">
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="workPreference"
            tag={RouteLink}
            to="/gradAbout"
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="workPreference"
            tag={RouteLink}
            to="/gradInterests"
          >
            Interests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="workPreference" tag={RouteLink} to="/gradEducation">
            Education
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="workPreference" tag={RouteLink} to="/gradSkills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="workPreference"
            tag={RouteLink}
            to="/gradWorkPreference"
          >
            Work Preference
          </NavLink>
        </NavItem>
      </Nav>
      <Row style={{ paddingBottom: "px" }}>
        <Col>
          <input
            id="view"
            type="button"
            style={{ float: "right" }}
            onclick="viewGradProfile()"
            value="View"
          />
        </Col>
        <Col>
          <input
            id="edit"
            type="button"
            style={{ float: "right" }}
            onclick="editGradProfile()"
            value="Edit"
          />
        </Col>
        <Col>
          <input
            id="save"
            type="submit"
            style={{ float: "right" }}
            onclick="saveGradProfile()"
            value="Save"
          />
        </Col>
      </Row>
    </Navbar>
  );
};

export default GradProfileNav;
