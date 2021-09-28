import React from "react";
import { NavLink } from "reactstrap";
import "../../css/navigation.css";
import { NavLink as RouteLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutButton = () => {

    const logout = (event) => {
      event.preventDefault();
      sessionStorage.removeItem("token");
      window.location.replace("/");
    };

  return (
    <>
      <NavLink tag={RouteLink} to="/">
        <input id="logout" type="button" onclick={logout} value="Logout" />
      </NavLink>
    </>
  );
};

export default LogoutButton;
