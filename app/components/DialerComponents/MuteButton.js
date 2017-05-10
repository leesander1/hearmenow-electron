import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MuteButton extends Component {
  static propTypes = {
    handleOnClick: PropTypes.func,
    muted: PropTypes.bool
  }
  render() {
    return (
      <button className="btn btn-circle btn-default" onClick={this.props.handleOnClick}>
        <i className={`fa fa-fw fa-microphone ${(this.props.muted ? 'fa-microphone-slash' : 'fa-microphone')}`} />
      </button>
    );
  }
}

export default MuteButton;
