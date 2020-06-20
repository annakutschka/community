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
import HeaderIcon from '../../components/HeaderIcon';
import Layout from '../../constants/HeaderLayout';
import Color from '../../constants/Colors';
import { connect } from 'react-redux';
import DateFormatter from '../../services/dateFormatter';
import PostContainer from '../../components/PostContainer';
import photoSilhouette from '../../assets/images/profile-silhouette.png';
import {
  makeSelectPostsSearchOfUserId,
  makeSelectPostsOfferOfUserId
} from '../../store/posts/selectors';
import { makeSelectUser } from '../../store/user/selectors.js';

class UserProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Profil',
      headerStyle: { ...Layout.headerLayout },
      headerTitleStyle: { ...Layout.titleRight },
      headerTitleContainerStyle: { ...Layout.titleContainerRight },
      headerLeft: (
        <HeaderIcon
          name="arrow-round-back"
          dual={true}
          color="#000"
          left={true}
          size={40}
          onPress={() => navigation.navigate('Members')}
        />
      ),
      headerLeftContainerStyle: { ...Layout.iconContainerLeft }
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      photoUrl: '',
      name: '',
      id: ''
    };
  }

  handleOnMessageClick() {
    this.props.navigation.navigate('Chat');
  }

  renderPosts = () => {
    const posts = [...this.props.userPostsOffer, ...this.props.userPostsSearch];
    console.log(posts);
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
      return <Text style={styles.text16line}>Noch keine Beiträge!</Text>;
    }
  };

  renderUser() {
    if (this.props.navigation.state.params.user != null) {
      // Check if image available
      const userData = this.props.navigation.state.params.user;
      if (userData.photoUrl === null) {
        photo = photoSilhouette;
      } else {
        photo = { uri: userData.photoUrl };
      }

      return (
        <View style={styles.upperProfileContainer}>
          <View style={styles.imageContainer}>
            {/* <TouchableHighlight
              style={styles.iconContainer}
              onPress={() => this.handleOnMessageClick()}
            >
              <Image
                style={styles.icon}
                source={iconMessage}
                resizeMode="contain"
              />
            </TouchableHighlight> */}
            <View style={styles.imagesContainer}>
              <Image
                style={styles.profileImage}
                resizeMode="contain"
                source={photo}
              />
            </View>
            {/* <View style={styles.iconContainer}>
              <Image style={styles.icon} resizeMode="contain" />
            </View> */}
          </View>
          <Text style={styles.userName}>{userData.name}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderUser()}
          <View style={{ ...styles.postNumberContainer, ...Shadows }}>
            <Text style={styles.postNumber}>
              {
                [...this.props.userPostsOffer, ...this.props.userPostsSearch]
                  .length
              }
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
    user: makeSelectUser(state),
    userPostsOffer: makeSelectPostsOfferOfUserId(state),
    userPostsSearch: makeSelectPostsSearchOfUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileScreen);
