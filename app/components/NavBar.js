// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Link } from 'react-router';
import styles from './NavBar.css';
import { Header, HeaderRow, HeaderTabs, Tabs, Tab } from 'react-mdl'



export default class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { active: 0 }
  }

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
              <Link className="mdl-tabs__tab" to="home">Home</Link>
              <Link className="mdl-tabs__tab" to="dialer">Dialer</Link>
        </div>
      </div>
    );
  }
}
