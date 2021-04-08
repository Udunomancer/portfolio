// import default React components
import React from "react";
import { NavLink } from "react-router-dom";
// import Material-UI components
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
// import Component specific JSS
import useStyles from "./HeaderStyle";

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Kyle Chriscoe
        </Typography>
        <Button component={NavLink} to="/about">
          About
        </Button>
        <Button component={NavLink} to="/contact">
          Contact
        </Button>
        <Button component={NavLink} to="/portfolio">
          Portfolio
        </Button>
      </Toolbar>
    </AppBar>
    // <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
    //   <NavLink className="navbar-brand" to="/">
    //     Kyle Chriscoe:
    //   </NavLink>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <NavLink
    //           to="/about"
    //           className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //           <NavLink
    //             to="/contact"
    //             className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //           >
    //               Contact
    //           </NavLink>
    //       </li>
    //       <li className="nav-item">
    //           <NavLink
    //             to="/portfolio"
    //             className={window.location.pathname === "/portfolio#/portfolio" ? "nav-link active" : "nav-link"}
    //           >
    //               Portfolio
    //           </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Header;
