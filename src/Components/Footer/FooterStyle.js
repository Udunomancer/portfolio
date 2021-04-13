import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.dark,
        marginTop: "auto",
        padding: theme.spacing(1,2),
    },
}));

export default useStyles;