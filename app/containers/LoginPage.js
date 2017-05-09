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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.authenticated){
      this.props.router.replace('/dashboard/home');
    }
  }

  handleSubmit() {
    // need to call action creator here
  }

  render() {
    return (
      <div>
      <p>This be the login page</p>
      <form id="LoginForm" action='https://serene-island-28717.herokuapp.com/login'
      method="POST" onSubmit={this.handleSubmit}>
       <TextField hintText="Email" value={this.email}/>
       <TextField hintText="Password" value={this.password}/>
       <RaisedButton label="Login" primary={true} type="submit" value="submit"/>
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
