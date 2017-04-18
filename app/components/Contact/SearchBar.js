import React, { Component } from 'react';
import styles from './Contact.css';
import {Textfield} from 'react-mdl';


export default class SearchBar extends Component{
  render(){
    return(
      <Textfield
        label="Search"
        className={styles.searchBar}
      />
    );
  }
}
