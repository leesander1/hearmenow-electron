import cookie from 'react-cookie';
import {AUTH_USER, UNAUTH_USER} from './types';

// NEED COMPONENT FOR ERROR HANDLING

export function loginUser({email, password}) {
  return function(dispath) {
    dispath({type: AUTH_USER});
    window.location.href = '/home';
  }
}

export function logoutUser() {
  return function(dispath) {
    dispath({type: UNAUTH_USER});
    window.location.href = '/login';
  }
}
