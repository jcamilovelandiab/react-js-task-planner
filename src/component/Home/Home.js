import React, { Component } from "react";
import Menu from '../Menu/Menu.js';
import {CardList} from '../CardList/CardList.js';
import './Home.css';
import { now } from "moment";
import swal from 'sweetalert';
import AddTask from '../AddTask/AddTask.js';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {Select} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            responsibleName: "",
            dueDate: now(),
            status: "",
        }
        this.handleChangeResponsibleName = this.handleChangeResponsibleName.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    }

    handleChangeResponsibleName(event){
        this.setState({
            responsibleName: event.target.value 
        });
    };
    
    handleChangeStatus(event){
        this.setState({
            status: event.target.value
        });
    };

    handleChangeDueDate(date){
        this.setState({
            dueDate: date
        });
    };

    showError(msg){
        swal({
            title:"Ooops!",
            text: msg,
            icon: "error",
            button: false,
            timer: 2000
        });
    }


    render(){

        return(
            <React.Fragment>
                <Menu />
                
                <Grid container alignItems="center" justify="center"
                    style={{margin:"auto", display: "flex",
                                flexDirection: "column"}}>
                    <Grid container alignItems="center" justify="center" flexDirection="column">
                        
                        <TextField item md={3} xs={12}
                            variant="outlined"
                            label="Responsible"
                            type="text"
                            value={this.state.responsibleName}
                            onChange={this.handleChangeResponsibleName}
                            margin="normal"
                            id="responsibleName"
                            name="responsibleName"
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        />
                        
                        <FormControl item
                            md={3} xs={12}
                            margin="normal"
                            variant="outlined"
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        >

                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Select
                                    required
                                    fullWidth
                                    onChange={this.handleChangeStatus}
                                    name="status"
                                    id="status"
                                    value={this.state.status}
                                    margin="normal"
                                >
                                <MenuItem value="Ready">Ready</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider 
                            item md={3} xs={12}
                            utils={DateFnsUtils}
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="dueDate"
                                label="Due date"
                                format="MM/dd/yyyy"
                                value={this.dueDate}
                                selected={this.dueDate}
                                onChange={this.handleChangeDueDate}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <Fab variant="extended"
                            item md={3} xs={12}
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        >
                            <SearchIcon/>
                            Filter  
                        </Fab>                   
                    </Grid>      
                                                
                    
                    <CardList cardList={(localStorage.getItem("taskList")!=null) ? JSON.parse(localStorage.getItem("taskList")):[]}/>
                </Grid>
                <AddTask />
            </React.Fragment>
        );
    }

}