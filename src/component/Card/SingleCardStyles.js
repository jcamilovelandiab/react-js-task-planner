import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

const cardStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    marginTop: 20,
    background: "#FFFFFA"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default cardStyles;