// @Flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { loginUser } from '../actions';
import { connect, dispatch, navigateTo } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'Redux';

class AuthorizedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps){
    if (!nextProps.authenticated){
      this.props.router.push('/login');
    }
  }

  render() {
    if (this.props.authenticated) {
      return this.props.children;
    } else{
      return this.props.children;
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    //isLoggedIn: state.loggedIn,
    authenticated: state.auth.authenticated,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(AuthorizedContainer)
