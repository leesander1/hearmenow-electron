// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import incomingCallReducer from './incomingCall_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  routing: routing,
  incomingCallConnection: incomingCallReducer,
  auth: authReducer
});

export default rootReducer;
