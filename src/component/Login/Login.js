import React from 'react';
import { Link } from 'react-router-dom'; //this is important for routing
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
import Hidden from '@material-ui/core/Hidden';
import './Login.css';
import TimerIcon from '@material-ui/icons/Timer';

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
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Grid container>
                        <Hidden only='xs'>
                            <Grid item xs={false} sm={4} md={7}>
                                <div
                                    className="imageBackground"
                                />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Paper class="paper">
                                <Typography component="h1" variant="h5">
                                    Task planner
                                </Typography>
                                <Grid container justify="center" alignItems="center">
                                <Avatar className="avatar">
                                    <TimerIcon />
                                </Avatar>
                                </Grid>
                                <form className="form" onSubmit={this.handleSubmit}>

                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                id="email" label="Email Address"
                                                name="email" autoComplete="email"
                                                onChange={this.handleEmailChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined" margin="dense"
                                                required fullWidth
                                                name="password" label="Password"
                                                type="password" id="password" autoComplete="current-password"
                                                onChange={this.handlePasswordChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" fullWidth variant="contained"
                                                color="primary" className="submit">
                                                Sign in
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <br/>

                                    <Grid container justify="center">
                                        <Grid item>
                                            <Link to="/login">
                                                Don't you have an account? Sign up
                                            </Link>
                                        </Grid>
                                    </Grid>

                                </form>


                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </React.Fragment>
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

    handleSubmit(e) {
        e.preventDefault();
        console.log(localStorage.getItem("email="+this.state.email));
        if(localStorage.getItem("email="+this.state.email)===this.state.password){
            localStorage.setItem('isLoggedIn',true);
            window.location.href = "/home";
        }else{
            alert("The email or password is incorrect");
        }
    }

}