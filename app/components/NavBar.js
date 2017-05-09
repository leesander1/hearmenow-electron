import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavBar.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { active: 0 };
    this.handleAcceptedCall = this.handleAcceptedCall.bind(this);
  }

  async componentDidMount() {
    const request = await fetch('https://serene-island-28717.herokuapp.com/api/generateToken', {
      method: 'POST'
    });

    const twilioToken = await request.json();

    Twilio.Device.setup(twilioToken.token);

    Twilio.Device.ready(() => {
      // need to do something here
    });
  }

  handleAcceptedCall() {
    this.router.push('/dashboard/dialer');
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

Twilio.Device.incoming((connection) => {
  // send a system notification
  nc.notify({
    title: 'Incoming Call from ' + connection.parameters.From,
    message: 'Would you like to:',
    closeLabel: 'Decline',
    actions: 'Accept',
    wait: true
  }, function(err, response, metadata) {
    if(response == 'activate'){
      connection.accept();
    }else if (response == 'closed') {
      connection.ignore();
    }
  });
  // call back for when a call is accepted
  connection.accept(() => {
    this.handleAcceptedCall();
  });
});
