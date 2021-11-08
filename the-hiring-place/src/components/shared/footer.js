import React from "react";
import { Row, Col, NavLink } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import "../../css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div class="footer">
        <span className="yoh1">YOH!</span> <br />
        <span className="yoh2">York Opportunity Hub</span> <br />
        <input
          id="contact"
          type="button"
          onclick="Contact()"
          value="Contact"
          style={{ marginTop: "1rem" }}
        />{" "}
        <br />
        <Row>
          <Col>
            <span className="copyright" style={{ marginTop: "3rem" }}>
              &copy; York University School of Continuing Studies {props.year}.
              All Rights Reserved.
            </span>
          </Col>
          <Col md="2">
            <NavLink className="privacy-policy" tag={RouteLink} to="/homepage">
              Privacy Policy
            </NavLink>{" "}
            <br />
            <NavLink
              className="terms-and-conditions"
              tag={RouteLink}
              to="/homepage"
            >
              Terms and Conditions
            </NavLink>{" "}
          </Col>
        </Row>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
