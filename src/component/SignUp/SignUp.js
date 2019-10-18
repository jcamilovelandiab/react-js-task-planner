import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import '../Login/Login.css';
import {Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {"fullName":"", "username": "","email":"", 'password':"", "confirmPassword": ""};
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render(){

        return(
            <Grid container component="main" className="root">
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className="image" />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            onChange = {this.handleFullNameChange}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            onChange = {this.handleUsernameChange}
                        />
                            
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange = {this.handleEmailChange}
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

                        {/*<TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            onChange = {this.handleConfirmPasswordChange}
                        />*/}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                        Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    </div>
                </Grid>
                </Grid>
        );
    }

    handleFullNameChange(e){
        this.setState({
            fullName: e.target.value
        });
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

    handleConfirmPasswordChange(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        });
    }

    showError(msg, time=2000){
        swal({
            title:"Ooops!",
            text: msg,
            icon: "error",
            button: false,
            timer: time
        });
    }

    /*
      The password must contain at least one number,
      one lowercase letter, one uppercase letter,
      and a minimum length of 6 characters.
    */
    validPasswordFormat(password){
        var re = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))(?=.{5,29})/u;
        return re.test(password);
    }

    validEmail(email){
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validUsername(username){
        var re = /^[a-zA-Z][a-zA-Z0-9_]{5,29}$/;
        return re.test(username);
    }

    validForm(){
        if(this.state.fullName===""){
            this.showError("Please enter your full name"); return false;
        }else if(this.state.username===""){
            this.showError("Please enter an username"); return false;
        }else if(this.state.email === ""){
            this.showError("Please enter your email"); return false;
        }else if(this.state.password === ""){
            this.showError("Please enter your password"); return false;
        }else if(!this.validUsername(this.state.username)){
            //console.log(this.validUsername(this.state.username));
            this.showError("The username can only contain alphanumeric characters and underscores (_), its first character must be an alphabetic character, and a minimum length of 6 characters.", 3000);
            return false;
        }else if(!this.validEmail(this.state.email)){
            this.showError("Please enter a valid email"); return false;
        }else if(!this.validPasswordFormat(this.state.password)){
            this.showError("The password must contain at least one number, one lowercase letter, one uppercase letter, and a minimum length of 6 characters.", 3000);
            return false;
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.validForm()){
            var user = {
                username: this.state.username,
                fullName: this.state.fullName,
                email: this.state.email,
                password: btoa(this.state.password)
            };
            axios.post('https://taskplanner-apirest.herokuapp.com/users', user)
            .then(function (response) {
                swal({
                    title:"Good job!",
                    text: "You have signed up sucessfully!",
                    icon: "success",
                    timer: 2000,
                    button: false,
                }).then(() => {
                    localStorage.setItem("loggedUser", JSON.stringify(response.data));
                    localStorage.setItem("isLoggedIn", true);
                    window.location.href = "/home";
                });
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