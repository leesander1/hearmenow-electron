// @flow
import React, { Component } from 'react';
import Contact from '../components/Contact';
import {List} from 'react-mdl';

export default class ContactsPage extends Component {
  render() {
    return (
      <List>
        <Contact contact={contacts[0]}/>
        <Contact contact={contacts[1]}/>
        <Contact contact={contacts[2]}/>
      </List>
    );
  }
}

// dummy data for Contacts
var contacts = [
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
