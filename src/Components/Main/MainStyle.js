import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    flexGrow: 1
  },
}));

export default useStyles;