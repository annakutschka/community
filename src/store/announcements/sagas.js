import Announcement from '../../services/firebase/announcement';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../../constants/ActionTypes';
import {
  announcementsLoaded,
  announcementsLoadingError,
  announcementCreatingError,
  announcementDeletingError
} from './actions';

function* requestLoadAnnouncements(action) {
  try {
    const data = yield call(Announcement.loadAnnouncements, action.payload);
    yield put(announcementsLoaded(data));
  } catch (error) {
    yield put(announcementsLoadingError(error));
  }
}

function* requestCreateAnnouncements(action) {
  try {
    yield call(Announcement.createAnnouncement, action.payload);
  } catch (error) {
    yield put(announcementCreatingError(error));
  }
}

function* requestDeleteAnnouncements(action) {
  try {
    const data = yield call(Announcement.deleteAnnouncement, action.payload);
  } catch (error) {
    yield put(announcementDeletingError(error));
  }
}

function* watchAnnouncements() {
  yield takeLatest(
    ActionTypes.LOAD_ANNOUNCEMENTS_REQUEST,
    requestLoadAnnouncements
  );
  yield takeLatest(
    ActionTypes.CREATE_ANNOUNCEMENT_REQUEST,
    requestCreateAnnouncements
  );
  yield takeLatest(
    ActionTypes.DELETE_ANNOUNCEMENT_REQUEST,
    requestDeleteAnnouncements
  );
}

export default watchAnnouncements;
