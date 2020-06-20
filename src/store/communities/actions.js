import * as actionTypes from '../../constants/ActionTypes';

// Load all available communities for dropdown
export const loadCommunities = () => ({
  type: actionTypes.LOAD_COMMUNITIES_REQUEST
});

export const communitiesLoaded = payload => ({
  type: actionTypes.LOAD_COMMUNITIES_SUCCESS,
  payload
});

export const communityLoadingError = error => ({
  type: actionTypes.LOAD_COMMUNITIES_ERROR,
  error
});

// Set infos of current community
export const setCommunityInformation = payload => ({
  type: actionTypes.SET_COMMUNITY_INFORMATION,
  payload
});
