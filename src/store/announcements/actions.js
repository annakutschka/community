import * as actionTypes from '../../constants/ActionTypes';

// Load Announcements
export const loadAnnouncements = payload => ({
  type: actionTypes.LOAD_ANNOUNCEMENTS_REQUEST,
  payload
});

export const announcementsLoaded = payload => ({
  type: actionTypes.LOAD_ANNOUNCEMENTS_SUCCESS,
  payload
});

export const announcementsLoadingError = error => ({
  type: actionTypes.LOAD_ANNOUNCEMENTS_ERROR,
  error
});

// Create Announcement
export const createAnnouncement = payload => ({
  type: actionTypes.CREATE_ANNOUNCEMENT_REQUEST,
  payload
});

export const announcementCreated = payload => ({
  type: actionTypes.CREATE_ANNOUNCEMENT_SUCCESS,
  payload
});

export const announcementCreatingError = error => ({
  type: actionTypes.CREATE_ANNOUNCEMENT_ERROR,
  error
});

// Delete Announcement
export const deleteAnnouncement = payload => ({
  type: actionTypes.DELETE_ANNOUNCEMENT_REQUEST,
  payload
});

export const announcementDeleted = payload => ({
  type: actionTypes.DELETE_ANNOUNCEMENT_SUCCESS,
  payload
});

export const announcementDeletingError = error => ({
  type: actionTypes.DELETE_ANNOUNCEMENT_ERROR,
  error
});

// Change Announcement
// export const changeAnnouncement = payload => ({
//   type: actionTypes.CHANGE_ANNOUNCEMENT_REQUEST,
//   payload
// });

export const announcementChanged = payload => ({
  type: actionTypes.CHANGE_ANNOUNCEMENT_SUCCESS,
  payload
});

// export const announcementChangingError = error => ({
//   type: actionTypes.CHANGE_ANNOUNCEMENT_ERROR,
//   error
// });
