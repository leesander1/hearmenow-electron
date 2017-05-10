import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import styles from '../Dialer.css';

class NumberInputText extends Component {
  static propTypes = {
    currentNumber: PropTypes.string,
    handleOnChange: PropTypes.func,
  }

  render() {
    return (
      <div className={`center-text ${styles.phoneNumberInput}`}>
        <TextField
          hintText="555-555-7777"
          type="tel"
          value={this.props.currentNumber}
          onChange={this.props.handleOnChange} />
      </div>
    );
  }
}

export default NumberInputText;
