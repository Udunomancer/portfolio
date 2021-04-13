import createTheme from "../createTheme";
import createPalette from "@material-ui/core/styles/createPalette";

export default createTheme({
    palette: createPalette({
        type: "dark",
        primary: {
            main: "#263238",
            light: "#4f5b62",
            dark: "#000a12",
        },
        secondary: {
            main: "#ff3d00",
            light: "#ff7539",
            dark: "#c30000",
        },
    }),
});