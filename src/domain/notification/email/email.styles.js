import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    emailContainer: {
      marginTop: 40,
  },  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;