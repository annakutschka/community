import React from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import {
  View,
  FlatList,
  ScrollView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import UserContainer from '../../components/UserContainer';
import Layout from '../../constants/HeaderLayout';
import styles from './styles';
import { connect } from 'react-redux';
import { loadAllUser, setUserId } from '../../store/user/actions';
import {
  makeSelectAllUsers,
  makeSelectAllUsersLoading
} from '../../store/user/selectors';
import {
  makeSelectCommunity,
  makeSelectUserId
} from '../../store/authentication/selectors';

class CommunityMembers extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Community-Mitglieder',
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
          onPress={() => navigation.navigate('Menu')}
        />
      ),
      headerLeftContainerStyle: { ...Layout.iconContainerLeft }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userName: '',
      users: []
    };
  }

  componentWillMount() {
    if (this.props.communityId) {
      this.props.fetchAllUsers(this.props.communityId);
    }
  }

  navigateToUserProfile(user) {
    this.props.setUserId(user.uid);
    this.props.navigation.navigate('UserProfile', { user: user });
  }

  renderUsers = () => {
    const users = this.props.allUsers;
    if (users != null) {
      users.sort((a, b) =>
        a.userName > b.userName ? 1 : b.userName > a.userName ? -1 : 0
      );
      users.reverse();
      return (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          keyExtractor={item => item.uid}
          data={users}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.userContainer}
              onPress={
                item.uid != this.props.userId
                  ? () => this.navigateToUserProfile(item)
                  : null
              }
            >
              <UserContainer
                userId={item.uid}
                userImage={item.userImage}
                photoUrl={item.photoUrl}
                userName={
                  item.uid == this.props.userId
                    ? item.name + ' (du)'
                    : item.name
                }
              />
            </TouchableHighlight>
          )}
        />
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderUsers()}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    allUsers: makeSelectAllUsers(state),
    refreshAllUsers: makeSelectAllUsersLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: communityId => dispatch(loadAllUser(communityId)),
    setUserId: userId => dispatch(setUserId(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityMembers);
