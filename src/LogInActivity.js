import React from 'react';
import SecondActivity from './SecondActivity'
import {Router, Route} from 'react-router';


  const util = require('util');




export default class LogInActivity extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

 onLogin(){
   // const { email, password } = this.state;

    //alert(email + " " + password);

    fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    }),
    }).then((response) => response.json())
      .then((responseJson) => {


        if(!responseJson.hasOwnProperty('error')){
                          console.log("Successful login ", responseJson);
                         // <SecondActivity/>
                         this.props.router.push('/second');
        }else{
        //  alert("Error");
        }

      })
      .catch((error) => {
        alert(error);
                console.log(error);

      });

  }

  render() {


   // var {params} = this.props.navigation.state;
    return (
      <div>
        <p>LogInActivity! </p>
          <input
                  style={{width: 300, height: 40, borderColor: 'gray'}}
                  placeholder="Email"
                  onChange={(email) => this.setState({email})}
                />

          <input
            onChange={(password) => this.setState({password})}
            placeholder="Password"
            style={{width: 300, height: 40, borderColor: 'gray'}}
          />
        <button
            title="Log In"
            width="60px"
            onClick={this.onLogin.bind(this)}
          >Submit</button>

      </div>
    );
  }
  saveData(){
    //var Constants = require('./Constants');

  }
}

