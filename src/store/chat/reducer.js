import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  communityChatMessages: [],
  error: false,
  errorMessage: null
};

function immutablePush(arr, newEntry) {
  return [].concat(newEntry, arr);
}

function processMessages(data) {
  const processedOffers = [];
  if (data) {
    Object.entries(data).forEach(entry => {
      processedOffers.push(processMessage(entry));
    });
  }
  return processedOffers;
}

function processMessage(data) {
  let key = data[0];
  let value = data[1];
  return { databaseId: key, ...value };
}

export const communityChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        communityChatMessages: processMessages(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_COMMUNITY_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_SUCCESS:
      return {
        ...state,
        communityChatMessages: immutablePush(
          state.communityChatMessages,
          action.payload
        ),
        error: false,
        errorMessage: null
      };
    case actionTypes.CREATE_COMMUNITY_CHAT_MESSAGE_ERROR:
      return {
        ...initialState,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default communityChatReducer;
