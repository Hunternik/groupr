import { combineReducers } from 'redux';
import authReducer from './authReducer';
import landingReducer from './landingReducer';

export default combineReducers({
  auth: authReducer,
  landing: landingReducer
});
