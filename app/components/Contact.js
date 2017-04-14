// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Contact.css';
import {ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl';


export default class Contact extends Component {
  render() {
    return (
      <ListItem>
        <ListItemContent avatar="person">{this.props.contact.name}</ListItemContent>
        <ListItemAction><Icon name="call"/></ListItemAction>
      </ListItem>
    );
  }
}
