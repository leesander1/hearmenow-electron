import React from 'react';

class NumberInputText extends React.Component {
  static propTypes = {
    currentNumber: React.PropTypes.number.isRequired,
    handleOnChange: React.PropTypes.func.isRequired,
  }

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

export default NumberInputText;
