// import React components
import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
// import Material-UI components
import { ThemeProvider } from "@material-ui/core/styles";
// import custom Material-UI Theme
import { DarkMode, LightMode } from "./Utils/Theming";
// import custom Components/Pages
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [appTheme, setAppTheme] = useState(true);
  const theme = appTheme ? { ...DarkMode } : { ...LightMode };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header appTheme={appTheme} setAppTheme={setAppTheme}/>
        <Main />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
