import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import EditProfileStyles from './EditProfileStyles.js';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function UpdatingProfile(props) {
  const classes = EditProfileStyles();


  const [profileImage, setProfileImage] = React.useState("");

  const handleProfileImageChange = (e) =>{
    setProfileImage(e.target.files[0]);
  }

  const handleSubmit = () =>{
    
    if(profileImage===""){
      if(alert("You have to select an image")){
        props.handleClose();
      }
    }else{
      props.handleClose();
    }
    /*let data = new FormData();
    data.append('file', profileImage);

    this.axios.post('files', data)
        .then(function (response) {
            console.log("file uploaded!", data);
    })
    .catch(function (error) {
        console.log("failed file upload", error);
    });*/
  }

  return (
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Edit profile
        </DialogTitle>
        <DialogContent dividers>
          <input type="file" id="profileImage" onChange={handleProfileImageChange}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
  );
}
