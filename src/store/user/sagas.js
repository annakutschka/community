import { call, put, takeLatest } from 'redux-saga/effects';
import User from '../../services/firebase/user';
import * as ActionTypes from '../../constants/ActionTypes';
import {
  allUserLoadingError,
  allUserLoaded,
  getModeratorIdError
} from './actions';

function processModerator(data) {
  return { data };
}

function* requestLoadAllUsers(action) {
  try {
    const data = yield call(User.getAllUsers, action.payload);
    yield put(allUserLoaded(data));
  } catch (error) {
    yield put(allUserLoadingError(error));
  }
}

function* requestAllModeratorIds(action) {
  try {
    const data = yield call(User.getAllModerators, action.payload);
    console.log(data);
    const moderator = processModerator(data);
    yield put(getModeratorId(moderator));
  } catch (error) {
    yield put(getModeratorIdError(error));
  }
}

function* watchUsers() {
  yield takeLatest(ActionTypes.LOAD_ALL_USER_REQUEST, requestLoadAllUsers);
  yield takeLatest(
    ActionTypes.SET_MODERATOR_IDS_REQUEST,
    requestAllModeratorIds
  );
}

export default watchUsers;
