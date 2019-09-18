import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../Login/Login.css';

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {'email':"", 'password':"", "confirmPassword": ""};
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
                        Sign Up
                    </Typography>
                    <form className="form" noValidate onSubmit={this.handleSubmit}>
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
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange = {this.handleConfirmPasswordChange}
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
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
                                <a href="/login" variant="body2">
                                {"Already have an account? Sign in"}
                                </a>
                            </Grid>
                        </Grid>
                    </form>
                    </div>
                </Grid>
                </Grid>
        );
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

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email === ""){
            alert("Please enter your email.");
        }else if(this.state.password === ""){
            alert("Please enter your password.");
        }else if(this.state.password !== this.state.confirmPassword){
            alert("Passwords do not match. Please reconfirm your password.");
        }
        else if(localStorage.getItem("email="+this.state.email)!=null){
            alert("The email you entered already exists");
        }else{
            localStorage.setItem("email="+this.state.email, this.state.password);
            alert("You have signed up successfully!");
            window.location.href = "/login"
        }
    }

}