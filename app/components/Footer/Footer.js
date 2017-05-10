import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './Footer.css';
import NetworkStatus from '../NetworkStatus/NetworkStatus';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500, cyan500, blue500, pinkA200 } from 'material-ui/styles/colors';
import notifier from 'notifier';

// notifier object
const nc = new notifier.NotificationCenter();

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.handleAcceptedCall = this.handleAcceptedCall.bind(this);
  }

  async componentDidMount() {
    const request = await fetch('https://serene-island-28717.herokuapp.com/api/generateToken', {
      method: 'POST'
    });

    const twilioToken = await request.json();

    Twilio.Device.setup(twilioToken.token);

    Twilio.Device.ready(() => {
      // need to do something here
    });

    Twilio.Device.incoming((connection) => {
      // send a system notification right now we are going to scrap this, not a high priority
      // nc.notify({
      //   title: 'Incoming Call from ' + connection.parameters.From,
      //   message: 'Would you like to:',
      //   closeLabel: 'Decline',
      //   actions: 'Accept',
      //   wait: true
      // }, function(err, response, metadata) {
      //   if(response == 'activate'){
      //     handleAcceptedCall(connection);
      //   }else if (response == 'closed') {
      //     this.handleAcceptedCall(connection);
      //   }
      // });
      this.handleAcceptedCall(connection);
    });
  }

  handleAcceptedCall(connection) {
    this.props.router.push('/dialer');
  }

  render() {
    return (
      <footer className={ styles.footer }>
        <div className={ styles.footerContent }>
          <p className={ styles.footerText }></p>
          <NetworkStatus/>
        </div>
      </footer>
    );
  }
}
