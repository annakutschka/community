import { call, put, takeLatest } from 'redux-saga/effects';
import Post from '../../services/firebase/post';
import * as ActionTypes from '../../constants/ActionTypes';
import {
  postOfferCreatingError,
  postOfferDeletingError,
  postsOfferLoaded,
  postsOfferLoadingError,
  postsOfferUserLoaded,
  postsOfferUserLoadingError,
  postSearchCreatingError,
  postSearchDeletingError,
  postsSearchLoaded,
  postsSearchLoadingError,
  postsSearchUserLoaded,
  postsSearchUserLoadingError
} from './actions';

// Offer
function* requestLoadPostsOffer(action) {
  try {
    const data = yield call(Post.loadPostsOffer, action.payload);
    yield put(postsOfferLoaded(data));
  } catch (error) {
    yield put(postsOfferLoadingError(error));
  }
}

function* requestLoadPostsOfferUser(action) {
  try {
    const data = yield call(Post.loadPostsOfferUser, action.payload);
    yield put(postsOfferUserLoaded(data));
  } catch (error) {
    yield put(postsOfferUserLoadingError(error));
  }
}

function* requestCreatePostOffer(action) {
  try {
    yield call(Post.createPostOffer, action.payload);
  } catch (error) {
    yield put(postOfferCreatingError(error));
  }
}

function* requestDeletePostOffer(action) {
  try {
    yield call(Post.deletePostOffer, action.payload);
  } catch (error) {
    yield put(postOfferDeletingError(error));
  }
}

// Search
function* requestLoadPostsSearch(action) {
  try {
    const data = yield call(Post.loadPostsSearch, action.payload);
    yield put(postsSearchLoaded(data));
  } catch (error) {
    yield put(postsSearchLoadingError(error));
  }
}

function* requestLoadPostsSearchUser(action) {
  try {
    const data = yield call(Post.loadPostsSearchUser, action.payload);
    yield put(postsSearchUserLoaded(data));
  } catch (error) {
    yield put(postsSearchUserLoadingError(error));
  }
}

function* requestCreatePostSearch(action) {
  try {
    yield call(Post.createPostSearch, action.payload);
  } catch (error) {
    yield put(postSearchCreatingError(error));
  }
}

function* requestDeletePostSearch(action) {
  try {
    yield call(Post.deletePostSearch, action.payload);
  } catch (error) {
    yield put(postSearchDeletingError(error));
  }
}

function* watchPosts() {
  // Offer
  yield takeLatest(ActionTypes.LOAD_POSTS_OFFER_REQUEST, requestLoadPostsOffer);
  yield takeLatest(
    ActionTypes.CREATE_POST_OFFER_REQUEST,
    requestCreatePostOffer
  );
  yield takeLatest(
    ActionTypes.DELETE_POST_OFFER_REQUEST,
    requestDeletePostOffer
  );
  yield takeLatest(
    ActionTypes.LOAD_POSTS_OFFER_USER_REQUEST,
    requestLoadPostsOfferUser
  );

  // Search
  yield takeLatest(
    ActionTypes.LOAD_POSTS_SEARCH_REQUEST,
    requestLoadPostsSearch
  );
  yield takeLatest(
    ActionTypes.CREATE_POST_SEARCH_REQUEST,
    requestCreatePostSearch
  );
  yield takeLatest(
    ActionTypes.DELETE_POST_SEARCH_REQUEST,
    requestDeletePostSearch
  );
  yield takeLatest(
    ActionTypes.LOAD_POSTS_SEARCH_USER_REQUEST,
    requestLoadPostsSearchUser
  );
}

export default watchPosts;
