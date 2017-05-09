import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DebounceInput from 'react-debounce-input';
import styles from '../Contact.css';

export default class SearchBar extends Component {

  static propTypes = {
    handleOnChange: PropTypes.func,
  }

  inputChange(event) {
    this.value = event.target.value;
    this.props.handleOnChange(this.value);
  }

  render() {
    return (
      <div>
        <DebounceInput
          element={TextField}
          hintText="Search"
          fullWidth={true}
          className={styles.searchBar}
          minLength={1}
          debounceTimeout={300}
          onChange={event => this.inputChange(event)} />
      </div>
    );
  }
}
