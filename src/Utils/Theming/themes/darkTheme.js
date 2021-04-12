import createTheme from "../createTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import { blueGrey } from "@material-ui/core/colors";

export default createTheme({
    palette: createPalette({
        type: "dark",
        primary: blueGrey,
    }),
});