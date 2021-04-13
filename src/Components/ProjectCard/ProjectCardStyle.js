import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main
  },
  cardMedia: {paddingTop: "56.25%"},
  // primaryColor: {
  //   backgroundColor:
  //     theme.palette.type === "dark"
  //       ? theme.palette.primary.main
  //       : theme.palette.primary.light,
  // },
  // lightColor: {
  //   backgroundColor:
  //     theme.palette.type === "dark"
  //       ? theme.palette.primary.light
  //       : theme.palette.grey.A100,
  // },
}));

export default useStyles;
