import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand" to="/">
        Kyle Chriscoe:
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                  Contact
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={window.location.pathname === "/portfolio#/portfolio" ? "nav-link active" : "nav-link"}
              >
                  Portfolio
              </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
