// import React components
import React from "react";
import { Route, Switch } from "react-router-dom";
// import Material-UI components
import Grid from "@material-ui/core/Grid";
// import custom Pages
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Portfolio from "../../Pages/Portfolio/Portfolio";

function Main() {

    return (
        <Grid container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route path="/*" component={About} />
                </Switch>
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    );
}

export default Main;