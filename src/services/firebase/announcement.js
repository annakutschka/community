import * as firebase from 'firebase';

class Announcement {
  async loadAnnouncements(communityId) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/announcements')
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async createAnnouncement(data) {
    const { communityId, message } = data;
    let key = null;
    await firebase
      .database()
      .ref('communities/' + communityId + '/announcements')
      .push({ ...message })
      .then(
        snapshot => {
          key = snapshot.key;
        },
        error => {
          if (error) {
            throw Error('Creating a new announcement failed!', error);
          }
        }
      );

    const createdAnnouncement = await firebase
      .database()
      .ref('communities/' + communityId + '/announcements/' + key)
      .once('value'); // TODO: error handling

    return { id: communityId, ...createdAnnouncement.val() };
  }

  async deleteAnnouncement() {}
}

export default new Announcement();
