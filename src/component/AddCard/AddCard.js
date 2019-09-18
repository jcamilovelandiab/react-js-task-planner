import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button';
import TextField from '@material-ui/core/TextField';

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
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
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

export default function AddCard() {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription ] = React.useState("");
  const [status, setStatus ] = React.useState("");
  const [dueDate, setDueDate ] = React.useState("");

  const [responsibleName, setResponsibleName] = React.useState("");
  const [responsibleEmail, setResponsibleEmail] = React.useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeStatus = (event) => {
      setStatus(event.target.value);
  };

  const handleChangeDueDate = (event) => {
      setDueDate(event.target.value);
  };

  const handleChangeResponsibleName = (event) => {
    setResponsibleName(event.target.value);
  };

  const handleChangeResponsibleEmail = (event) => {
    setResponsibleEmail(event.target.value);
  };

  const handleSubmit = (event) => {
      alert("Handling submit");
  }

  return (
    <Container>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}
        tooltip="Add a task"
        styles={{backgroundColor: darkColors.lighterRed, color: lightColors.white}}
        >
            <h1>+</h1>
        </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Adding a task
        </DialogTitle>
        <DialogContent dividers>
                <form className="form" noValidate onSubmit={handleSubmit}>
                        <TextField variant="outlined" margin="normal" required type="text"
                            fullWidth id="description" label="Description" name="description"
                            onChange = {handleChangeDescription} autoFocus
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth name="responsibleName"
                            label="Responsible's name" type="text" id="respnsibleName"
                            onChange = {handleChangeResponsibleName}
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth name="responsibleEmail"
                            label="Responsible's email" type="text" id="responsibleEmail"
                            onChange = {handleChangeResponsibleEmail}
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth name="status"
                            label="Status" type="text" id="status"
                            onChange = {handleChangeStatus}
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth name="dueDate"
                            label="Due date" type="text" id="dueDate"
                            onChange = {handleChangeDueDate}
                        />
                        <Button fullWidth variant="contained"
                                color="secundary" className="submit">
                            Add task
                        </Button>                       
                    </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
