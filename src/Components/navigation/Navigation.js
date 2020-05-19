import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isSignin, email }) => {
  if (isSignin) {
    return (
      <nav className="navigation" style={{ backgroundColor: "coral" }}>
        <Link to="/home">Sign out</Link>
        <p>{email}</p>
      </nav>
    );
  } else {
    return (
      <nav className="navigation" style={{ backgroundColor: "coral" }}>
        <Link
          to="/register"
          className="links"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          register
        </Link>
        <Link
          to="/signin"
          className="links"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          signin
        </Link>
      </nav>
    );
  }
};

export default Navigation;
