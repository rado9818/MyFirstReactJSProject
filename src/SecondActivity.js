import React from 'react';
import {moviesUrl, key} from './Constants';
import SearchText from './components/SearchText';
import TableComponent from './components/TableComponent';
import PropTypes from 'prop-types';
import {sortBy} from 'lodash';
const util = require('util');
//import ThirdActivity from './app/ThirdActivity';

var list;



function isSearched(searchTerm){
  return function(item){

    return !searchTerm || item.title.includes(searchTerm);
  }
}

export default class SecondActivity extends React.Component {

  //var {navigate}
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    console.log(key);
 

    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.onSort = this.onSort.bind(this);
  }


  componentDidMount(){
    this.setState({isLoading: true})
    return fetch(moviesUrl)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){
            list = responseJson.movies;
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

removeItem(name){
//  alert("Delete "+name);
function isNotName(item){
    return item.title !== name;
}
//console.log(list[0].title);
  const updatedList=list.filter(isNotName);
  console.log("Here is the context "+this.setState);
  this.setState({dataSource: updatedList});
  list = updatedList;
}

onSort(list, key, reverse){
  if(reverse){
    return sortBy(list, key).reverse();
  }else{
    return sortBy(list, key);
  }
}

searchValue(event){
  console.log("Searched");
  const updatedList=list.filter(isSearched(document.getElementById("searchTxt").value));
    console.log(updatedList);

  this.setState({dataSource: updatedList});

}


  render() {
  //  console.log("this.props.navigation = "+util.inspect(this.props.navigation, false, null));


    return (
      <div>
        <button onClick={
              () =>  {this.props.router.push('/third');}

          }
        >Go to scr 2</button>
        <SearchText
          onChangeText={this.searchValue}
        />

        <TableComponent
          sortKey="title"
          onSort={this.onSort}
          removeItem={this.removeItem}
          state={this.state}/>

      </div>
    );
  }

}
