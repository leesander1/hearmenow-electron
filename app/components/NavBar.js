// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Link } from 'react-router';
import styles from './NavBar.css';



export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link className="" to="dialer">Dialer</Link>
          <Link className="" to="home">Home</Link>
        </ul>
      </div>
    );
  }
}
