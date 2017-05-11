import React, { Component } from 'react';
// import { Link } from 'react-router';
import { FlatButton } from 'material-ui';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <FlatButton
          label="Get Token"
          primary
          onClick={getToken}
          className={`${styles.button}`} />
        <br /><br />
        <FlatButton
          label="Make call"
          primary
          onClick={sendCall}
          className={`${styles.button}`} />
        <br /><br />
        <FlatButton
          label="End call"
          primary
          onClick={endCall}
          className={`${styles.button}`} />
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
  //console.log('Its ready');
});

function sendCall() {
  var phone = {"phoneNumber": "4323498373"};
  Twilio.Device.connect(phone);
  console.log(twilio_token);
}

function endCall() {
  // hang up call in progress
  Twilio.Device.disconnectAll();
  console.log('call ended');
}
