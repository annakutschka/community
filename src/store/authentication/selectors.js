import { createSelector } from 'reselect';

const selectUserData = state => state.auth;
const selectLoadingState = state => state.loadingState;
const selectCommunityState = state => state.communities;

export const makeSelectUserId = createSelector(
  selectUserData,
  data => data.uid
);

export const makeSelectNewUser = createSelector(
  selectUserData,
  data => data.newUser
);

export const makeSelectAuthError = createSelector(
  selectUserData,
  data => data.error
);

export const makeSelectAuthState = createSelector(
  selectUserData,
  data => data.loggedIn
);

export const makeSelectPhotoUrl = createSelector(
  selectUserData,
  data => data.photoUrl
);

export const makeSelectUserName = createSelector(
  selectUserData,
  data => data.name
);

export const makeSelectUserEmail = createSelector(
  selectUserData,
  data => data.email
);

export const makeSelectCommunity = createSelector(
  selectUserData,
  data => data.community
);

export const makeSelectModStatus = createSelector(
  makeSelectUserId,
  selectCommunityState,
  (userId, communities) => {
    const result = communities.currentCommunity.moderators.filter(
      id => id === userId
    );
    return result.length === 1;
  }
);

export const makeSelectFacebookLoggingIn = createSelector(
  selectLoadingState,
  data => data.LOG_IN_FACEBOOK
);

export const makeSelectGoogleLoggingIn = createSelector(
  selectLoadingState,
  data => data.LOG_IN_GOOGLE
);
