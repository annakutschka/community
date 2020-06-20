import { call, put } from 'redux-saga/effects';
import Authentication from '../../services/firebase/authentication';
import User from '../../services/firebase/user';
import Community from '../../services/firebase/community';
import * as ActionTypes from '../../constants/ActionTypes';
import { takeLatest } from 'redux-saga/effects';
import {
  facebookLoggedIn,
  facebookLoggingInError,
  googleLoggedIn,
  googleLoggingInError,
  loggedOut,
  loggingOutError,
  addedCommunity,
  addingCommunityError,
  createdCommunity,
  creatingCommunityError,
  foundCommunity,
  findingCommunityError,
  leftCommunity,
  leavingCommunityError,
  userDeleted,
  userDeletingError
} from './actions';

function* getFacebookUserData(action) {
  try {
    const data = yield call(Authentication.loginWithFacebook);
    const user = yield call(User.updateUser, data); // User gets create or updated
    if (user.community) {
      const communityExists = yield call(
        Community.checkIfCommunityExists,
        user.community
      );
      if (!communityExists) {
        user.community = null;
      }
    }
    yield put(facebookLoggedIn(user));
  } catch (error) {
    yield put(facebookLoggingInError(error));
  }
}

function* getGoogleUserData() {
  try {
    const data = yield call(Authentication.loginWithGoogle);
    const user = yield call(User.updateUser, data); // User gets create or updated
    if (user.community) {
      const communityExists = yield call(
        Community.checkIfCommunityExists,
        user.community
      );
      if (!communityExists) {
        user.community = null;
      }
    }
    yield put(googleLoggedIn(user));
  } catch (error) {
    yield put(googleLoggingInError(error));
  }
}

function* requestLogOut() {
  try {
    const data = yield call(Authentication.logout);
    yield put(loggedOut(data));
  } catch (error) {
    yield put(loggingOutError(error));
  }
}

function* requestAddCommunity(action) {
  try {
    const communityId = yield call(Community.addCommunity, action.payload);
    yield put(addedCommunity(communityId));
  } catch (error) {
    yield put(addingCommunityError(error));
  }
}

function* requestCreateCommunity(action) {
  try {
    const userId = action.payload.moderatorId;
    const communityId = yield call(Community.createCommunity, action.payload);
    yield call(Community.addCommunity, { userId, communityId });
    yield put(createdCommunity(communityId));
  } catch (error) {
    yield put(creatingCommunityError(error));
  }
}

function* requestCheckIfCommunityExists(action) {
  try {
    const existing = yield call(
      Community.checkIfCommunityExists,
      action.payload
    );
    yield put(foundCommunity(existing));
  } catch (error) {
    yield put(findingCommunityError(error));
  }
}

function* requestCommunityLeave(action) {
  try {
    yield call(Community.leaveCommunity, action.payload);
    yield call(Authentication.deleteAllUserContent, action.payload);
    yield put(leftCommunity());
  } catch (error) {
    yield put(leavingCommunityError(error));
  }
}

function* requestDeleteUser(action) {
  try {
    yield call(Authentication.deleteUser, action.payload);
    yield put(userDeleted());
  } catch (error) {
    yield put(userDeletingError(error));
  }
}

function* watchAuthentication() {
  yield takeLatest(ActionTypes.LOG_IN_FACEBOOK_REQUEST, getFacebookUserData);
  yield takeLatest(ActionTypes.LOG_IN_GOOGLE_REQUEST, getGoogleUserData);
  yield takeLatest(ActionTypes.LOG_OUT_REQUEST, requestLogOut);
  yield takeLatest(ActionTypes.ADD_COMMUNITY_REQUEST, requestAddCommunity);
  yield takeLatest(
    ActionTypes.CREATE_COMMUNITY_REQUEST,
    requestCreateCommunity
  );
  yield takeLatest(
    ActionTypes.FIND_COMMUNITY_REQUEST,
    requestCheckIfCommunityExists
  );
  yield takeLatest(ActionTypes.LEAVE_COMMUNITY_REQUEST, requestCommunityLeave);
  yield takeLatest(ActionTypes.DELETE_USER_REQUEST, requestDeleteUser);
}

export default watchAuthentication;
