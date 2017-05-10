import { INCOMING_CALL } from '../actions/types';

const INITIAL_STATE = { connection: null }

export default function(state = INITIAL_STATE, action) {
  if (action.type == INCOMING_CALL) {
    return { connection: action.payload };
  }

  return state;
}
