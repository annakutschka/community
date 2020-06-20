import { createSelector } from 'reselect';

const selectCommunityChatState = state => state.messages;

export const makeSelectCommunityChatMessages = createSelector(
  selectCommunityChatState,
  data => data.communityChatMessages
);
