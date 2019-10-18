import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import {Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {'email':"", 'password':""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render(){    

        return(
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={7} className="image" />
                <Grid item xs={12} sm={8} md={5} component={Paper} square>
                    <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Task Planner
                    </Typography>
                    <form className="form" noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username or Email"
                            name="email"
                            autoComplete="email"
                            onChange = {this.handleEmailChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange = {this.handlePasswordChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                        Log In
                        </Button>
                        <Grid container>
                        <Grid item>
                            <Link id="buttonSignUp" to="/signup" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                    </div>
                </Grid>
                </Grid>
        );
    }

    validEmail(email){
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    showError(msg){
        swal({
            title:"Ooops!",
            text: msg,
            icon: "error",
            button: false,
            timer: 2000
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email === ""){
            this.showError("Please, enter your username or email");
        }else if(this.state.password === ""){
            this.showError("Please enter your password");
        }else{
            var user = {
                username: null,
                email: null,
                password: btoa(this.state.password)
            }
            if(this.validEmail(this.state.email)) user.email = this.state.email;
            else user.username = this.state.email;
            axios.post('https://taskplanner-apirest.herokuapp.com/users/login', user)
            .then(function (response) {
                localStorage.setItem("loggedUser", JSON.stringify(response.data));
                localStorage.setItem("isLoggedIn", true);
                window.location.href = "/home";
            }).catch(function (error) {
                swal({
                    title:"Ooops!",
                    text: error.response.data,
                    icon: "error",
                    button: false,
                    timer: 2000
                });
            });
        }
    }
}