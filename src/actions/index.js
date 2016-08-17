import axios from 'axios';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:9090/api';
// const BASE_URL = 'http://snapapp-backend.herokuapp.com/api';

export const ActionTypes = {
  FETCH_SNAPS: 'FETCH_SNAPS',
  FETCH_SNAP: 'FETCH_SNAP',
  DELETE_SNAP: 'DELETE_SNAP',
  CREATE_SNAP: 'CREATE_SNAP',
};

export function createSnap(fields) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/snaps/`, fields).then((response) => {
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
    axios.get(`${BASE_URL}/snaps/`).then((response) => {
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
    axios.get(`${BASE_URL}/snaps/${id}`).then((response) => {
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
    axios.delete(`${BASE_URL}/snaps/${id}`).then((response) => {
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
