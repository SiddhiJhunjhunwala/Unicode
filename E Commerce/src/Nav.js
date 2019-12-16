import React, { component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function Nav() {
  const nav_style = {
    color: "white",
    backgroundColor: "black",
    listStyleType: "none",
    width: "100%",
    margin: "0  ",
    position: "absolute",
    top: "0",
    zIndex: "1"
  };
  const bar = {
    textDecoration: "none",
    color: "white",
    alignItems: "center",
    margin: "0px 20px"
  };

  return (
    <nav style={nav_style}>
      <Router>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "spaceAround"
          }}
          className="Nav-links"
        >
          <Link style={bar} to="/shop">
            <li>Logo</li>
          </Link>
          <Link style={bar} to="/shop">
            <li>Shop</li>
          </Link>
          <Link style={bar} to="/about">
            <li>about</li>
          </Link>
          <Link style={bar} to="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </Router>
    </nav>
  );
}

export default Nav;
