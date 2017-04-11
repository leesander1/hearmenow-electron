// @flow
import React, { Component } from 'react';
import styles from './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container" />
        <div>hello world!</div>
        <div>hello world!</div>
      </div>
    );
  }
}

export default Dashboard;
