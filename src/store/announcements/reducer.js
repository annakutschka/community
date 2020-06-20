import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  announcements: [],
  active: null,
  error: false,
  errorMessage: null
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

function processAnnouncements(data) {
  const processedAnnouncements = [];
  if (data) {
    Object.entries(data).forEach(entry => {
      processedAnnouncements.push(processAnnouncement(entry));
    });
  }
  return processedAnnouncements;
}

function processAnnouncement(data) {
  let key = data[0];
  let value = data[1];
  return { id: key, ...value };
}

export const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        announcements: processAnnouncements(action.payload).reverse(),
        error: false,
        errorMessage: null
      };
    case actionTypes.LOAD_ANNOUNCEMENTS_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CREATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        announcements: immutablePush(state.announcements, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CREATE_ANNOUNCEMENT_ERROR:
      return {
        ...initialState,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.DELETE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state.announcements,
        announcements: immutableRemove(state.announcements, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.DELETE_ANNOUNCEMENT_ERROR:
      return {
        ...state.announcements,
        error: true,
        errorMessage: action.error
      };
    case actionTypes.CHANGE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state.announcements,
        announcements: immutableChange(state.announcements, action.payload),
        error: false,
        errorMessage: null
      };
    case actionTypes.CHANGE_ANNOUNCEMENT_ERROR:
      return {
        ...state.announcements,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default announcementReducer;
