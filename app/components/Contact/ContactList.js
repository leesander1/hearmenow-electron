import React, { Component } from 'react';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import ReactImageFallback from 'react-image-fallback';
import SearchInput, { createFilter } from 'react-search-input';
import IconButton from 'material-ui/IconButton';
import { red500, green500, blue500 } from 'material-ui/styles/colors';
import styles from '../Contact.css';
import contacts from './GetContacts';
import DialerApp from '../Dialer';

const KEYS_TO_FILTERS = ['firstName', 'lastName', 'number', 'id'];


export default class ContactDisplay extends Component {

  pressCall(number) {
    console.log(this.number);
  }

  render() {
    const filteredContacts = contacts.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        { filteredContacts.map(contact => {
          return (
            <ListItem
              key={contact.firstName}
              primaryText={`${contact.firstName} ${contact.lastName}`}
              leftAvatar={
                <Avatar
                  icon={
                    <ReactImageFallback
                      src={contact.photo}
                      fallbackImage="../resources/icon.png"
                      initialImage={<CircularProgress size={25} thickness={3.5} />}
                      alt=""
                      className={styles.avatar} />
                  } />
              }
              secondaryText={contact.number}
              rightIcon={
                <Link to="/dialer" params={{ phoneNumber: contact.number }}>
                  <FontIcon
                    hoverColor={blue500}
                    onClick={() => this.pressCall(contact.number)}
                    name="call"
                    className="material-icons"
                    color={green500}>phone
                  </FontIcon>
                </Link>
              } />
          );
        })}
      </div>
    );
  }
}
