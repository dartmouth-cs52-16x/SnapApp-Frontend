import { ActionTypes } from '../actions';

const AuthReducer = (state = { authenticated: false, email: '' }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true, email: action.payload };
    case ActionTypes.FB_AUTH:
      return { authenticated: true, facebookUserID: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false, email: state.email };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false, email: state.email };
    default:
      return state;
  }
};

export default AuthReducer;
