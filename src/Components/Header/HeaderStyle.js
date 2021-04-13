import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark
    }
    // headerStyles: {
    //     marginBottom: "0px",
    // },
}))

export default useStyles;