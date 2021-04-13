import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: "auto",
        padding: theme.spacing(1,2),
    },
}));

export default useStyles;