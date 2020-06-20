import * as actionTypes from '../../constants/ActionTypes';

// ---------------------- OFFER ----------------------

//Load Posts of type offer of one User
export const loadPostsOfferUser = payload => ({
  type: actionTypes.LOAD_POSTS_OFFER_USER_REQUEST,
  payload
});

export const postsOfferUserLoadingError = error => ({
  type: actionTypes.LOAD_POSTS_OFFER_USER_ERROR,
  error
});

export const postsOfferUserLoaded = payload => ({
  type: actionTypes.LOAD_POSTS_OFFER_USER_SUCCESS,
  payload
});

// Load post of type offer
export const loadPostsOffer = payload => ({
  type: actionTypes.LOAD_POSTS_OFFER_REQUEST,
  payload
});

export const postsOfferLoaded = payload => ({
  type: actionTypes.LOAD_POSTS_OFFER_SUCCESS,
  payload
});

export const postsOfferLoadingError = error => ({
  type: actionTypes.LOAD_POSTS_OFFER_ERROR,
  error
});

// Create post of type offer
export const createPostOffer = payload => ({
  type: actionTypes.CREATE_POST_OFFER_REQUEST,
  payload
});

export const postOfferCreated = payload => ({
  type: actionTypes.CREATE_POST_OFFER_SUCCESS,
  payload
});

export const postOfferCreatingError = error => ({
  type: actionTypes.CREATE_POST_OFFER_ERROR,
  error
});

// Delete post of type offer
export const deletePostOffer = payload => ({
  type: actionTypes.DELETE_POST_OFFER_REQUEST,
  payload
});

export const postOfferDeleted = payload => ({
  type: actionTypes.DELETE_POST_OFFER_SUCCESS,
  payload
});

export const postOfferDeletingError = error => ({
  type: actionTypes.DELETE_POST_OFFER_ERROR,
  error
});

// Change post of type offer
export const changePostOffer = payload => ({
  type: actionTypes.CHANGE_POST_OFFER_REQUEST,
  payload
});

export const postOfferChanged = payload => ({
  type: actionTypes.CHANGE_POST_OFFER_SUCCESS,
  payload
});

export const postOfferChangingError = error => ({
  type: actionTypes.CHANGE_POST_OFFER_ERROR,
  error
});

// ---------------------- SEARCH ----------------------

// Load post of type search of one User
export const loadPostsSearchUser = payload => ({
  type: actionTypes.LOAD_POSTS_SEARCH_USER_REQUEST,
  payload
});

export const postsSearchUserLoaded = payload => ({
  type: actionTypes.LOAD_POSTS_SEARCH_USER_SUCCESS,
  payload
});

export const postsSearchUserLoadingError = error => ({
  type: actionTypes.LOAD_POSTS_SEARCH_ERROR,
  error
});

// Load post of type search
export const loadPostsSearch = payload => ({
  type: actionTypes.LOAD_POSTS_SEARCH_REQUEST,
  payload
});

export const postsSearchLoaded = payload => ({
  type: actionTypes.LOAD_POSTS_SEARCH_SUCCESS,
  payload
});

export const postsSearchLoadingError = error => ({
  type: actionTypes.LOAD_POSTS_SEARCH_ERROR,
  error
});

// Create post of type search
export const createPostSearch = payload => ({
  type: actionTypes.CREATE_POST_SEARCH_REQUEST,
  payload
});

export const postSearchCreated = payload => ({
  type: actionTypes.CREATE_POST_SEARCH_SUCCESS,
  payload
});

export const postSearchCreatingError = error => ({
  type: actionTypes.CREATE_POST_SEARCH_ERROR,
  error
});

// Delete post of type search
export const deletePostSearch = payload => ({
  type: actionTypes.DELETE_POST_SEARCH_REQUEST,
  payload
});

export const postSearchDeleted = payload => ({
  type: actionTypes.DELETE_POST_SEARCH_SUCCESS,
  payload
});

export const postSearchDeletingError = error => ({
  type: actionTypes.DELETE_POST_SEARCH_ERROR,
  error
});

// Change post of type search
export const changePostSearch = payload => ({
  type: actionTypes.CHANGE_POST_SEARCH_REQUEST,
  payload
});

export const postSearchChanged = payload => ({
  type: actionTypes.CHANGE_POST_SEARCH_SUCCESS,
  payload
});

export const postSearchChangingError = error => ({
  type: actionTypes.CHANGE_POST_SEARCH_ERROR,
  error
});
