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
import Paper from '@material-ui/core/Paper';

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            description: "",
            responsibleName: "",
            responsibleEmail: "",
            status: "",
        }

        this.HandleChangeDescription = this.HandleChangeDescription.bind(this);
        this.handleChangeResponsibleName = this.handleChangeResponsibleName.bind(this);
        this.handleChangeResponsibleEmail = this.handleChangeResponsibleEmail.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    }

    HandleChangeDescription(event){
        this.setState({
            description: event.target.value
        });
    }

    handleChangeResponsibleName(event){
        this.setState({
            responsibleName: event.target.value 
        });
    };

    handleChangeResponsibleEmail(event){
        this.setState({
            responsibleEmail: event.target.value 
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
                    <Grid alignItems="center" justify="center" container flexDirection="column">
                        <TextField  item md={3} xs={12}
                            label="Due date"
                            value={this.state.dueDate}
                            onChange={this.handleDescriptionChange}
                            margin="normal"
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        />
                        <TextField item md={3} xs={12}
                            label="Responsible"
                            value={this.state.responsibleName}
                            onChange={this.handleChangeResponsibleName}
                            margin="normal"
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        />
                        <TextField item md={3} xs={12}
                            label="Status"
                            value={this.state.status}
                            onChange={this.handleChangeStatus}
                            margin="normal"
                            style={{marginLeft: 8,
                                marginRight: 8,
                                width: 200}}
                        />
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