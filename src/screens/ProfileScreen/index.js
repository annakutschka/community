import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  FlatList,
  RefreshControl
} from 'react-native';
import styles from './styles.js';
import Shadows from '../../constants/Shadows';
import Color from '../../constants/Colors';
import HeaderIcon from '../../components/HeaderIcon';
import Layout from '../../constants/HeaderLayout';
import { connect } from 'react-redux';
import DateFormatter from '../../services/dateFormatter';
import PostContainer from '../../components/PostContainer';
import photoSilhouette from '../../assets/images/profile-silhouette.png';
import {
  makeSelectPhotoUrl,
  makeSelectUserName,
  makeSelectCommunity,
  makeSelectUserId
} from '../../store/authentication/selectors';
import { allModeratorIdLoaded } from '../../store/user/actions';
import {
  makeSelectPostsOfferOwnUser,
  makeSelectPostsSearchOwnUser
} from '../../store/posts/selectors';
import { makeSelectAllModerators } from '../../store/user/selectors.js';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profil',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleLeft },
    headerTitleContainerStyle: { ...Layout.titleContainerLeft },
    headerRight: (
      <HeaderIcon
        name="menu"
        dual={true}
        color="#000"
        size={Layout.iconSize}
        onPress={() => navigation.navigate('Menu')}
      />
    ),
    headerRightContainerStyle: { ...Layout.iconContainerRight }
  });

  constructor(props) {
    super(props);
    this.number = 0;
    this.state = {
      title: '',
      text: '',
      date: '',
      userId: '',
      userName: '',
      moderator: false,
      moderatorIds: []
    };
  }

  renderPosts = () => {
    const posts = [...this.props.postsOffer, ...this.props.postsSearch];
    if (posts !== null) {
      posts.sort(function(a, b) {
        var c = new Date(a.time);
        var d = new Date(b.time);
        return c - d;
      });
      posts.reverse();
      return (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          data={posts}
          renderItem={({ item }) => (
            <View>
              <PostContainer
                postBackground={
                  item.category == 'search'
                    ? Color.primaryColor
                    : Color.secondaryColor
                }
                postHeader={item.title}
                postText={item.text}
                postUser={item.userName}
                tagArray={item.tags}
                postTime={DateFormatter.formatDate(item.time)}
              />
            </View>
          )}
          keyExtractor={item => item.time}
          style={styles.list}
        />
      );
    } else {
      return <RkText style={styles.text16line}>Noch keine Beiträge!</RkText>;
    }
  };

  componentDidMount() {
    // const moderator = fetchModeratorIds(this.props.communityId);
    // console.log(moderator);
    // console.log(this.props.moderatorIds);
    // isModerator = this.props.moderatorIds.filter(
    //   id => id === this.props.userId
    // );
    // this.setState({
    //   moderatorIds: this.props.moderatorIds,
    //   moderator: isModerator
    // });
  }

  render() {
    // Check if image available
    if (this.props.photoUrl === null) {
      photo = photoSilhouette;
    } else {
      photo = { uri: this.props.photoUrl };
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperProfileContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profileImage}
                resizeMode="contain"
                source={photo}
              />
            </View>
            <Text style={styles.userName}>{this.props.userName}</Text>
          </View>
          <View style={{ ...styles.postNumberContainer, ...Shadows }}>
            <Text style={styles.postNumber}>
              {[...this.props.postsOffer, ...this.props.postsSearch].length}
            </Text>
            <Text style={styles.description}>Posts</Text>
          </View>
          <View>{this.renderPosts()}</View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    photoUrl: makeSelectPhotoUrl(state),
    userName: makeSelectUserName(state),
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    postsOffer: makeSelectPostsOfferOwnUser(state),
    postsSearch: makeSelectPostsSearchOwnUser(state),
    moderatorIds: makeSelectAllModerators(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchModeratorIds: id => dispatch(allModeratorIdLoaded(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
