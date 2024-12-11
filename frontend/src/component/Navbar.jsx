import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Importing CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="blogpost" className="nav-link">
          BlogPost
        </Link>
        <Link to="/bloglist" className="nav-link">
          BlogList
        </Link>
        <Link to="/signup" className="nav-link">
          Sign-Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
