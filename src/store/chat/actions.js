import * as actionTypes from '../../constants/ActionTypes';

// Load chat messages
export const loadCommunityChatMessages = () => ({
  type: actionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_REQUEST
});

export const communityChatMessagesLoaded = payload => ({
  type: actionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_SUCCESS,
  payload
});

export const communityChatMessagesLoadingError = error => ({
  type: actionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_ERROR,
  error
});

// Create chat messages
export const createCommunityChatMessage = payload => ({
  type: actionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_REQUEST,
  payload
});

export const communityChatMessageCreated = payload => ({
  type: actionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_SUCCESS,
  payload
});

export const communityChatMessageCreatingError = error => ({
  type: actionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_ERROR,
  error
});

// TODO: add create chat
