// import default React components
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Material-UI components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Component specific JSS
import useStyles from "../../Utils/Styles/UniversalStyles";

function Header({ appTheme, setAppTheme }) {
  const classes = useStyles();
  const [subHeaderText, setSubHeaderText] = useState(initialSubHeaderText());

  function initialSubHeaderText() {
    const route = window.location.pathname;
    switch (route) {
      case "/about":
        return "About me...";
      case "/contact":
        return "Message me directly...";
      case "/portfolio":
        return "View my portfolio...";
      default:
        return "About me...";
    }
  }

  return (
    <AppBar position="static">
      {/* <AppBar position="static" className={classes.headerStyles}> */}
      <Toolbar className={classes.appBar_main}>
        <Typography variant="h5" className={classes.typography_header}>
          Kyle Chriscoe
        </Typography>
        <Button
          component={NavLink}
          to="/about"
          onClick={() => setSubHeaderText("About me...")}
          className={classes.button_text}
        >
          About
        </Button>
        <Button
          component={NavLink}
          to="/contact"
          onClick={() => setSubHeaderText("Message me directly...")}
          className={classes.button_text}
        >
          Contact
        </Button>
        <Button
          component={NavLink}
          to="/portfolio"
          onClick={() => setSubHeaderText("View my portfolio...")}
          className={classes.button_text}
        >
          Portfolio
        </Button>
        <Switch checked={appTheme} onChange={() => setAppTheme(!appTheme)} />
      </Toolbar>
      <Toolbar variant="dense" className={classes.appBar_secondary}>
        <Typography variant="h6">{subHeaderText}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
