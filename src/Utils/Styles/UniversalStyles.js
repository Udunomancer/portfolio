import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  appBar_main: {
    backgroundColor: theme.palette.primary.dark,
  },
  appBar_secondary: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.primary.main,
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
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
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.grey[800],
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  card: {
    backgroundColor: theme.palette.primary.main,
  },
  cardMedia: { paddingTop: "56.25%" },
  copyright: {
    textAligh: "center",
  },
  flex: {
    display: "flex",
  },
  footer: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: "auto",
    padding: theme.spacing(1, 2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  typography_header: {
    flex: 1,
  },
}));

export default useStyles;
