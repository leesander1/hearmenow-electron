import cookie from 'react-cookie';
import {AUTH_USER, UNAUTH_USER} from './types';
import { connect, dispatch, navigateTo } from 'react-redux';
import { browserHistory } from 'react-router';
// NEED COMPONENT FOR ERROR HANDLING

export function loginUser(payload) {
  return {
    type: AUTH_USER,
    payload: payload
  }
}

export function logoutUser() {
  return {
    type: UNAUTH_USER,
    payload: {}
  }
}