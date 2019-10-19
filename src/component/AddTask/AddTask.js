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
import axios from 'axios';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Select, CssBaseline } from '@material-ui/core';
import { now } from "moment";
import './AddTask.css';
import FormControl from '@material-ui/core/FormControl';

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
  const [title, setTitle ] = React.useState("");
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

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeStatus = (event) => {
      setStatus(event.target.value);
  };

  const handleChangeDueDate = (event) => {
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
    if(title===""){
      showError("Enter the title");
      document.getElementById("title").focus();
    }else if(responsibleName===""){
      showError("Enter the responsible’s name"); document.getElementById("responsibleName").focus(); 
    }else if(responsibleEmail===""){
      showError("Enter the responsible’s email"); document.getElementById("responsibleEmail").focus();
    }else if(status===""){
      showError("Enter the status"); document.getElementById("status").focus();
    }else if(dueDate===null){
        showError("Enter the due date"); document.getElementById("dueDate").focus();
    }else{
        const newTask = {
            title: title,
            responsible: {
                name: responsibleName,
                email: responsibleEmail
            },
            status: status,
            dueDate: dueDate
        }
        console.log(newTask);

        axios.post('https://taskplanner-apirest.herokuapp.com/api/tasks', newTask,{
          headers: {
              'Authorization': 'Bearer '+JSON.parse(localStorage.getItem("loggedUser")).accessToken,
          },
          timeout: 1000
        }).then((response)=> {
          swal({
              title:"Good job!",
              text: "You have created a new task sucessfully!",
              icon: "success",
              timer: 2000,
              button: false,
          }).then(() => {
            handleClose();
            window.location.reload();
          });
        }).catch((error)=> {
            swal({
                title:"Ooops!",
                text: "An error occurred while trying to create a task. Please try again!",
                icon: "error",
                button: false,
                timer: 2000
            });
        });
    }
  }

  return (
    <Container>
        <CssBaseline/>
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
                        id="title"
                        label="Task Title"
                        name="title"
                        onChange = {handleChangeTitle}
                    />

                    <TextField variant="outlined" margin="normal" required fullWidth name="responsibleName"
                        label="Responsible’s name" type="text" id="responsibleName"
                        onChange = {handleChangeResponsibleName}
                    />

                    <TextField variant="outlined" margin="normal" required fullWidth name="responsibleEmail"
                        label="Responsible’s email" type="text" id="responsibleEmail"
                        onChange = {handleChangeResponsibleEmail}
                    />

                    <br/>
                    <FormControl item
                            md={3} xs={12}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        >
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
                    </FormControl>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="dueDate"
                        label="Due date"
                        format="MM/dd/yyyy"
                        value={dueDate}
                        selected={dueDate}
                        onChange={handleChangeDueDate}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                     </MuiPickersUtilsProvider>

                    <Button fullWidth variant="contained"
                        color="secundary" className="submit"
                        style={{
                          marginTop: "10px !important",
                          borderRadius: "0% !important",
                          backgroundColor: "#212121 !important",
                          width: "100% !important"
                        }}
                        >
                        Add task
                    </Button>                       
                </form>
            </DialogContent>
        </Dialog>
      </Container>
  );
}
