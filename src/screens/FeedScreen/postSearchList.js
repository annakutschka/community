import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, RefreshControl } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import PostContainer from '../../components/PostContainer';
import DateFormatter from '../../services/dateFormatter';
import styles from './styles';
import Color from '../../constants/Colors';
import { loadPostsSearch } from '../../store/posts/actions';
import {
  makeSelectPostsSearch,
  makeSelectPostsSearchLoading
} from '../../store/posts/selectors';
import { makeSelectCommunity } from '../../store/authentication/selectors';

class PostSearchList extends React.Component {
  handleRefresh = () => {
    console.log('Refresh!');
    this.props.fetchPosts(this.props.communityId);
  };

  renderPosts = () => {
    const { posts } = this.props;
    if (posts !== null) {
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
            <PostContainer
              postBackground={Color.primaryColor}
              postHeader={item.title}
              postText={item.text}
              postUser={item.userName}
              tagArray={item.tags}
              //postUserImage={item.userImage}
              postTime={DateFormatter.formatDate(item.time)}
            />
          )}
          keyExtractor={item => item.time}
          style={styles.list}
        />
      );
    } else {
      return <RkText style={styles.text16line}>Noch keine Gesuche!</RkText>;
    }
  };

  render() {
    return <View style={styles.container}>{this.renderPosts()}</View>;
  }
}
const mapStateToProps = state => {
  return {
    posts: makeSelectPostsSearch(state),
    communityId: makeSelectCommunity(state),
    refreshing: makeSelectPostsSearchLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: id => dispatch(loadPostsSearch(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSearchList);
