import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Contact.css';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import ReactImageFallback from 'react-image-fallback';

import {red500, green500, cyan500, blue500, pinkA200} from 'material-ui/styles/colors';


export default class Contact extends Component {

  render() {
    if(this.props.contacts != null) {
      var contactList = this.props.contacts.map(function(contact) {
        return(
          <ListItem key={contact.name}
            primaryText={contact.name}
            leftAvatar={<Avatar  icon={<ReactImageFallback
    					src={contact.photo}
    					fallbackImage="../resources/icon.png"
    					initialImage={<CircularProgress size={25} thickness={3.5} />}
    					alt=""
    					className={styles.avatar} />} />}
            secondaryText={contact.number}
            rightIcon={<FontIcon name="call" className="material-icons" style={styles.icon} color={green500}>phone</FontIcon>}
          />
        );
      });
      return (
        <div>
          {contactList}
        </div>
      );
    }
    else {
      return (
        <ListItem>
          No Contacts
        </ListItem>
      );
    }
  }
}
