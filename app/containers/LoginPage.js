// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated){
      this.props.router.replace('/dashboard/home');
    }
  }

  clickHandler() {
    this.props.loginUser({email: "", password: ""});
  }

  render() {
    return (
      <div>
        <p>This be the login page</p>
        <button onClick={this.clickHandler}>Log me In!</button>
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
