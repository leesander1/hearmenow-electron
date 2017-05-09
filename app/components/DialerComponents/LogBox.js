import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogBox extends Component {
  static propTypes = {
    text: PropTypes.string,
    smallText: PropTypes.string
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
