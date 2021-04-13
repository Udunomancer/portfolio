import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.light,
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    flexGrow: 1,
  },
}));

export default useStyles;
