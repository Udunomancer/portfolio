// import default React components
import React from "react";
// import Material-UI components
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import component specific Material-UI styling
import useStyles from "./FooterStyle";
// import custom components
import Copyright from "../Copyright/Copyright";


function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </footer>
        // <footer className="footer">
        //     <div className="container">
        //         <div className="row justify-content-md-center">
        //             <div className="col-md-auto">
        //                 <span className="text-muted">&#169; Copyright 2021 Kyle Chriscoe</span>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer;