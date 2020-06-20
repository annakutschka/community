import { createSelector } from 'reselect';

const selectUsersData = state => state.users;
const selectLoadingState = state => state.loadingState;
const selectModeratorData = state => 'adb';

export const makeSelectUser = createSelector(
  selectUsersData,
  data => data.allUsers
);

export const makeSelectUserLoading = createSelector(
  selectLoadingState,
  data => data.LOAD_USER
);

export const makeSelectAllUsers = createSelector(
  selectUsersData,
  data => data.allUsers
);

export const makeSelectAllUsersLoading = createSelector(
  selectLoadingState,
  data => data.LOAD_ALL_USER
);

export const makeSelectAllModerators = createSelector(
  selectModeratorData,
  data => data.moderatorId
);

export const makeSelectAllModeratorsLoading = createSelector(
  selectLoadingState,
  data => data.SET_MODERATORIDS
);
