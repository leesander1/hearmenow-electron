// @Flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { loginUser } from '../actions';
import { connect, dispatch, navigateTo } from 'react-redux';
import { browserHistory } from 'react-router';

class AuthorizedContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props){
    super(props);
    if(!this.props.authenticated){
    }
  }

  componentDidMount() {
    const { dispatch, currentURL } = this.props

    if (!this.props.authenticated) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      //dispatch(navigateTo(currentURL))
      console.log('Yo yo, not logged in');
      browserHistory.push('/login');
    }
  }

  render() {
    if (this.props.authenticated) {
      return this.props.children
    } else {
      return this.props.children
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
