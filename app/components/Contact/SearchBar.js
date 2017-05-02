import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Contact.css';

export default class SearchBar extends Component {
  render() {
    return (
      <TextField
        hintText="Search"
        className={styles.searchBar} />
    );
  }
}
