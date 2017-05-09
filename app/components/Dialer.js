import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInputText from './DialerComponents/NumberInputText';
import LogBox from './DialerComponents/LogBox';
import CallButton from './DialerComponents/CallButton';
import DTMFTone from './DialerComponents/DTMFTone';

export default class Dialer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      muted: false,
      log: 'Connecting...',
      onPhone: false,
      countryCode: '1',
      currentNumber: '',
      isValidNumber: false
    };
  }

  async componentDidMount() {
    // console.log('Component Mounted');
    const request = await fetch('https://serene-island-28717.herokuapp.com/api/generateToken', {
      method: 'POST'
    });

    // console.log(request);
    const twilioToken = await request.json();
    // console.log(twilioToken.token);
    Twilio.Device.setup(twilioToken.token);

    Twilio.Device.ready(() => {
      this.updateLog('It\'s Ready');
    });
    // console.log(twilioToken);
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

  render() {
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
