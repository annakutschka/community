import * as actionTypes from '../../constants/ActionTypes';

// ---------------------- USERS ----------------------
//Load all Users in Community
export const loadAllUser = payload => ({
  type: actionTypes.LOAD_ALL_USER_REQUEST,
  payload
});

export const allUserLoadingError = error => ({
  type: actionTypes.LOAD_ALL_USER_ERROR,
  error
});

export const allUserLoaded = payload => ({
  type: actionTypes.LOAD_ALL_USER_SUCCESS,
  payload
});

//set UserId for current looked at user profile
export const setUserId = payload => ({
  type: actionTypes.SET_CURRENT_USER_ID,
  payload
});

//save moderatorIds
export const getModeratorId = payload => ({
  type: actionTypes.SET_MODERATOR_IDS_REQUEST,
  payload
});

export const allModeratorIdLoaded = payload => ({
  type: actionTypes.SET_MODERATOR_IDS_SUCCESS,
  payload
});

export const allModeratorIdLoadingError = error => ({
  type: actionTypes.SET_MODERATOR_IDS_ERROR,
  error
});
