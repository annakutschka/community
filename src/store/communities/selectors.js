import { createSelector } from 'reselect';

const selectCommunitiesData = state => state.communities;

export const makeSelectCommunityList = createSelector(
  selectCommunitiesData,
  data => data.communities
);
