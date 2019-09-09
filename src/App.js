import React, {Component} from 'react';
import './App.css';
import {Home} from './component/Home/Home.js';
import {Login} from './component/Login/Login.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Menu} from './component/Menu/Menu.js';

class App extends Component {

  constructor(props){
    super(props);
    localStorage.setItem('email=camilo@biciroute.com', 'camilo');
  }
  
  render() {

    const LoginView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );

    const HomeView = () => (
      <div>{localStorage.getItem('isLoggedIn') != null ? <Home /> : <Login />} </div>
    );

    const MenuView = () => (
      <Menu />
    );

    return(
      <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LoginView} />
              <Route path="/login" component={LoginView} />
              <Route path="/home" component={HomeView} />
              <Route path="/menu" component={MenuView} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
