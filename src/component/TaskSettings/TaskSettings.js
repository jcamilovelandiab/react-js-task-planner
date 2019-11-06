import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TaskSettingsStyles from './TaskSettingsStyles.js';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function TaskSettings(props) {
  
  const classes = TaskSettingsStyles();

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.info.title}</DialogTitle>
        <DialogContent>
            <form className={classes.container} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-read-only-input"
                        label="Status"
                        defaultValue={props.info.status}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Due date"
                        defaultValue={props.info.dueDate}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-read-only-input"
                        label="Responsible’s name"
                        defaultValue={props.info.responsible.fullName}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Responsible’s email"
                        defaultValue={props.info.responsible.email}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </form>
                            
            <Typography variant="h6" className={classes.dividerFullWidth}
                gutterBottom style={{marginTop: "30px"}}>
                Task photo
            </Typography>
            <Divider style={{marginBottom: "8px"}}/>
            <div className={classes.container} style={{width: "100%"}}>
                <img src='https://loremflickr.com/320/240' alt="taskphoto" style={{margin: "auto"}}></img>
            </div>

            <Typography variant="h6" className={classes.dividerFullWidth}
                gutterBottom style={{marginTop: "30px"}}>
                Task pdf
            </Typography>
            <Divider style={{marginBottom: "8px"}}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Close
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
