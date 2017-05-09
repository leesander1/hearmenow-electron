import React, { Component } from 'react';

class LogBox extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    smallText: React.PropTypes.string,
  }

  render() {
    return (
      <div>
        <div className="log center-text">{this.props.text}</div>
        <p>{this.props.smallText}</p>
      </div>
    );
  }
}

export default LogBox;
