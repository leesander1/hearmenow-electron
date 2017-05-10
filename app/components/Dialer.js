import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInputText from './DialerComponents/NumberInputText';
import LogBox from './DialerComponents/LogBox';
import CallButton from './DialerComponents/CallButton';
import DTMFTone from './DialerComponents/DTMFTone';
import { connect } from 'react-redux';
import { FloatingActionButton, red500, green500 } from 'material-ui';

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
  }

  componentWillMount(nextProps) {
    console.log('****my new props', nextProps);
  }

  componentDidMount() {
    if (this.props.incomingCallConnection != null) {
      this.setState({
        receivingCall: true,
        callerId: this.props.incomingCallConnection.parameters.From
      });
    }
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
      // console.log(this.state.log);
    } else {
      // console.log('Hang up');
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
    this.setState({receivingCall: false});
  }

  handleDeclinedCall() {
    this.props.incomingCallConnection.ignore();
    this.setState({receivingCall: false});
  }

  render() {
    if (this.state.receivingCall == true) {
      return (
        <div>
          <h2>Incoming call from {this.state.callerId}</h2>
          <FloatingActionButton
            backgroundColor={'green500'}
            onClick={this.handleAcceptedCall}>Accept</FloatingActionButton>
          <FloatingActionButton
            backgroundColor={'red500'}
            onClick={this.handleDeclinedCall}>Decline</FloatingActionButton>
        </div>
      );
    }
    else {
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
}

function mapStateToProps(state) {
  return {
    incomingCallConnection: state.incomingCallConnection.connection
  }
}

export default connect(mapStateToProps)(Dialer);
