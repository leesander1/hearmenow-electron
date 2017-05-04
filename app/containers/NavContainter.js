import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { loginUser, logoutUser } from '../actions';

class NavContainter extends Component {

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
    //isLoggedIn: state.AUTH_USER,
    authenticated: state.auth.authenticated,
    redirectUrl: state.redirectUrl
  }
}

let connection = window.navigator.onLine

export default connect(mapStateToProps)(NavContainter)
