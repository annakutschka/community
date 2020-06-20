import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  newUser: null,
  name: null,
  email: null,
  photoUrl: null,
  uid: null,
  accessToken: null,
  loggedIn: false,
  error: false,
  community: null,
  provider: null,
  moderator: false,
  errorMessage: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Facebook
    case actionTypes.LOG_IN_FACEBOOK_REQUEST: //For reseting the error field
      return {
        ...state.auth,
        error: false,
        errorMessage: null
      };
    case actionTypes.LOG_IN_FACEBOOK_SUCCESS:
      return {
        ...state.auth,
        ...action.payload,
        loggedIn: true,
        error: false
      };
    case actionTypes.LOG_IN_FACEBOOK_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: true,
        errorMessage: action.error
      };
    // Google
    case actionTypes.LOG_IN_GOOGLE_REQUEST: //For reseting the error field
      return {
        ...state.auth,
        error: false,
        errorMessage: null
      };
    case actionTypes.LOG_IN_GOOGLE_SUCCESS:
      return {
        ...state.auth,
        ...action.payload,
        loggedIn: true,
        error: false
      };
    case actionTypes.LOG_IN_GOOGLE_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: true,
        errorMessage: action.error
      };
    // Log out
    case actionTypes.LOG_OUT_SUCCESS:
      return {
        ...initialState
      };
    case actionTypes.LOG_OUT_ERROR:
      return {
        ...state,
        loggedOut: false,
        error: true,
        errorMessage: action.error
      };
    // Add community to user
    case actionTypes.ADD_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: action.payload
      };
    case actionTypes.ADD_COMMUNITY_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    // Create community in DB
    case actionTypes.CREATE_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: action.payload,
        moderator: true
      };
    case actionTypes.CREATE_COMMUNITY_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    // Check if community exists
    case actionTypes.FIND_COMMUNITY_SUCCESS:
      return {
        ...state
      };
    case actionTypes.FIND_COMMUNITY_ERROR:
      return {
        ...state,
        community: null,
        moderator: false
      };
    case actionTypes.LEAVE_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: null
      };
    case actionTypes.LEAVE_COMMUNITY_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
