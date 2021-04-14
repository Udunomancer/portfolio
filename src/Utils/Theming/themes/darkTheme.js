import createTheme from "../createTheme";
import createPalette from "@material-ui/core/styles/createPalette";

export default createTheme({
    palette: createPalette({
        type: "dark",
        primary: {
            main: "#272c34",
            light: "#333",
            dark: "#121212",
        },
        secondary: {
            main: "#ff3d00",
            light: "#ff7539",
            dark: "#c30000",
        },
    }),
});