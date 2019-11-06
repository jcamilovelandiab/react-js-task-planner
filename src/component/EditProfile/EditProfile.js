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
import axios from 'axios';
import swal from 'sweetalert';

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
      let data = new FormData();
      data.append('file', profileImage);
      var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      axios.post('http://localhost:8080/files/'+loggedUser.id, data
      ).then(function (response) {
        swal({
              title:"Good job!",
              text: "Profile was updated sucessfully!",
              icon: "success",
              timer: 2000,
              button: false,
          }).then(() => {
              window.location.reload();
          });
        }).catch(function (error) {
          swal({
              title:"Ooops!",
              text: "The profile couldn't be updated!",
              icon: "error",
              button: false,
              timer: 2000
          });
        }).then(()=>{
          props.handleClose();
        });
      }
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
