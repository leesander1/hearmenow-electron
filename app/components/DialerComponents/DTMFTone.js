import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import styles from '../Dialer.css';

class DTMFTone extends React.Component {
  static propTypes = {
    handleOnChange: React.PropTypes.func.isRequired,
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
      marginRight: 20,
    };
    return (
      <div className={styles.keys}>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('1')}>1
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('2')}>2
              <span>A B C</span>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('3')}>3
              <span>D E F</span>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('4')}>4
              <span>G H I</span>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('5')}>5
              <span>J K L</span>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('6')}>6
              <span>M N O</span>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('7')}>7
              <span>P Q R S</span>
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('8')}>8
              <span>T U V</span>
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('9')}>9
              <span>W X Y Z</span>
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('*')}>*
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('0')}>0
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('#')}>#
          </FloatingActionButton>
        </div>
        <div className={styles.keyRow}>
          <FloatingActionButton
            onClick={() => this.sendDigit('*')}>*
          </FloatingActionButton>
          <FloatingActionButton
            style={style}
            onClick={() => this.sendDigit('0')}>0
          </FloatingActionButton>
          <FloatingActionButton
            onClick={() => this.sendDigit('#')}>#
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default DTMFTone;
