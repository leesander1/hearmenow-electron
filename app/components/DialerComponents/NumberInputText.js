import React from 'react';
import TextField from 'material-ui/TextField';

class NumberInputText extends React.Component {
  static propTypes = {
    currentNumber: React.PropTypes.string.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="center-text">
        <TextField
          hintText="555-555-7777"
          value={this.props.currentNumber}
          onChange={this.props.handleOnChange} />
      </div>
    );
  }
}

export default NumberInputText;
