import * as actionTypes from '../../constants/ActionTypes';

// Log in with Facebook
export const logInFacebook = () => ({
  type: actionTypes.LOG_IN_FACEBOOK_REQUEST
});

export const facebookLoggedIn = payload => ({
  type: actionTypes.LOG_IN_FACEBOOK_SUCCESS,
  payload
});

export const facebookLoggingInError = error => ({
  type: actionTypes.LOG_IN_FACEBOOK_ERROR,
  error
});

// Log in with Google
export const logInGoogle = () => ({
  type: actionTypes.LOG_IN_GOOGLE_REQUEST
});

export const googleLoggedIn = payload => ({
  type: actionTypes.LOG_IN_GOOGLE_SUCCESS,
  payload
});

export const googleLoggingInError = error => ({
  type: actionTypes.LOG_IN_GOOGLE_ERROR,
  error
});

// Log out
export const logOut = () => ({
  type: actionTypes.LOG_OUT_REQUEST
});

export const loggedOut = payload => ({
  type: actionTypes.LOG_OUT_SUCCESS,
  payload
});

export const loggingOutError = error => ({
  type: actionTypes.LOG_OUT_ERROR,
  error
});

// Add community
export const addCommunity = payload => ({
  type: actionTypes.ADD_COMMUNITY_REQUEST,
  payload
});

export const addedCommunity = payload => ({
  type: actionTypes.ADD_COMMUNITY_SUCCESS,
  payload
});

export const addingCommunityError = error => ({
  type: actionTypes.ADD_COMMUNITY_ERROR,
  error
});

// Create community
export const createCommunity = payload => ({
  type: actionTypes.CREATE_COMMUNITY_REQUEST,
  payload
});

export const createdCommunity = payload => ({
  type: actionTypes.CREATE_COMMUNITY_SUCCESS,
  payload
});

export const creatingCommunityError = error => ({
  type: actionTypes.CREATE_COMMUNITY_ERROR,
  error
});

// Check if community still exists
export const findCommunity = payload => ({
  type: actionTypes.FIND_COMMUNITY_REQUEST,
  payload
});

export const foundCommunity = payload => ({
  type: actionTypes.FIND_COMMUNITY_SUCCESS,
  payload
});

export const findingCommunityError = error => ({
  type: actionTypes.FIND_COMMUNITY_ERROR,
  error
});

// Leave community
export const leaveCommunity = payload => ({
  type: actionTypes.LEAVE_COMMUNITY_REQUEST,
  payload
});

export const leftCommunity = payload => ({
  type: actionTypes.LEAVE_COMMUNITY_SUCCESS,
  payload
});

export const leavingCommunityError = error => ({
  type: actionTypes.LEAVE_COMMUNITY_ERROR,
  error
});

// Delete user
export const deleteUser = payload => ({
  type: actionTypes.DELETE_USER_REQUEST,
  payload
});

export const userDeleted = payload => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  payload
});

export const userDeletingError = error => ({
  type: actionTypes.DELETE_USER_ERROR,
  error
});
