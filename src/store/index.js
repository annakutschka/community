// Main reducer and saga of app
// Combines all sub reducers and sagas within the app
// Add new reducers in the combineReducers
// Add new sagas in root saga

import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { fork } from 'redux-saga/effects';
import * as ActionTypes from '../constants/ActionTypes';
import { authReducer } from './authentication/reducer';
import { postReducer } from './posts/reducer';
import { announcementReducer } from './announcements/reducer';
import { loadingReducer } from './loading/reducer';
import { communityReducer } from './communities/reducer';
import { communityChatReducer } from './chat/reducer';
import { userReducer } from './user/reducer';
import watchAuthentication from './authentication/sagas';
import watchAnnouncements from './announcements/sagas';
import watchCommunities from './communities/sagas';
import watchPosts from './posts/sagas';
import watchChatMessages from './chat/sagas';
import watchUsers from './user/sagas';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['communities', 'loadingState', 'users']
};

// Root Reducer
const appReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  announcements: announcementReducer,
  communities: communityReducer,
  loadingState: loadingReducer,
  posts: postReducer,
  messages: communityChatReducer,
  users: userReducer
});

const rootReducer = (state, action) => {
  const { type } = action;
  let clearedState = {};
  if (
    type === ActionTypes.LOG_OUT_SUCCESS ||
    type === ActionTypes.DELETE_USER_SUCCESS
  ) {
    AsyncStorage.clear();
    return appReducer(clearedState, action);
  } else if (type === ActionTypes.LEAVE_COMMUNITY_SUCCESS) {
    AsyncStorage.clear();
    clearedState.auth = state.auth;
    clearedState.communities = state.communities;
    return appReducer(clearedState, action);
  }
  return appReducer(state, action);
};

// Root Saga
function* rootSaga() {
  yield fork(watchAuthentication);
  yield fork(watchAnnouncements);
  yield fork(watchCommunities);
  yield fork(watchPosts);
  yield fork(watchChatMessages);
  yield fork(watchUsers);
}

// Store
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) // Add logger if debug
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store, null, () => {
  store.getState();
});
