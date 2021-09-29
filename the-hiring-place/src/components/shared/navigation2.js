import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../../css/navigation.css";
import { NavLink as RouteLink } from "react-router-dom";
import Logo from "../shared/logo"
import LogoutButton from "./logoutButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar
        light
        expand="md"
        style={{ borderBottomStyle: "solid", borderColor: "lightgray" }}
        className=""
      >
        <NavbarBrand
          href="/"
          className="header-yoh"
          style={{ display: "flex", alignItems: "center", paddingBottom: "" }}
        >
          <Logo />
          YOH!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <Nav className="d-flex align-items-center" style={{ fontSize: "" }} navbar>
            <NavItem style={{}}>
              <NavLink tag={RouteLink} to="/Gradnotifications">
                <i class="far fa-bell"></i>
              </NavLink>
            </NavItem>
            <NavItem style={{}}>
              <NavLink tag={RouteLink} to="/gradProfilePage">
                <i class="far fa-user-circle"></i>
              </NavLink>
            </NavItem>
            <NavItem style={{}}>
              <NavLink tag={RouteLink} to="/settingsPage">
                <i class="fas fa-cog"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <LogoutButton />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation2;
