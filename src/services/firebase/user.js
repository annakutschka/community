import * as firebase from 'firebase';

class User {
  // Creates a new user if not existing or updates accesstoken if available
  async updateUser(data) {
    // Photo URL different from provider
    let photoUrl = null;
    if (data.additionalUserInfo.providerId === 'facebook.com') {
      photoUrl = data.additionalUserInfo.profile.picture.data.url;
    } else {
      photoUrl = data.user.photoURL;
    }

    const userId = data.user.uid;
    const userData = {
      newUser: data.additionalUserInfo.isNewUser,
      name: data.user.displayName,
      photoUrl,
      uid: data.user.uid,
      accessToken: data.credential.accessToken,
      email: data.user.email,
      provider: data.additionalUserInfo.providerId
    };

    // Set User
    await firebase
      .database()
      .ref('user/' + userId)
      .update({ ...userData }, error => {
        if (error) {
          throw Error('Updating the user failed!', error);
        }
      });

    // Get User (because firebase does not return a snapshot
    // when user was successfully set)
    const snapshot = await firebase
      .database()
      .ref('user/' + userId)
      .once('value');

    return snapshot.val();
  }

  async getUser(id) {
    const snapshot = await firebase
      .database()
      .ref('user')
      .orderByChild('uid')
      .equalTo(id)
      .once('value');
    // TODO: error handling

    return snapshot.val();
  }

  async getAllUsers(communityId) {
    const snapshot = await firebase
      .database()
      .ref('user')
      .orderByChild('community')
      .equalTo(communityId)
      .once('value');
    // TODO: error handling

    return snapshot.val();
  }

  async getAllModerators(communityId) {
    console.log('COMMUNITY: ' + communityId);
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/moderatorId')
      .once('value');
    // TODO: error handling
    console.log('MODERATOR IDs: ' + snapshot.val());
    return snapshot.val();
  }
}

export default new User();
