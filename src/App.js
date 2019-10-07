import React, {Component} from 'react';
import './App.css';
import {Home} from './component/Home/Home.js';
import {Login} from './component/Login/Login.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {SignUp} from './component/SignUp/SignUp.js';

class App extends Component {

  constructor(props){
    super(props);
    var user={
      fullName: 'Camilo',
      email : 'email=camilo@biciroute.com',
      password : btoa('camilo')
    };
    localStorage.setItem('email=camilo@biciroute.com', JSON.stringify(user));
  }
  
  render() {

    const LoginView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );
    
    const SignUpView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <SignUp />} </div>
      );

    const HomeView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );

    return(
      <Router>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route path="/login" component={LoginView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/home" component={HomeView} />
          </Switch>
      </Router>
    );
  }
}

export default App;
