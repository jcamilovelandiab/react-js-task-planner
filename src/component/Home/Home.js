import React, { Component } from "react";
import MyNavBar from '../MyNavBar/MyNavBar.js';
import {CardList} from '../CardList/CardList.js';
import './Home.css';
import AddTask from '../AddTask/AddTask.js';
import { Grid } from '@material-ui/core';

export class Home extends Component {

    render(){

        return(
            <React.Fragment>
                <MyNavBar />
                <Grid container alignItems="center" justify="center"
                    style={{margin:"auto", display: "flex",
                                flexDirection: "column"}}>
                    <CardList cardList={(localStorage.getItem("taskList")!=null) ? JSON.parse(localStorage.getItem("taskList")):[]}/>
                </Grid>
                <AddTask />
            </React.Fragment>
        );
    }

}