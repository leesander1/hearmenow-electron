import React, { Component } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';

import notifier from 'notifier';
const nc = new notifier.NotificationCenter();


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
  //console.log('Its ready');
});

Twilio.Device.incoming((connection) => {
  // send a system notification
  nc.notify({
    title: 'Incoming Call from ' + connection.parameters.From,
    message: 'Would you like to:',
    closeLabel: 'Decline',
    actions: 'Accept',
    wait: true
  }, function(err, response, metadata) {
    if(response == 'activate'){
      connection.accept();
    }else if (response == 'closed') {
      connection.ignore();
    }
  });
  // call back for when a call is accepted
  connection.accept(() => {
    console.log('In a call');
  });
});

function sendCall() {
  var phone = {"phoneNumber": "8067895172"};
  Twilio.Device.connect(phone);
  console.log(twilio_token);
}

function endCall() {
  // hang up call in progress
  Twilio.Device.disconnectAll();
  console.log('call ended');
}
