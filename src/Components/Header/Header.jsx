// import default React components
import React from "react";
import { NavLink } from "react-router-dom";
// import Material-UI components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Component specific JSS
import useStyles from "./HeaderStyle";

function Header({appTheme, setAppTheme}) {
  const classes = useStyles();

  return (
    <AppBar position="static">
    {/* <AppBar position="static" className={classes.headerStyles}> */}
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
        <Switch
          checked={appTheme}
          onChange={() => setAppTheme(!appTheme)}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
