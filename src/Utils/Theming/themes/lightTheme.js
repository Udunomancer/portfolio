import createTheme from "../createTheme";
import createPalette from "@material-ui/core/styles/createPalette";

export default createTheme({
    palette: createPalette({
        type: "light",
        primary: {
            main: "#cfd8dc",
            light: "#ffffff",
            dark: "#9ea7aa",
        },
        secondary: {
            main: "#ffab91",
            light: "#ffddc1",
            dark: "#c97b63",
        }
    }),
});