import React from 'react';

class NumberInputText extends React.Component {
  render() {
    return (
      <div className="input-group input-group-sm">
        <input
          type="tel"
          className="form-control"
          placeholder="555-666-7777"
          value={this.props.currentNumber}
          onChange={this.props.handleOnChange} />
      </div>
    );
  }
}

NumberInputText.propTypes = {
  currentNumber: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.string.isRequired,
};

export default NumberInputText;
