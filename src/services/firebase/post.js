import * as firebase from 'firebase';

class Post {
  // Offer
  async loadPostsOffer(communityId) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/posts/offer')
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async loadPostsOfferUser(data) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + data.communityId + '/posts/offer')
      .orderByChild('userId')
      .equalTo(data.id)
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async createPostOffer(data) {
    const { communityId, message } = data;
    let key = null;
    await firebase
      .database()
      .ref('communities/' + communityId + '/posts/offer')
      .push({ ...message })
      .then(
        snapshot => {
          key = snapshot.key;
        },
        error => {
          if (error) {
            throw Error('Creating a new post of type offer failed!', error);
          }
        }
      );

    const createdPostOffer = await firebase
      .database()
      .ref('communities/' + communityId + '/posts/offer/' + key)
      .once('value'); // TODO: error handling

    return { id: communityId, ...createdPostOffer.val() };
  }

  async deletePostOffer() {}

  // Search
  async loadPostsSearch(communityId) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/posts/search')
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async loadPostsSearchUser(data) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + data.communityId + '/posts/search')
      .orderByChild('userId')
      .equalTo(data.id)
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async createPostSearch(data) {
    const { communityId, message } = data;
    let key = null;
    await firebase
      .database()
      .ref('communities/' + communityId + '/posts/search')
      .push({ ...message })
      .then(
        snapshot => {
          key = snapshot.key;
        },
        error => {
          if (error) {
            throw Error('Creating a new post of type search failed!', error);
          }
        }
      );

    const createdPostSearch = await firebase
      .database()
      .ref('communities/' + communityId + '/posts/search/' + key)
      .once('value'); // TODO: error handling

    return { id: communityId, ...createdPostSearch.val() };
  }

  async deletePostSearch() {}
}

export default new Post();
