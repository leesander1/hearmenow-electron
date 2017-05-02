// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './NetworkStatus.css';
import FontIcon from 'material-ui/FontIcon';
import {red500, green500, cyan500, blue500, pinkA200} from 'material-ui/styles/colors';
import notifier from 'notifier';


const nc = new notifier.NotificationCenter();


export default class NetworkStatus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {connection: true};
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
  check() {
    if(navigator.onLine) {
      this.setState({
        connection: true
      });
      nc.notify({
        title: 'You are now Online!',
        message: 'Hearmenow is now able to initiate or accept calls.',
        closeLabel: 'Close',
        wait: true
      });
      return true
    }
    else{
      this.setState({
        connection: false
      });
      nc.notify({
        title: 'You are now Offline!',
        message: 'Hearmenow is NOT able to initiate or accept calls while offline.',
        closeLabel: 'Close',
        wait: true
      });
      return false
    }

  }

  render() {
    var input = this.state.connection ? <FontIcon className="material-icons" style={styles.icon} color={green500}>adjust</FontIcon> : <FontIcon className="material-icons" style={styles.icon} color={red500}>adjust</FontIcon>;
    return (
        <div>
         {input}
        </div>
    );
  }
}
