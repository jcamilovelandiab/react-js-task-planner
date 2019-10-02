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

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {"fullName":"","email":"", 'password':"", "confirmPassword": ""};
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
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

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            onChange = {this.handleConfirmPasswordChange}
                        />

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
            this.showError("Please enter your email")
        }else if(this.state.password === ""){
            this.showError("Please enter your password.");
        }else if(this.state.password !== this.state.confirmPassword){
            this.showError("Passwords do not match. Please reconfirm your password.");
        }
        else if(localStorage.getItem("email="+this.state.email)!=null){
            this.showError("The email you entered already exists. Please enter another email");
        }else{
            var user = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: btoa(this.state.password)
            };
            localStorage.setItem("email="+this.state.email, JSON.stringify(user));
            swal({
                title:"Good job!",
                text: "You have signed up sucessfully!",
                icon: "success",
                timer: 2000,
                button: false,
            }).then(() => {
                window.location.href = "/login";
            });
        }
    }

}