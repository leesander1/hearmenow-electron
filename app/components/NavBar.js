import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavBar.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  render() {
    return (
      <div className="">
        <Tabs className="" onChange={this.active} value={this.state}>
          <Tab value={0} containerElement={<Link to="home"/>} icon={<FontIcon className="material-icons">home</FontIcon>}>
          </Tab>
          <Tab value={1} containerElement={<Link to="dialer"/>} icon={<FontIcon className="material-icons">phone</FontIcon>}>
          </Tab>
          <Tab value={2} containerElement={<Link to="contacts"/>} icon={<FontIcon className="material-icons">person</FontIcon>}>
          </Tab>
          <Tab value={3} containerElement={<Link to="settings"/>} icon={<FontIcon className="material-icons">settings</FontIcon>}>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
