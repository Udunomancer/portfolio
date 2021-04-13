// import React components
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Material-UI components
import { Container, Grid, Paper, Switch as MUISwitch } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
// import custom Material-UI Theme
import { DarkMode, LightMode } from "./Utils/Theming";
// import custom Components/Pages
import Main from "./Components/Main/Main";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [appTheme, setAppTheme] = useState(true);
  const theme = appTheme ? { ...DarkMode } : { ...LightMode };
  // const theme = React.useMemo(
  //   () => createMuiTheme(Theme),
  //   [darkMode],
  // );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <Container width="100vh"> */}
        {/* <Paper style={{ height: "100vh" }}> */}
        {/* <Grid container direction="column"> */}
        {/* <Grid item> */}
        <Header appTheme={appTheme} setAppTheme={setAppTheme}/>
        {/* </Grid> */}
        <Main />
        {/* <Grid container item>
              <Grid item xs={false} sm={2} >
                <MUISwitch 
                  checked={appTheme}
                  onChange={() => setAppTheme(!appTheme)}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route path="/*" component={About} />
                </Switch>
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid> */}
        {/* </Grid> */}
        <Footer />
        {/* </Paper> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
