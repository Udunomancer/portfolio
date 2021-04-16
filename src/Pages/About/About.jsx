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
import resume from "../../Assets/Resume.pdf";

function About() {
  const classes = useStyles();
  const profile = require("../../Assets/Images/profile.png").default;
  const [subSection, setSubSection] = useState(2);

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
              Thanks for visiting my Profile! I am a full-stack software
              developer currently enrolled in the Georgia Tech Full-Stack Coding
              Boot Camp. I have 4 years of systems experience as a HR
              Information Systems Analyst, working on several Human Resources
              platforms.
            </Typography>
          </Paper>
        )}
        {subSection === 2 && (
          <Paper className={clsx(classes.flex, classes.paper)}>
            <Typography>My GitHub and LinkedIn</Typography>
          </Paper>
        )}
        {subSection === 3 && (
          <Paper className={clsx(classes.flex, classes.paper)}>
            <Typography>My Resume</Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default About;
