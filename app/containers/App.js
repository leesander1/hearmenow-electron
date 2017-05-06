// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loginUser, logoutUser } from '../actions';
import { browserHistory } from 'react-router';
import LoginPage from './LoginPage';

injectTapEventPlugin();

class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //isLoggedIn: state.AUTH_USER,
    authenticated: state.auth.authenticated,
    redirectUrl: state.redirectUrl
  }
}

let connection = window.navigator.onLine

export default connect(mapStateToProps)(App)
