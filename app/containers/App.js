// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { loginUser } from '../actions';

injectTapEventPlugin();

class App extends Component {
  props: {
    children: HTMLElement
  };

  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      dispatch(navigateTo(redirectUrl))
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }
  render() {
    return (
      <div className="">
        <MuiThemeProvider>
          <div>
            <NavBar />
            <div className="content">
              {this.props.children}
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.AUTH_USER,
    redirectUrl: state.redirectUrl
  }
}

let connection = window.navigator.onLine

export default connect(mapStateToProps)(App)
