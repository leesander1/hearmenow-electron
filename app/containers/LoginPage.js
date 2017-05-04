// @flow
import React, { Component } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'Redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated){
      this.context.router.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <p>This be the login page</p>
        <button onClick={() => this.props.loginUser({email: "", password: ""})}>Log me In!</button>
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
