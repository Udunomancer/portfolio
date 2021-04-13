// import default React components
import React from "react";
// import Material-UI components
import Container from "@material-ui/core/Container";
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
    )
}

export default Footer;