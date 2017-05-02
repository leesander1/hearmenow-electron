import React, { Component } from 'react';
import Contact from '../components/Contact/Contact';
import SearchBar from '../components/Contact/SearchBar';
import {List} from 'material-ui/List';


export default class ContactsPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <List>
          <Contact contacts={contacts} />
        </List>
      </div>
    );
  }
}

// dummy data for Contacts
var contacts = [
  {
    name: "Caleb",
    number: "(123) 456 7890",
    photo: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
    fallbackSrc: "../resources/icon.png"
  },
  {
    name: "Kevin",
    number: "(123) 456 7890",
    photo: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
    fallbackSrc: "../resources/icon.png"
  },
  {
    name: "Lee",
    number: "(123) 456 7890",
    photo: "https://firebasestorage.googleapis.com/v0/b/project-7371035720386046946.appspot.com/o/img%2F2818946.jpg?alt=media&token=8d410af1-3253-4391-9234-179ca38e9b10",
    fallbackSrc: "../resources/icon.png"
  },
  {
    name: "Mario",
    number: "(123) 456 7890",
    photo: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
    fallbackSrc: "../resources/icon.png"
  }
];
