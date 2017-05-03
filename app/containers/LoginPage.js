// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';

class LoginPage extends Component {
  render() {
    return (
      <p>This be the login page</p>
      <button onClick={logout}>Log me out!</button>
      <button onClick={login}>Log me In!</button>
    );
  }
}

function logout() {
  // really doesn't need to do anything since you are already on the login page
}

function login() {
  this.props.history.push('/Home');
  this.props.loginUser({"test@test.com", "Test123!"});
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
  return bindActionCreators({authenticated: loginUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
