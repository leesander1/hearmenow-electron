import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500 } from 'material-ui/styles/colors';
import styles from '../Dialer.css';

class CallButton extends Component {
  static propTypes = {
    onPhone: PropTypes.bool,
    handleOnClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  render() {
    return (
      <div className={styles.centerDialer}>
        <FloatingActionButton
          backgroundColor={`${(this.props.onPhone ? red500 : green500)}`}
          onClick={this.props.handleOnClick}
          disabled={this.props.disabled}>
          <FontIcon name="call" className={`material-icons ${styles.phoneIcon}`}>phone</FontIcon>
        </FloatingActionButton>
      </div>
    );
  }
}

export default CallButton;
