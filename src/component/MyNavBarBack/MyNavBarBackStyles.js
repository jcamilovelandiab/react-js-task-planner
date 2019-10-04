import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  icon: {
    color: "#FFFFFA"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#212121",
    marginBottom: "20px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;