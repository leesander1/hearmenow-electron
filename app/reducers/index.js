// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import incomingCallReducer from './incomingCall_reducer';

const rootReducer = combineReducers({
  routing: routing,
  incomingCallConnection: incomingCallReducer
});

export default rootReducer;
