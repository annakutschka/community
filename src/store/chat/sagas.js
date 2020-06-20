import Chat from '../../services/firebase/chat';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../../constants/ActionTypes';
import {
  chatMessagesLoaded,
  chatMessagesLoadingError,
  chatMessageCreatingError
} from './actions';

function* requestLoadCommunityChatMessages(action) {
  try {
    const data = yield call(Chat.loadCommunityChatMessages, action.payload);
    yield put(chatMessagesLoaded(data));
  } catch (error) {
    yield put(chatMessagesLoadingError(error));
  }
}

function* requestCreateCommunityChatMessage(action) {
  try {
    yield call(Chat.createCommunityChatMessage, action.payload);
  } catch (error) {
    yield put(chatMessageCreatingError(error));
  }
}

function* watchChatMessages() {
  yield takeLatest(
    ActionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_REQUEST,
    requestLoadCommunityChatMessages
  );
  yield takeLatest(
    ActionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_REQUEST,
    requestCreateCommunityChatMessage
  );
}

export default watchChatMessages;
