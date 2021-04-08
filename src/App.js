// import React components
import {HashRouter as Router, Route, Switch} from "react-router-dom";
// import Material-UI components
import { Grid } from "@material-ui/core";
// import custom Components/Pages
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Header from "./Components/Header/Header";

function App() {
  return (
   
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid container item>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/*" component={About} />
            </Switch>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
      {/* <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/*" component={About} />
        </Switch>
        <Footer />
      </Wrapper> */}
    </Router>
  );
}

export default App;
