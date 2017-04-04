// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container" />
      </div>
    );
  }
}
var twilio_token = {};

async function getToken() {
  let request = await fetch('https://serene-island-28717.herokuapp.com/api/generateToken', {
    method: 'POST'
  });

  twilio_token = await request.json();

  console.log(twilio_token);
}
