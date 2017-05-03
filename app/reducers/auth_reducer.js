import {AUTH_USER, UNAUTH_USER} from '../actions/types';

const INITIAL_STATE = { error: '', message: '', authenticated: false }

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case AUTH_USER:
      return { error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { error: '', message: '', authenticated: false };
  }

  return state;
}
