import { createSelector } from 'reselect';

const selectAnnouncementsData = state => state.announcements;
const selectLoadingState = state => state.loadingState;

export const makeSelectAnnouncements = createSelector(
  selectAnnouncementsData,
  data => data.announcements
);

export const makeSelectAnnouncementLoading = createSelector(
  selectLoadingState,
  data => data.LOAD_ANNOUNCEMENTS
);

export const makeSelectAnnouncementCreating = createSelector(
  selectLoadingState,
  data => data.CREATE_ANNOUNCEMENTS
);
