import { combineReducers } from 'redux';

import SnapReducer from './snap-reducer';
import AuthReducer from './auth-reducer';

const allReducers = combineReducers({
  snaps: SnapReducer,
  auth: AuthReducer,
});

export default allReducers;
