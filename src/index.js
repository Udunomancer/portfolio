import React from "react";
import ReactDOM from "react-dom";
// import Material-UI ThemeProvider
import { ThemeProvider } from "@material-ui/core/styles";
// import custom Material-UI Theme
import Theme from "./Utils/Theme";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
