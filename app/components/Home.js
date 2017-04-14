// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';
import Button from './components/Button';


export default class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={getToken}>Get Token</button>
        <button onClick={sendCall}>Make call</button>
        <button onClick={endCall}>End call</button>
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
  console.log(twilio_token.token);
  Twilio.Device.setup(twilio_token.token);
  console.log(twilio_token);
}

Twilio.Device.ready(() => {
  console.log('Its ready');
});


function sendCall() {
  var phone = {"phoneNumber": "4698773526"};
  Twilio.Device.connect(phone);
  console.log(twilio_token);
}

function endCall() {
  // hang up call in progress
  Twilio.Device.disconnectAll();
  console.log('call ended');
}
