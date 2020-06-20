import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  communities: [],
  currentCommunity: {},
  error: false,
  errorMessage: null
};

function processForDropdown(data) {
  let processedCommunities = [];
  Object.entries(data).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    processedCommunities.push({ k: key, value: value.name });
  });
  return processedCommunities;
}

export const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMUNITIES_SUCCESS:
      return {
        ...state,
        communities: processForDropdown(action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_COMMUNITIES_ERROR:
      return {
        ...state.communities,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.SET_COMMUNITY_INFORMATION:
      return {
        ...state,
        currentCommunity: { ...action.payload }
      };
    default:
      return {
        ...state
      };
  }
};
