import { createSelector } from 'reselect';

const selectPostsData = state => state.posts;
const selectLoadingState = state => state.loadingState;
const selectUserId = state => state.auth.uid;
const selectCurrentUser = state => state.users.active;

// -----------------------------------------------------
//----------------------Offer--------------------------
// -----------------------------------------------------
export const makeSelectPostsOffer = createSelector(
  selectPostsData,
  data => data.postsOffer
);

export const makeSelectPostsOfferLoading = createSelector(
  selectLoadingState,
  data => data.LOAD_POSTS_OFFER
);

export const makeSelectPostOfferCreating = createSelector(
  selectLoadingState,
  data => data.CREATE_POST_OFFER
);

//all offer Posts of own User
export const makeSelectPostsOfferOwnUser = createSelector(
  selectPostsData,
  selectUserId,
  (data, id) => {
    if (data.postsSearch)
      return data.postsOffer.filter(item => item.userId === id);
    else return [];
  }
);

//all offer Posts of one User with ID
export const makeSelectPostsOfferOfUserId = createSelector(
  selectPostsData,
  selectCurrentUser,
  (data, id) => {
    if (data.postsOffer) {
      console.log(data);
      console.log(id);
      return data.postsOffer.filter(item => item.userId === id);
    } else return [];
  }
);

// -----------------------------------------------------
//----------------------Search--------------------------
// -----------------------------------------------------

export const makeSelectPostsSearch = createSelector(
  selectPostsData,
  data => data.postsSearch
);

export const makeSelectPostsSearchLoading = createSelector(
  selectLoadingState,
  data => data.LOAD_POSTS_SEARCH
);

//get Posts of own user
export const makeSelectPostsSearchOwnUser = createSelector(
  selectPostsData,
  selectUserId,
  (data, id) => {
    if (data.postsSearch)
      return data.postsSearch.filter(item => item.userId === id);
    else return [];
  }
);

//get Posts with UserId
export const makeSelectPostsSearchOfUserId = createSelector(
  selectPostsData,
  selectCurrentUser,
  (data, id) => {
    if (data.postsSearch)
      return data.postsSearch.filter(item => item.userId === id);
    else return [];
  }
);

//create user
export const makeSelectPostSearchCreating = createSelector(
  selectLoadingState,
  data => data.CREATE_POST_SEARCH
);
