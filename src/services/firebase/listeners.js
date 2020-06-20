// Not the best solution but the eventChannels for Redux-Saga did not work
import * as firebase from 'firebase';
import { announcementsLoaded } from '../../store/announcements/actions';
import { postsOfferLoaded, postsSearchLoaded } from '../../store/posts/actions';
import { communityChatMessagesLoaded } from '../../store/chat/actions';
import {
  communitiesLoaded,
  setCommunityInformation
} from '../../store/communities/actions';
import { allUserLoaded } from '../../store/user/actions';

export function initializeDataListeners(communityId, dispatch) {
  firebase
    .database()
    .ref('/communities/' + communityId)
    .on('value', snapshot => {
      const data = snapshot.val();
      data &&
        dispatch(
          setCommunityInformation({
            id: communityId,
            adress: data.address,
            name: data.name,
            moderators: data.moderators
          })
        );
      data.announcements && dispatch(announcementsLoaded(data.announcements));
      data.posts && dispatch(postsOfferLoaded(data.posts.offer));
      data.posts && dispatch(postsSearchLoaded(data.posts.search));
      data.communityChat &&
        dispatch(communityChatMessagesLoaded(data.communityChat.messages));
    });

  firebase
    .database()
    .ref('/communities/')
    .on('value', snapshot => {
      const data = snapshot.val();
      data && dispatch(communitiesLoaded(data));
    });

  firebase
    .database()
    .ref('/user')
    .orderByChild('community')
    .equalTo(communityId)
    .on('value', snapshot => {
      const data = snapshot.val();
      data && dispatch(allUserLoaded(data));
    });
}

export function removeDataListeners(communityId) {
  console.log('Detach listeners');
  firebase
    .database()
    .ref('/communities/' + communityId)
    .off();

  firebase
    .database()
    .ref('/communities/')
    .off();

  firebase
    .database()
    .ref('/user')
    .orderByChild('community')
    .equalTo(communityId)
    .off();
}
