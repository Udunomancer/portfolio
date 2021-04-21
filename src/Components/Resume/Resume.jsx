// import default React components
import React from "react";
// import React-pdf components for resume display
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { Page } from "react-pdf";
// import Material-UI components
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Material-UI Styling
import useStyles from "../../Utils/Styles/UniversalStyles";
// import Material-UI Icons
import GetAppIcon from "@material-ui/icons/GetApp";
// import Resume pdf to display
import resume from "../../Assets/Resume.pdf";

function Resume() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            className={classes.button_contained}
            component="a"
            href={resume}
            download
          >
            <GetAppIcon />
            Download
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Document file={resume}>
            <Page pageNumber={1} />
          </Document>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Resume;
