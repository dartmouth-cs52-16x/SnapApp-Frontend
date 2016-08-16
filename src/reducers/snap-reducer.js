import { ActionTypes } from '../actions';

const SnapsReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SNAPS:
      return { all: action.payload, post: state.post };
    case ActionTypes.FETCH_SNAP:
      return { all: state.all, post: action.payload };
    default:
      return state;
  }
};

export default SnapsReducer;
