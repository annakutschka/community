import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  active: null,
  error: false,
  errorMessage: null,
  allUsers: []
};

function processUsers(data) {
  const processedUsers = [];
  if (data) {
    Object.entries(data).forEach(entry => {
      processedUsers.push(processUser(entry));
    });
  }
  return processedUsers;
}

function processUser(data) {
  let key = data[0];
  let value = data[1];
  return { uid: key, photoUrl: value.photoUrl, name: value.name };
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //allUsers
    case actionTypes.LOAD_ALL_USER_SUCCESS:
      return {
        ...state,
        allUsers: processUsers(action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_ALL_USER_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.SET_CURRENT_USER_ID:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
