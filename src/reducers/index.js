import { combineReducers } from 'redux';

import SnapReducer from './snap-reducer';

const allReducers = combineReducers({
  snaps: SnapReducer,
});

export default allReducers;
