// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavBar.css';
import { Header, IconButton, Icon, Tabs, Tab } from 'react-mdl';



export default class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { active: 0 }
  }

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
           <Link className="mdl-tabs__tab" to="home"><IconButton ripple colored name="home" /></Link>
           <Link className="mdl-tabs__tab" to="dialer"><IconButton ripple colored name="call" /></Link>
           <Link className="mdl-tabs__tab" to="contacts"><IconButton ripple colored name="group" /></Link>
           <Link className="mdl-tabs__tab" to="settings"><IconButton ripple colored name="settings" /></Link>
        </div>
      </div>
    );
  }
}
