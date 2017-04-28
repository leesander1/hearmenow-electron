// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
