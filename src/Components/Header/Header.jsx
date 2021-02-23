import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    // <header>
    //   <nav className="navbar navbar-light bg-white">
    //       <div className="navbar-nav">
    //         {/* <li className="nav-item">
    //           <NavLink className="nav-link" to="/">About</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/contact">Contact</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
    //         </li> */}
    //         <NavLink className="nav-item nav-link" to="/">Home</NavLink>
    //         <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
    //         <NavLink className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
    //       </div>
    //   </nav>
    // </header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Kyle Chriscoe:
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
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
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
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
