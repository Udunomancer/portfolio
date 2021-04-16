// import default React components
import React from "react";
// import class combiner
import clsx from "clsx";
// import Material-UI components
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Material-UI Styling
import useStyles from "../../Utils/Styles/UniversalStyles";
import resume from "../../Assets/Resume.pdf";

function About() {
  const classes = useStyles();
  const profile = require("../../Assets/Images/profile.png").default;

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper>
          <Typography>More about me</Typography>
          <Typography>GitHub:</Typography>
          <Typography>LinkedIn:</Typography>
          <Typography>Resume:</Typography>
          <Typography>Email: kyle717@gmail.com</Typography>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={clsx(classes.flex, classes.paper)}>
        <Avatar alt="Kyle Chriscoe" src={profile} className={classes.avatar} />
          <Typography variant="body1" display="inline">
            Thanks for visiting my Profile! I am a full-stack software developer
            currently enrolled in the Georgia Tech Full-Stack Coding Boot Camp.
            I have 4 years of systems experience as a HR Information Systems
            Analyst, working on several Human Resources platforms.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default About;
