import React from 'react';

export default class SearchText extends React.Component{
  componentDidMount(){
    this.input.focus();
  }
  render(){
    const {onChangeText} = this.props;

    console.log("This should be our event ", onChangeText);

      return (
        <input
          id="searchTxt"
          type="text"
          style={{width: 100,height: 40}}
          placeholder="Search..."
          onChange={onChangeText}
          ref = {(node) => {this.input = node}}
        />
      )
  }
}