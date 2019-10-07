import React, { Component } from "react";
import MyNavBar from '../MyNavBar/MyNavBar.js';
import {CardList} from '../CardList/CardList.js';
import './Home.css';
import AddTask from '../AddTask/AddTask.js';
import { Grid } from '@material-ui/core';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
        };
    }

    componentDidMount() {
        fetch('https://taskplanner-apirest.herokuapp.com/v1/tasks')
            .then(response => response.json())
            .then(data => {
                this.setState({tasksList: data});
        });
    }

    render(){

        return(
            <React.Fragment>
                <MyNavBar />
                <Grid container alignItems="center" justify="center"
                    style={{margin:"auto", display: "flex",
                                flexDirection: "column"}}>
                    <CardList cardList={this.state.tasksList}/>
                </Grid>
                <AddTask />
            </React.Fragment>
        );
    }

}