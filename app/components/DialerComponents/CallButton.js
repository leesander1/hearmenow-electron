import React from 'react';

class CallButton extends React.Component {
  static propTypes = {
    onPhone: React.PropTypes.bool.isRequired,
    handleOnClick: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <button
        className={`btn btn-circle btn-success ${(this.props.onPhone ? 'btn-danger' : 'btn-success')}`}
        onClick={this.props.handleOnClick}
        disabled={this.props.disabled}>
        <i className={`fa fa-fw fa-phone ${(this.props.onPhone ? 'fa-close' : 'fa-phone')}`} />
      </button>
    );
  }
}

export default CallButton;
