import * as firebase from 'firebase';

class Chat {
  async loadCommunityChatMessages(communityId) {
    const snapshot = await firebase
      .database()
      .ref('communities/' + communityId + '/communityChat/messages')
      .once('value'); // TODO: error handling

    return snapshot.val();
  }

  async createCommunityChatMessage(data) {
    const { communityId, message } = data;
    await firebase
      .database()
      .ref('communities/' + communityId + '/communityChat/messages')
      .push({ ...message })
      .then(
        snapshot => {
          key = snapshot.key;
        },
        error => {
          if (error) {
            throw Error('Creating a new community chat message failed!', error);
          }
        }
      );
  }

  async deleteMessageCommunityChat() {}
}

export default new Chat();
