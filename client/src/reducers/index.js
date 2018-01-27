import { combineReducers } from 'redux';
import authReducer from './authReducer';
import landingReducer from './landingReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  auth: authReducer,
  landing: landingReducer,
  event: eventReducer
});
