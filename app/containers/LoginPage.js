// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';
import { TextField, RaisedButton } from 'material-ui';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated){
      this.props.router.replace('/dashboard/home');
    }
  }

  handleChange(event) {
    let newState = {};

    console.log(event);
  }

  handleSubmit(event) {
    console.log(this.email);
    event.preventDefault();
    fetch('https://serene-island-28717.herokuapp.com/login', {
      method: 'POST',
      body: {}
    }).then(response => {
      if (response.status == 200) {
        // action creator
        console.log('response', response);
      }
      else {
        // action creator
        console.log('response', response);
      }
    });
  }

  render() {
    return (
      <div>
      <p>This be the login page</p>
      <form id="LoginForm" onSubmit={this.handleSubmit}>
       <TextField hintText="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
       <TextField hintText="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
       <RaisedButton label="Login" primary={true} value="Submit" type="submit" />
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

// anything returned from this function will end up as props for this container
function mapDispatchToProps(dispatch) {
  // the first param is an obj where the key will end up being a prop for this container
  // the second param is the action that will be created
  return bindActionCreators({loginUser: loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
