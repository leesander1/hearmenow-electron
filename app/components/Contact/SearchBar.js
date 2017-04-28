import React, { Component } from 'react';
import styles from './Contact.css';
import TextField from 'material-ui/TextField';
import DebounceInput from 'react-debounce-input';



export default class SearchBar extends Component{

  render(){
    return(
      <div>
        <SearchApp />
      </div>
    );
  }
  }

var SearchApp = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange(event) {
    this.setState({value: event.target.value})
  },

  render(){
    return(
      <div>
        <DebounceInput
            element={TextField}
            hintText="Search"
            fullWidth={true}
            className={styles.searchBar}
            minLength={1}
            debounceTimeout={300}
            onChange={event => this.handleChange(event)}/>
          <p>Value: {this.state.value}</p>
      </div>
    );
  }
});
