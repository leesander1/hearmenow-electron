// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './NetworkStatus.css';
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';
import {red500, green500, cyan500, blue500, pinkA200} from 'material-ui/styles/colors';
import notifier from 'notifier';


const nc = new notifier.NotificationCenter();


export default class NetworkStatus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {connection: true, online_open: false, offline_open: false};
  }
  componentDidMount() {
    this.refreshID = setInterval(
      () => this.check(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.refreshID);
  }
  notifyOnline() {
    this.setState({
      online_open: true
    });
    console.log("Online");
  }
  notifyOffline() {
    this.setState({
      offline_open: true
    });
    console.log("Offline");
  }
  check() {
    const status = this.state.connection;
    if(navigator.onLine) {
      if(!status){ this.notifyOnline() }
      this.setState({
        connection: true
      });
      return true
    }
    else{
      if(status){ this.notifyOffline() }
      this.setState({
        connection: false
      });
    }
  }

  handleOnlineRequestClose = () => {
    this.setState({
      online_open: false,
    });
  }

  handleOfflineRequestClose = () => {
    this.setState({
      offline_open: false,
    });
  }
  trigger () {
    var x = this.state.connection ? nofityOnline() : notiftyOffline();
  }
  render() {
    var input = this.state.connection ? <div><FontIcon className="material-icons" style={styles.icon} color={green500}>adjust</FontIcon>
    <Snackbar
      open={this.state.online_open}
      message="✔️📶 You are now online 📶✔️"
      autoHideDuration={2000}
      onRequestClose={this.handleOnlineRequestClose}>
    </Snackbar></div>:
    <div><FontIcon className="material-icons" style={styles.icon} color={red500}>adjust</FontIcon>
    <Snackbar
      open={!this.state.offline_open}
      message="❌📶 No internet connection 📶❌"
      autoHideDuration={2000}
      onRequestClose={this.handleOfflineRequestClose}>
    </Snackbar></div>;
    return (
        <div>
         {input}
        </div>
    );
  }
}
