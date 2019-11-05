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
        var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        axios.get('http://localhost:8080/api/tasks',{
            headers: {
                'Authorization': 'Bearer '+ loggedUser.accessToken,
            },
            timeout: 1200
        }).then((response) => {
            this.setState({
                tasksList: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        }).then(()=>{
            axios.get('http://localhost:8080/api/files/profileImage_'+loggedUser.id,{
                headers: {
                    'Authorization': 'Bearer '+ loggedUser.accessToken,
                },
                timeout: 1200
            }).then((response) => {
                alert("the image was found");
                localStorage.setItem("profileImage", btoa(response.data));
            })
            .catch((error) => {
                alert("we couldn't find the image");
            });
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