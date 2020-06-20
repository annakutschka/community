import * as firebase from 'firebase';

class Authentication {
  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '803316656676152',
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      return await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);
    } else if (type === 'cancel') {
      throw Error('Login was canceled!');
    } else {
      throw Error('Something went wrong!');
    }
  }

  async loginWithGoogle() {
    const { type, accessToken } = await Expo.Google.logInAsync({
      behavior: 'web',
      androidClientId:
        '965049474393-kd8a3cmaln7oasqgevigqd3tv45nsc8d.apps.googleusercontent.com',
      iosClientId:
        '965049474393-9pjv1jhsh30j96b8dpb5bjd2g8f7dj9n.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });

    if (type === 'success') {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        accessToken
      );

      return await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);
    } else if (type === 'cancel') {
      throw Error('Login was canceled!');
    } else {
      throw Error('Something went wrong!');
    }
  }

  async logout() {
    await firebase.auth().signOut();
  }

  // Delete all posts, announcements and messages of a user
  listUpdates = data => {
    let updates = {};
    const toDelete = Object.keys(data);
    toDelete.map(key => (updates[key] = null));
    return updates;
  };

  deleteAllUserContent = async data => {
    const { communityId, userId } = data;
    const ref = await firebase.database().ref('communities/' + communityId);

    // Delete announcements
    const announcements = await ref
      .child('announcements')
      .orderByChild('userId')
      .equalTo(userId)
      .once('value');
    if (announcements.val()) {
      const deleteAnnouncements = this.listUpdates(announcements.val());
      await ref.child('announcements').update(deleteAnnouncements);
    }

    // Delete posts search
    const postsSearch = await ref
      .child('posts/search')
      .orderByChild('userId')
      .equalTo(userId)
      .once('value');
    if (postsSearch.val()) {
      const deletePostsSearch = this.listUpdates(postsSearch.val());
      await ref.child('posts/search').update(deletePostsSearch);
    }

    // Delete posts offer
    const postsOffer = await ref
      .child('posts/offer')
      .orderByChild('userId')
      .equalTo(userId)
      .once('value');
    if (postsOffer.val()) {
      const deletePostsOffer = this.listUpdates(postsOffer.val());
      await ref.child('posts/offer').update(deletePostsOffer);
    }

    // Delete messages
    const messages = await ref
      .child('communityChat/messages')
      .orderByChild('userId')
      .equalTo(userId)
      .once('value');
    if (messages.val()) {
      const deleteMessages = this.listUpdates(messages.val());
      await ref.child('communityChat/messages').update(deleteMessages);
    }
  };

  deleteUser = async data => {
    await this.deleteAllUserContent(data);
    const { userId } = data;

    await firebase
      .database()
      .ref('/user/' + userId)
      .remove();
  };
}

export default new Authentication();
