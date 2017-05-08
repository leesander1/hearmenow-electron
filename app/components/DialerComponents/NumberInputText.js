import React from 'react';
import TextField from 'material-ui/TextField';
import styles from '../Dialer.css';

class NumberInputText extends React.Component {
  static propTypes = {
    currentNumber: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
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
