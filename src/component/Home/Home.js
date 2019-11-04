import React, { Component } from "react";
import MyNavBar from '../MyNavBar/MyNavBar.js';
import {CardList} from '../CardList/CardList.js';
import './Home.css';
import AddTask from '../AddTask/AddTask.js';
import { Grid } from '@material-ui/core';
import axios from 'axios';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/tasks',{
            headers: {
                'Authorization': 'Bearer '+JSON.parse(localStorage.getItem("loggedUser")).accessToken,
            },
            timeout: 1200
        }).then((response) => {
            this.setState({
                tasksList: response.data
            });
        })
        .catch((error) => {
            console.log(error);
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