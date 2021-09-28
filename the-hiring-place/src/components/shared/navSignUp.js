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
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../shared/logo";

const NavSignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar
        light
        expand="md"
        style={{
          borderBottomStyle: "solid",
          borderColor: "lightgray",
          marginBottom: "2rem",
        }}
        className=""
      >
        <NavbarBrand
          href="/"
          className="header-yoh"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Logo />
          YOH!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex align-items-center" navbar>
            <NavItem style={{ position: "absolute", right: "1rem" }}>
              <NavLink tag={RouteLink} to="/signIn" id="navSignInOut">
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavSignUp;
