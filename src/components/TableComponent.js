import React from 'react';
import PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';

export default class TableComponent extends React.Component{
  render(){
    const {onChangeText, removeItem, state, sortKey, onSort} = this.props;
      state.dataSource = onSort(state.dataSource, sortKey, false);

      return (

        state.isLoading ? <LoadingComponent/> :

        state.dataSource.map(item =>
          <div key={item.releaseYear}>
            <h1>
              {item.title}
            </h1>
            <h2>
              {item.releaseYear}
            </h2>

             <button
              margin="10"
              onClick={
                  () => removeItem(item.title)
              }>Delete</button>
            </div>

          )
      )
  }
}

TableComponent.propTypes = {
  onChangeText: PropTypes.func,
  state:PropTypes.object.isRequired
}
