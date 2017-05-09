import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import styles from '../Dialer.css';

class DTMFTone extends Component {
  static propTypes = {
    handleOnChange: PropTypes.func,
  }

  // Handle numeric buttons
  sendDigit(digit) {
    this.digit = digit;
    this.props.handleOnChange(this.digit);
    // Twilio.Device.activeConnection().sendDigits(this.digit);
  }

  render() {
    const style = {
      marginLeft: 20,
      marginRight: 20
    };
    return (
      <div className={styles.keys}>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('1')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumberEmpty}>1</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('2')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>2</span>
              <span className={styles.dialText}>A B C</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('3')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>3</span>
              <span className={styles.dialText}>D E F</span>
            </div>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('4')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>4</span>
              <span className={styles.dialText}>G H I</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('5')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>5</span>
              <span className={styles.dialText}>J K L</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('6')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>6</span>
              <span className={styles.dialText}>M N O</span>
            </div>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('7')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>7</span>
              <span className={styles.dialText}>P Q R S</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('8')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>8</span>
              <span className={styles.dialText}>T U V</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('9')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumber}>8</span>
              <span className={styles.dialText}>W X Y Z</span>
            </div>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('*')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumberEmpty}>*</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('0')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumberEmpty}>0</span>
            </div>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('#')}
            className={styles.floatingDialerButton}>
            <div>
              <span className={styles.dialerNumberEmpty}>#</span>
            </div>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default DTMFTone;
