import * as firebase from 'firebase';

class Community {
  // Adds community id to user data in the DB
  async addCommunity(data) {
    const { userId, communityId } = data;
    await firebase
      .database()
      .ref('user/' + userId + '/community')
      .set(communityId, error => {
        if (error) {
          throw Error('Adding the community to the user failed!', error);
        }
      });

    // Get Community Id (because firebase does not return a snapshot
    // when user was successfully set)
    const snapshot = await firebase
      .database()
      .ref('user/' + userId + '/community')
      .once('value');

    return snapshot.val();
  }

  // Creates a new community and returns the id of the new community
  async createCommunity(data) {
    let key = null;
    await firebase
      .database()
      .ref('communities/')
      .push({ ...data })
      .then(
        snapshot => {
          key = snapshot.key;
        },
        error => {
          if (error) {
            throw Error('Creating a new community failed!', error);
          }
        }
      );

    return key;
  }

  async loadCommunities() {
    const snapshot = await firebase
      .database()
      .ref('communities/')
      .once('value');

    return snapshot.val();
  }

  async checkIfCommunityExists(communityId) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId)
      .once('value');

    return snapshot.exists();
  }

  //If you are a moderator
  async leaveCommunity(data) {
    const { communityId, userId } = data;
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/moderators')
      .once('value');

    // Remove id from moderators
    if (snapshot.val()) {
      const index = snapshot.val().findIndex(item => item === userId);
      await firebase
        .database()
        .ref('communities/' + communityId + '/moderators/' + index)
        .remove();
    }
    // Remove community from user
    await firebase
      .database()
      .ref('user/' + userId + '/community')
      .remove();
  }
}

export default new Community();
