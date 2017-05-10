import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './Footer.css';
import NetworkStatus from '../NetworkStatus/NetworkStatus';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500, cyan500, blue500, pinkA200 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { receivingCall } from '../../actions/index';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.handleIncomingCall = this.handleIncomingCall.bind(this);
  }

  componentDidMount() {
    Twilio.Device.setup(this.props.user.twiliotoken);

    Twilio.Device.ready(() => {
      // need to do something here
    });

    Twilio.Device.incoming((connection) => {
      this.handleIncomingCall(connection);
    });
  }

  handleIncomingCall(connection) {
    // add the connection to the redux store
    this.props.receivingCall(connection);
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

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({receivingCall: receivingCall}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
