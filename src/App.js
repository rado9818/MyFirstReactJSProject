import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogInActivity from './LogInActivity';
import SecondActivity from './SecondActivity';
import ThirdActivity from './ThirdActivity';
import { Router, Route, browserHistory } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <Router history={browserHistory}>
            <Route path="/" component={LogInActivity}/>
            <Route path="second" component={SecondActivity} />
            <Route path="third" component={ThirdActivity} />
        </Router>


      </div>
    );
  }
}

export default App;
