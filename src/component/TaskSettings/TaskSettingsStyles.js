import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
}));

export default useStyles;