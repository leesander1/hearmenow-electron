import React, { Component } from 'react';
import NumberInputText from './DialerComponents/NumberInputText';
import CountrySelectBox from './DialerComponents/CountrySelectBox';
import LogBox from './DialerComponents/LogBox';
import CallButton from './DialerComponents/CallButton';
import MuteButton from './DialerComponents/MuteButton';
import DTMFTone from './DialerComponents/DTMFTone';

export default class Dialer extends Component {
  render() {
    return (
      <div>
        <h4 className="center-text">Dialer</h4>
        <DialerApp />
      </div>
    );
  }
}

var DialerApp = React.createClass({
  getInitialState() {
    return {
      muted: false,
      log: 'Connecting...',
      onPhone: false,
      countryCode: '1',
      currentNumber: '8067895172',
      isValidNumber: false,
      countries: [
        { name: 'United States', cc: '1', code: 'us' },
        { name: 'Great Britain', cc: '44', code: 'gb' },
        { name: 'Colombia', cc: '57', code: 'co' },
        { name: 'Ecuador', cc: '593', code: 'ec' },
        { name: 'Estonia', cc: '372', code: 'ee' },
        { name: 'Germany', cc: '49', code: 'de' },
        { name: 'Hong Kong', cc: '852', code: 'hk' },
        { name: 'Ireland', cc: '353', code: 'ie' },
        { name: 'Singapore', cc: '65', code: 'sg' },
        { name: 'Spain', cc: '34', code: 'es' },
        { name: 'Brazil', cc: '55', code: 'br' },
      ]
    };
  },

  async componentDidMount() {
    console.log('Component Mounted');
    const request = await fetch('https://serene-island-28717.herokuapp.com/api/generateToken', {
      method: 'POST'
    });

    console.log(request);
    const twilioToken = await request.json();
    console.log(twilioToken.token);
    Twilio.Device.setup(twilioToken.token);
    console.log(twilioToken);
  },

  // Handle country code selection
  handleChangeCountryCode(countryCode) {
    this.setState({ countryCode });
  },

  // Handle number input
  handleChangeNumber(e) {
    this.setState({
      currentNumber: e.target.value,
      isValidNumber: /^([0-9]|#|\*)+$/.test(e.target.value.replace(/[-()\s]/g, ''))
    });
  },

  // Handle Dialer Input
  handleDialerInput(n) {
    const dial = `${this.state.currentNumber + n}`;
    this.setState({
      currentNumber: dial,
      isValidNumber: /^([0-9]|#|\*)+$/.test(dial.replace(/[-()\s]/g, ''))
    });
  },

  // Handle muting
  handleToggleMute() {
    const muted = !this.state.muted;

    this.setState({ muted });
    Twilio.Device.activeConnection().mute(muted);
  },

  // Make an outbound call with the current number,
  // or hang up the current call
  handleToggleCall() {
    if (!this.state.onPhone) {
      this.setState({
        muted: false,
        onPhone: true
      });
      // make outbound call with current number
      const n = `+ ${this.state.countryCode + this.state.currentNumber.replace(/\D/g, '')}`;
      console.log(`Attempting to connect to: ${n}`);
      Twilio.Device.connect({ phoneNumber: n });
      this.setState({ log: `Calling ${n}` });
      console.log(this.state.log);
    } else {
      // hang up call in progress
      Twilio.Device.disconnectAll();
    }
  },

  render() {
    return (
      <div id="dialer">
        <div id="dial-form" className="input-group input-group-sm">

          <CountrySelectBox
            countries={this.state.countries}
            countryCode={this.state.countryCode}
            handleOnChange={this.handleChangeCountryCode} />

          <NumberInputText
            currentNumber={this.state.currentNumber}
            handleOnChange={this.handleChangeNumber} />

        </div>

        <div className="controls">

          <CallButton
            handleOnClick={this.handleToggleCall}
            disabled={!this.state.isValidNumber}
            onPhone={this.state.onPhone} />

          { this.state.onPhone
            ? <MuteButton
              handleOnClick={this.handleToggleMute}
              muted={this.state.muted} />
            : null }

        </div>

        <DTMFTone
          handleOnChange={this.handleDialerInput} />

        <LogBox text={this.state.log} />

      </div>
    );
  }
});
