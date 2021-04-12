import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export default function createTheme(options) {
    return createMuiTheme({
        ...options
    });
}