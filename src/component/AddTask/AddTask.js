import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Container, Button, lightColors } from 'react-floating-action-button';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { Select } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { now } from "moment";

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

export default function AddTask() {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription ] = React.useState("");
  const [status, setStatus ] = React.useState("");
  const [dueDate, setDueDate ] = React.useState(now());
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
      console.log(event);
      setDueDate(event);
  };

  const handleChangeResponsibleName = (event) => {
    setResponsibleName(event.target.value);
  };

  const handleChangeResponsibleEmail = (event) => {
    setResponsibleEmail(event.target.value);
  };

  const showError = (msg) =>{
    swal({
        title:"Ooops!",
        text: msg,
        icon: "error",
        button: false,
        timer: 2000
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(description==="" || responsibleName==="" || responsibleEmail==="" || status==="" || dueDate===null){
        showError("To add a new task you must fill out the form completely");
    }else{
        const newTask = {
            description: description,
            responsible: {
                name: responsibleName,
                email: responsibleEmail
            },
            status: status,
            dueDate: dueDate
        }
        var taskList = (localStorage.getItem("taskList")!=null)?JSON.parse(localStorage.getItem("taskList")):[]
        var taskListJSON = []
        for(var i=0; i<taskList.length; i++){
            taskListJSON.push(taskList[i]);
        }
        taskListJSON.push(newTask);
        localStorage.setItem("taskList", JSON.stringify(taskListJSON));
        swal({
            title:"Good job!",
            text: "You have created a new task sucessfully!",
            icon: "success",
            timer: 2000,
            button: false,
        }).then(() => {
            window.location.href="/home";
        });
    }
  }

  return (
    <Container>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen} className="addTaskButton"
            tooltip="Add a task"
            styles={{backgroundColor: "#212121", color: lightColors.white}}
        >
            <h1>+</h1>
        </Button>
        <Dialog fullScreen
            
            onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Adding a task
            </DialogTitle>
            <DialogContent dividers>
                <form className="form" noValidate onSubmit={handleSubmit}>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        onChange = {handleChangeDescription}
                    />

                    <TextField variant="outlined" margin="normal" required fullWidth name="responsibleName"
                        label="Responsible's name" type="text" id="respnsibleName"
                        onChange = {handleChangeResponsibleName}
                    />

                    <TextField variant="outlined" margin="normal" required fullWidth name="responsibleEmail"
                        label="Responsible's email" type="text" id="responsibleEmail"
                        onChange = {handleChangeResponsibleEmail}
                    />

                    <br/>
                    <InputLabel htmlFor="status">Status</InputLabel>
                    <Select
                        required
                        fullWidth
                        onChange={handleChangeStatus}
                        name="status"
                        id="status"
                        value={status}
                    >
                        <MenuItem value="Ready">Ready</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                    </Select>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="left">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={dueDate}
                                onChange={handleChangeDueDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

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
