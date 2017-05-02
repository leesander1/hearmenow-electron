import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './Footer.css';
import NetworkStatus from '../NetworkStatus/NetworkStatus';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500, cyan500, blue500, pinkA200 } from 'material-ui/styles/colors';

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        <div className={ styles.footerContent }>
          <p className={ styles.footerText }></p>
          <NetworkStatus/>
        </div>
      </footer>
    );
  }
}
