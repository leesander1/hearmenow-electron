// @flow
import React, { Component } from 'react';
import Contact from '../components/Contact';
import {List} from 'react-mdl';

export default class ContactsPage extends Component {
  render() {
    return (
      <List>
        <Contact contacts={contacts}/>
      </List>
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
