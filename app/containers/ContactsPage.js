// @flow
import React, { Component } from 'react';
import Contact from '../components/Contact/Contact';
import SearchBar from '../components/Contact/SearchBar';
import {List, Textfield} from 'react-mdl';

export default class ContactsPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <List>
          <Contact contacts={contacts}/>
        </List>
      </div>
    );
  }
}

// dummy data for Contacts
var contacts = [
  {
    name: "Caleb",
    number: "123"
  },
  {
    name: "Kevin",
    number: "123"
  },
  {
    name: "Lee",
    number: "123"
  },
  {
    name: "Mario",
    number: "123"
  }
];
