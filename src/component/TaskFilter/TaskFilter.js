import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './TaskFilter.css';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
import { Select } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TaskFilter() {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus ] = React.useState("");
    const [dueDate, setDueDate ] = React.useState(null);
    const [responsibleName, setResponsibleName] = React.useState("");

    const handleClickOnClear = () => {
        setResponsibleName("");
        setStatus("");
        setDueDate(null);
    }

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
  
    const handleChangeDueDate = (event) => {
        setDueDate(event);
    };
  
    const handleChangeResponsibleName = (event) => {
      setResponsibleName(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickSave = () => {
        var taskList = document.getElementById('taskList').childNodes;
        // by description taskList[i].childNodes[0].childNodes[1].innerText
        // by responsible's name taskList[i].childNodes[2].childNodes[0].innerText
        // by responsible's email taskList[i].childNodes[2].childNodes[1].innerText
        // by status taskList[i].childNodes[1].innerText.split(" - ")[0]
        // by due date taskList[i].childNodes[1].innerText.split(" - ")[1]
        for(var i=0; i<taskList.length; i++){
            var statusHTML = taskList[i].childNodes[1].innerText.split(" - ")[0];
            var responsibleNameHTML = taskList[i].childNodes[2].childNodes[0].innerText;
            var dueDateHTML = taskList[i].childNodes[1].innerText.split(" - ")[1];
            if((status!=="" && statusHTML !== status) ||
                (responsibleName!=="" &&   responsibleNameHTML !== responsibleName) ||
                (dueDate!=="" && dueDate!==null && dueDateHTML!==dueDate)){
                taskList[i].style.display = "none";
            }else{
                taskList[i].style.display = "block";
            }
        }
        handleClose();
    }
        

  return (
    <React.Fragment>
        <Button color="primary" className="button" onClick={handleClickOpen}>
            Filter
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            style={{margin:"0px"}}
        >
            <DialogTitle id="alert-dialog-slide-title">{"Task Filter"}</DialogTitle>
            <DialogContent>
                <form className="form" noValidate>
                    <TextField variant="outlined" margin="normal" required fullWidth
                        name="responsibleName" label="Responsible’s name" type="text" id="responsibleName" value={responsibleName}                        onChange = {handleChangeResponsibleName}
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
                </form>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClickOnClear} color="primary">
                Clear
            </Button>
            <Button onClick={handleClickSave} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
  );
}
