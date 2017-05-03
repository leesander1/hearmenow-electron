import cookie from 'react-cookie';
import {AUTH_USER, UNAUTH_USER} from './types';
import { connect, dispatch, navigateTo } from 'react-redux';
import { browserHistory } from 'react-router';
// NEED COMPONENT FOR ERROR HANDLING

export function loginUser({email, password}) {
  return function(dispatch) {
    dispatch({type: AUTH_USER});
    window.location.href = '/home';
  }
}

export function logoutUser() {
  return function(dispatch) {
    dispatch({type: UNAUTH_USER, payload: {authenticated: false}});
    //window.location.href = '/login';
    browserHistory.replace('login');
  }
}
