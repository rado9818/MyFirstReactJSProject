import React from 'react';


  const util = require('util');

export default class ThirdActivity extends React.Component {


  render() {


    return (
     <div>

        <p>Third Activity! </p>
       <MyImage/>

      </div>
    );
  }
  saveData(){
    //var Constants = require('./Constants');


  }
}


class MyImage extends React.Component{

  render(){


      return (
       <div>
        <image src={{uri: 'https://facebook.github.io/react/logo-og.png'}}
               style={{width: 200, height: 200}} />
      </div>
      )
  }
}