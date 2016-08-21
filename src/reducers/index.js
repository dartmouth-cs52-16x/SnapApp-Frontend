import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import SnapReducer from './snap-reducer';

const allReducers = combineReducers({
  auth: AuthReducer,
  snaps: SnapReducer,
});

export default allReducers;
