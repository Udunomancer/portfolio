// import default React components
import React from "react";
// import Material-UI components
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
// import component specific Material-UI styling
import useStyles from "./CopyrightStyle";

function Copyright() {
    const classes = useStyles();

    return (
        <Typography variant="body2" color="textSecondary" className={classes.typography}>
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/Udunomancer">
                Kyle Chriscoe
            </Link>
            {" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Copyright;