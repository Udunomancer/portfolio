// import default React components
import React from "react";
// import Material-UI components
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
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Typography align="center" variant="h4">
            About me
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Typography>More about me</Typography>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <Typography align="center" variant="h4">
            About me
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    // <div id="about-page" className="container pt-2">
    //   <div className="row">
    //     <div className="about-page col-md-9 py-3 mx-2">
    //       <div className="row mx-2">
    //         <div className="col-sm-12">
    //           <h1 className="border-bottom py-3">
    //             <strong>About</strong>
    //           </h1>
    //         </div>
    //       </div>
    //       <div className="row m-2 py-2">
    //         <div className="col-sm-12">
    //           <img
    //             src={profile}
    //             alt="Personal"
    //             className="img-fluid float-left w-25 p-2 mr-2"
    //             id="about-image"
    //           />
    //           <article className="single-post-content-wraper p-2">
    //             <p>
    //               Thanks for visiting my Profile! I am a full-stack software
    //               developer currently enrolled in the Georgia Tech Full-Stack
    //               Coding Boot Camp. I have 4 years of systems experience as a HR
    //               Information Systems Analyst, working on several Human
    //               Resources platforms.
    //             </p>
    //           </article>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About;
