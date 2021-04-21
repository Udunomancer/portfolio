// import default React components
import React, { useState } from "react";
// import class combiner
import clsx from "clsx";
// import Material-UI components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Material-UI Styling
import useStyles from "../../Utils/Styles/UniversalStyles";
// import Material-UI Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import custom Components
import Resume from "../../Components/Resume/Resume";

function About() {
  const classes = useStyles();
  const profile = require("../../Assets/Images/profile.png").default;
  const [subSection, setSubSection] = useState(1);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <Button
                className={classes.button_text}
                onClick={() => {
                  setSubSection(1);
                }}
              >
                My Background
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button_text}
                onClick={() => {
                  setSubSection(2);
                }}
              >
                My GitHub and LinkedIn
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button_text}
                onClick={() => {
                  setSubSection(3);
                }}
              >
                My Resume
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        {subSection === 1 && (
          <Paper className={clsx(classes.flex, classes.paper)}>
            <Avatar
              alt="Kyle Chriscoe"
              src={profile}
              className={classes.avatar}
            />
            <Typography variant="body1" display="inline">
              Thanks for visiting my Profile! I am a full-stack web developer
              interested in building interactive web applications with a Web
              Development certificate from Georgia Tech. Well-versed in React
              and jQuery, with professional experience writing HTML, CSS, and
              JavaScript in ServiceNow. Prior experience as an HR Information
              Systems Analyst, managing all recruiting platforms for a Fortune
              500 company, building workflows, implementations, and integrations
              to develop a user friendly HR experience.
            </Typography>
          </Paper>
        )}
        {subSection === 2 && (
          <Paper className={clsx(classes.flex, classes.paper)}>
            <Button
              className={classes.button_contained}
              fullWidth
              style={{margin: 2}}
              component="a"
              href="https://github.com/Udunomancer"
              target="_blank"
            >
              <GitHubIcon />
              GitHub
            </Button>
            <Button
              className={classes.button_contained}
              fullWidth
              style={{margin: 2}}
              component="a"
              href="https://www.linkedin.com/in/kyle-chriscoe/"
              target="_blank"
            >
              <LinkedInIcon />
              LinkedIn
            </Button>
          </Paper>
        )}
        {subSection === 3 && <Resume />}
      </Grid>
    </Grid>
  );
}

export default About;
