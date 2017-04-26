import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Contact.css';
import {ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl';


export default class Contact extends Component {
  render() {
    if(this.props.contacts != null) {
      var contactList = this.props.contacts.map(function(contact) {
        return(
          <ListItem key={contact.name} className={styles.contanctTile}>
            <ListItemContent avatar="person">{contact.name}</ListItemContent>
            <ListItemAction><Icon name="call" className={styles.phone}/></ListItemAction>
          </ListItem>
        );
      });

      return (
        <div>
          {contactList}
        </div>
      );
    }
    else {
      return(
        <ListItem>
          No Contacts
        </ListItem>
      );
    }
  }
}
