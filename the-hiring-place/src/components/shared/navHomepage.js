import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "../../css/navigation.css";
import { NavLink as RouteLink } from "react-router-dom";
import Logo from "./logo"
import "bootstrap/dist/css/bootstrap.min.css";

const NavHomepage = ({style}) => {
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
        <Collapse
          isOpen={isOpen}
          style={{ position: "absolute", top: "1", right: "0" }}
          navbar
        >
          <Nav className="d-flex align-items-center" navbar>
            <NavItem>
              <NavLink tag={RouteLink} to="/" id="navSignInOut">
                <div
                  style={{
                    borderBlockColor: "#3AC2EF",
                    color: "#3AC2EF",
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
                    marginRight: "47px",
                    fontFamily: "sans-serif",
                  }}
                >
                  ABOUT
                </div>
              </NavLink>
            </NavItem>
            <NavItem style={{ marginRight: "" }}>
              <NavLink tag={RouteLink} to="/" id="navSignInOut">
                <div
                  style={{
                    borderBlockColor: "#3AC2EF",
                    color: "#3AC2EF",
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
                    marginRight: "141px",
                    fontFamily: "sans-serif",
                  }}
                >
                  CONTACT
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/signIn" id="navSignInOut">
                <Button
                  style={{
                    border: "1.5px solid #3AC2EF",
                    borderBlockColor: "#3AC2EF",
                    color: "#3AC2EF",
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
                    height: "27px",
                    paddingTop: "0px",
                    marginRight: "21px",
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouteLink} to="/signUp" id="navSignInOut">
                <Button
                  style={{
                    border: "1.5px solid #3AC2EF",
                    borderBlockColor: "#3AC2EF",
                    color: "#ffffff",
                    backgroundColor: "#3AC2EF",
                    borderRadius: "6px",
                    marginRight: "141px",
                    height: "27px",
                    paddingTop: "0px",
                  }}
                >
                  Sign Up
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHomepage;
