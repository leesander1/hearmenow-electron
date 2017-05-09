import React, { Component } from 'react';

class MuteButton extends Component {
  static propTypes = {
    handleOnClick: React.PropTypes.func.isRequired,
    muted: React.PropTypes.bool.isRequired
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
