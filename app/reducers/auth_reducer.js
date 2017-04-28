import {AUTH_USER, UNAUTH_USER} from '../actions/types';

const INITIAL_STATE = { error: '', content: '', authenticated: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, error: '', message: '', authenticated: false };
  }

  return state;
}
