import React from "react";
import "../../css/footer.css";
import logo from "../../images/honeycomb.svg";
import "../../css/logo.css";

const Logo = (props) => {
  return (
    <>
      <img
        id="logo"
        src={logo}
        style={{
          marginRight: "1.5rem",
          height: "1.8rem",
        }}
        alt="logo"
      />
    </>
  );
};

export default Logo;
