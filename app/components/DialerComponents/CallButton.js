import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import {red500, green500} from 'material-ui/styles/colors';

class CallButton extends React.Component {
  static propTypes = {
    onPhone: React.PropTypes.bool.isRequired,
    handleOnClick: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          backgroundColor={`${(this.props.onPhone ? red500 : green500)}`}
          onClick={this.props.handleOnClick}
          disabled={this.props.disabled}>
          <FontIcon name="call" className="material-icons">phone</FontIcon>
        </FloatingActionButton>
        <button
          className={`btn btnCircle btn-success ${(this.props.onPhone ? 'btn-danger' : 'btn-success')}`}
          >
          <i className={`fa fa-fw fa-phone ${(this.props.onPhone ? 'fa-close' : 'fa-phone')}`} />
        </button>
      </div>
    );
  }
}

export default CallButton;
