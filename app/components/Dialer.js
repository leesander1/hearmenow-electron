import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FloatingActionButton, red500, green500 } from 'material-ui';
import NumberInputText from './DialerComponents/NumberInputText';
import LogBox from './DialerComponents/LogBox';
import CallButton from './DialerComponents/CallButton';
import DTMFTone from './DialerComponents/DTMFTone';
import styles from './Dialer.css';

class Dialer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      muted: false,
      log: 'Connecting...',
      onPhone: false,
      countryCode: '1',
      currentNumber: '',
      isValidNumber: false,
      receivingCall: false,
      callerId: ''
    };

    this.handleAcceptedCall = this.handleAcceptedCall.bind(this);
    this.handleDeclinedCall = this.handleDeclinedCall.bind(this);
    this.handleDialerInput = this.handleDialerInput.bind(this);
    this.handleToggleCall = this.handleToggleCall.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleDisconnectCall = this.handleDisconnectCall.bind(this);
    this.updateLog = this.updateLog.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.incomingCallConnection != null && nextProps.incomingCallConnection._status == 'pending') {
      nextState.receivingCall = true;
      nextState.callerId = nextProps.incomingCallConnection.parameters.From;
    }
  }

  componentDidMount() {
    if (this.props.incomingCallConnection != null) {
      this.setState({
        receivingCall: true,
        callerId: this.props.incomingCallConnection.parameters.From
      });
    }

    // need to add this functionality to the redux store!
    Twilio.Device.disconnect(() => {
      this.handleDisconnectCall();
    });
  }

  updateLog(text) {
    this.setState({ log: text });
  }

  // Handle number input
  handleChangeNumber(e) {
    this.setState({
      currentNumber: e.target.value,
      isValidNumber: /^([0-9]|#|\*)+$/.test(e.target.value.replace(/[-()\s]/g, ''))
    });
  }

  // Handle Dialer Input
  handleDialerInput(n) {
    const dial = `${this.state.currentNumber + n}`;
    this.setState({
      currentNumber: dial,
      isValidNumber: /^([0-9]|#|\*)+$/.test(dial.replace(/[-()\s]/g, ''))
    });
  }

  // Handle muting
  handleToggleMute() {
    const muted = !this.state.muted;

    this.setState({ muted });
    Twilio.Device.activeConnection().mute(muted);
  }

  // Make an outbound call with the current number,
  // or hang up the current call
  handleToggleCall() {
    if (!this.state.onPhone) {
      this.setState({
        muted: false,
        onPhone: true
      });
      // make outbound call with current number
      const n = `+1${this.state.currentNumber.replace(/\D/g, '')}`;
      // console.log(`Attempting to connect to: ${n}`);
      Twilio.Device.connect({ phoneNumber: n });
      this.setState({ log: `Calling ${n}` });
    } else {

      // hang up call in progress.
      Twilio.Device.disconnectAll();

      // Update state to make call button green again.
      this.setState({
        onPhone: false,
        log: 'Ended Call Successfully'
      });
    }
  }

  handleAcceptedCall() {
    this.props.incomingCallConnection.accept();
    this.setState({
      receivingCall: false,
      callerId: '',
      onPhone: true,
      currentNumber: this.props.incomingCallConnection.parameters.From,
      isValidNumber: true
    });
  }

  handleDeclinedCall() {
    this.props.incomingCallConnection.ignore();
    this.setState({
      receivingCall: false,
      callerId: '',
      onPhone: false,
      currentNumber: '',
      isValidNumber: false
    });
  }

  handleDisconnectCall() {
    this.setState({
      onPhone: false,
      log: 'Ended Call Successfully'
    });
  }

  render() {
    if (this.state.receivingCall === true) {
      return (
        <div>
          <h2>Incoming call from</h2>
          <h3
            className={styles.incomingCallNumber}>{this.state.callerId}</h3>
          <div
            className={styles.incomingCallButtonContainer}>
            <FloatingActionButton
              className={styles.incomingCallButton}
              backgroundColor="#4CAF50"
              onClick={this.handleAcceptedCall}>Accept</FloatingActionButton>
            <FloatingActionButton
              className={styles.incomingCallButton}
              backgroundColor="#F44336"
              onClick={this.handleDeclinedCall}>Decline</FloatingActionButton>
          </div>
        </div>
      );
    }

    return (
      <div id="dialer">
        <div id="dial-form" className="input-group input-group-sm">
          <NumberInputText
            currentNumber={this.state.currentNumber}
            handleOnChange={this.handleChangeNumber} />
        </div>

        <DTMFTone
          handleOnChange={this.handleDialerInput} />

        <CallButton
          handleOnClick={this.handleToggleCall}
          disabled={!this.state.isValidNumber}
          onPhone={this.state.onPhone} />

        <LogBox text={this.state.log} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    incomingCallConnection: state.incomingCallConnection.connection
  }
}

export default connect(mapStateToProps)(Dialer);
