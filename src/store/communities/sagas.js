import { call, put } from 'redux-saga/effects';
import Community from '../../services/firebase/community';
import * as ActionTypes from '../../constants/ActionTypes';
import { takeLatest } from 'redux-saga/effects';
import { communitiesLoaded, communityLoadingError } from './actions';

function* loadCommunities() {
  try {
    const data = yield call(Community.loadCommunities);
    yield put(communitiesLoaded(data));
  } catch (error) {
    yield put(communityLoadingError(error));
  }
}

function* watchCommunities() {
  yield takeLatest(ActionTypes.LOAD_COMMUNITIES_REQUEST, loadCommunities);
}

export default watchCommunities;
