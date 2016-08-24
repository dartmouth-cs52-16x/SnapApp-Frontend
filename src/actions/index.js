import axios from 'axios';
import { browserHistory } from 'react-router';

const BASE_URL = 'http://localhost:9090/api';
// const BASE_URL = 'http://snapapp-backend.herokuapp.com/api';

export const ActionTypes = {
  FETCH_SNAPS: 'FETCH_SNAPS',
  FETCH_SNAP: 'FETCH_SNAP',
  DELETE_SNAP: 'DELETE_SNAP',
  CREATE_SNAP: 'CREATE_SNAP',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  GET_USER: 'GET_USER',
  FB_AUTH: 'FB_AUTH',
};


export function getUserObject() {
  console.log('getting user');
  console.log(localStorage.getItem('token'));
  return (dispatch) => {
    axios.get(`${BASE_URL}/profile/`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: ActionTypes.GET_USER,
        payload: response.data,
      });
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createSnap(fields) {
  console.log(fields);
  return (dispatch) => {
    axios.post(`${BASE_URL}/snaps/`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: ActionTypes.CREATE_SNAP,
        payload: null,
      });
      browserHistory.push('/snaps');
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getSnaps(email) {
  return (dispatch) => {
    axios.get(`${BASE_URL}/snaps`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('GET SNAPS DATA', response.data);
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
    axios.get(`${BASE_URL}/snaps/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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
    axios.delete(`${BASE_URL}/snaps/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: ActionTypes.DELETE_SNAP,
        payload: null,
      });
      browserHistory.push('/snaps');
    }).catch((error) => {
      console.log('Error deleting snap by ID!!!');
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
      type: ActionTypes.DEAUTH_USER,
    });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${BASE_URL}/signin/`, { email, password }).then(response => {
      console.log(response);
      console.log('sign in called');
      console.log(email);
      dispatch({
        type: ActionTypes.AUTH_USER,
        payload: email,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/snaps');
    })
    .catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, password, username }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${BASE_URL}/signup/`, { email, password, username }).then(response => {
      console.log('sign up called');
      console.log(response);

      dispatch({
        type: ActionTypes.AUTH_USER,
        payload: email,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/snaps');
    })
    .catch((error) => {
      dispatch(authError('Sign Up Failed', error.response.data));
    });
  };
}

export function fbAuth(accessToken) {
  console.log('authenticating with facebook...');
  console.log(`ACCESS TOKEN: ${accessToken}`);
  return (dispatch) => {
    console.log('sending token to facebook...');
    axios.get(`https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=${accessToken}`)
    .then(response => {
      console.log(response);


      const facebookUserID = response.data.id;
      const facebookUserName = response.data.name;
      const facebookUserPicture = response.data.picture.data.url;

      console.log(`facebookUserID: ${facebookUserID}`);
      console.log(`facebookUserName: ${facebookUserName}`);
      console.log(`facebookUserPicture: ${facebookUserPicture}`);

      axios.post(`${BASE_URL}/auth/facebook`, { facebookUserID, facebookUserName, facebookUserPicture })
        .then(response2 => {
          console.log(`fb auth called for user id: ${facebookUserID}`);
          console.log(response2);

          dispatch({
            type: ActionTypes.FB_AUTH,
            payload: facebookUserID,
          });
          localStorage.setItem('token', response2.data.token);
          console.log(`token set as: ${response2.data.token}`);
          browserHistory.push('/profile');
        });
    })
  .catch((error) => {
    dispatch(authError(`Sign In Failed: ${error.response.data}`));
  });
  };
}
