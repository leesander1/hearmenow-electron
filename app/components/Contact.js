// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500, cyan500, blue500, pinkA200 } from 'material-ui/styles/colors';
import styles from './Contact.css';
import SearchBar from './Contact/SearchBar';
import ContactList from './Contact/ContactList';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ContactApp />
      </div>
    );
  }
}

export const ContactApp = React.createClass({
  getInitialState() {
    return { value: '' };
  },

  handleSearchInput(value) {
    this.setState({ value });
  },

  render() {
    return (
      <div>
        <SearchBar
          handleOnChange={this.handleSearchInput} />
        <ContactList
          searchTerm={this.state.value} />
      </div>
    );
  }
});
