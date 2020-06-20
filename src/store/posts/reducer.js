import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  postsOffer: [],
  postsSearch: [],
  active: null,
  error: false,
  errorMessage: null,
  postsSearchUser: [],
  postsOfferUser: []
};

function immutablePush(arr, newEntry) {
  return [].concat(newEntry, arr);
}

function immutableRemove(arr, key) {
  if (arr.length !== 0) {
    return arr.filter(entry => entry.id !== key);
  } else {
    return arr;
  }
}

function immutableChange(arr, data) {
  return arr.map(entry => {
    if (entry.id === data.key) return { id: data.key, ...data.value };
    else return entry;
  });
}

function processPosts(data) {
  const processedOffers = [];
  if (data) {
    Object.entries(data).forEach(entry => {
      processedOffers.push(processPost(entry));
    });
  }
  return processedOffers;
}

function processPost(data) {
  let key = data[0];
  let value = data[1];
  return { id: key, ...value };
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // Offer
    case actionTypes.LOAD_POSTS_OFFER_SUCCESS:
      return {
        ...state,
        postsOffer: processPosts(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_POSTS_OFFER_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.LOAD_POSTS_OFFER_USER_SUCCESS:
      return {
        ...state,
        postsOfferUser: processPosts(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_POSTS_OFFER_USER_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CREATE_POST_OFFER_SUCCESS:
      return {
        ...state,
        postsOffer: immutablePush(state.postsOffer, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CREATE_POST_OFFER_ERROR:
      return {
        ...initialState,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.DELETE_POST_OFFER_SUCCESS:
      return {
        ...state.postsOffer,
        postsOffer: immutableRemove(state.postsOffer, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.DELETE_POST_OFFER_ERROR:
      return {
        ...state.postsOffer,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CHANGE_POST_OFFER_SUCCESS:
      return {
        ...state.postsOffer,
        postsOffer: immutableChange(state.postsOffer, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CHANGE_POST_OFFER_ERROR:
      return {
        ...state.postsOffer,
        error: true,
        errorMessage: action.error
      };
    // Search
    case actionTypes.LOAD_POSTS_SEARCH_SUCCESS:
      return {
        ...state,
        postsSearch: processPosts(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_POSTS_SEARCH_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.LOAD_POSTS_SEARCH_USER_SUCCESS:
      return {
        ...state,
        postsSearchUser: processPosts(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_POSTS_SEARCH_USER_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CREATE_POST_SEARCH_SUCCESS:
      return {
        ...state,
        postsSearch: immutablePush(state.postsSearch, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CREATE_POST_SEARCH_ERROR:
      return {
        ...initialState,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.DELETE_POST_SEARCH_SUCCESS:
      return {
        ...state.postsSearch,
        postsSearch: immutableRemove(state.postsSearch, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.DELETE_POST_SEARCH_ERROR:
      return {
        ...state.postsSearch,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CHANGE_POST_SEARCH_SUCCESS:
      return {
        ...state.postsSearch,
        postsSearch: immutableChange(state.postsSearch, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CHANGE_POST_SEARCH_ERROR:
      return {
        ...state.postsSearch,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default postReducer;
