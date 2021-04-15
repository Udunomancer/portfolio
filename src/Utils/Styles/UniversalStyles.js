import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
    background: {
        backgroundColor: theme.palette.primary.light,
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        flexGrow: 1,
    },
    button_contained: {
        variant: "contained",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": { 
            backgroundColor: theme.palette.secondary.dark,
        },
        borderRadius: 0,
    },
    button_text: {
        color: theme.palette.secondary.main,
        "&:hover": { 
            color: theme.palette.secondary.dark,
        }
    },
    card: {
        backgroundColor: theme.palette.primary.main,
    },
    cardMedia: { paddingTop: "56.25%"},
    copyright: {
        textAligh: "center",
    },
    footer: {
        backgroundColor: theme.palette.primary.dark,
        marginTop: "auto",
        padding: theme.spacing(1,2),
    },
    typography_header: {
        flex: 1,
    },
}));

export default useStyles;