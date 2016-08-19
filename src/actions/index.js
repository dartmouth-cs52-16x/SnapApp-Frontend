import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  FETCH_SNAPS: 'FETCH_SNAPS',
  FETCH_SNAP: 'FETCH_SNAP',
  DELETE_SNAP: 'DELETE_SNAP',
  CREATE_SNAP: 'CREATE_SNAP',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function createSnap(fields) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/snaps/`, fields).then((response) => {
      dispatch({
        type: ActionTypes.CREATE_SNAP,
        payload: null,
      });
      browserHistory.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getSnaps() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/snaps/`).then((response) => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_SNAPS,
        payload: response.data,
      });
    }).catch((error) => {
      console.log('Error getting all snaps!');
    });
  };
}

export function getSnap(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/snaps/${id}`).then((response) => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_SNAP,
        payload: response.data,
      });
    }).catch((error) => {
      console.log('Error getting snap by ID!');
    });
  };
}

export function deleteSnap(id) {
  console.log('deleting snap');
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/snaps/${id}`).then((response) => {
      dispatch({
        type: ActionTypes.DELETE_SNAP,
        payload: null,
      });
      browserHistory.push('/');
    }).catch((error) => {
      console.log('Error deleting snap by ID!!!');
    });
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log('Login succeded');
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
      console.log('Login failed. Please try again.');
    });
  };
}

export function signupUser({ email, username, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, username, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      console.log('Login succeded');
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      console.log('Sign up failed. Please try again.');
    });
  };
}
// deletes token from localstorage
// and deauths

export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
