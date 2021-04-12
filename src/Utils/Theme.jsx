import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        type: "dark",
    },
});

const lightTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        type: "light",
    },
});

export { darkTheme, lightTheme };