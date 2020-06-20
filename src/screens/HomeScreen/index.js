import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import MessageContainer from '../../components/MessageContainer';
import DateFormatter from '../../services/dateFormatter';
import styles from './styles';
import { loadAnnouncements } from '../../store/announcements/actions';
import {
  makeSelectAnnouncements,
  makeSelectAnnouncementLoading
} from '../../store/announcements/selectors';
import { makeSelectCommunity } from '../../store/authentication/selectors';
import Layout from '../../constants/HeaderLayout';
import { initializeDataListeners } from '../../services/firebase/listeners';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Mitteilungen',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleLeft },
    headerTitleContainerStyle: { ...Layout.titleContainerLeft }
  };

  componentDidMount() {
    initializeDataListeners(
      this.props.communityId,
      this.props.externalDispatch
    );
  }

  handleRefresh = () => {
    console.log('Refresh!');
    this.props.fetchAnnouncements(this.props.communityId);
  };

  renderAnnouncements() {
    const { announcements } = this.props;
    if (announcements !== null) {
      return (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          data={announcements}
          renderItem={({ item }) => (
            <MessageContainer
              messageHeader={item.title}
              messageText={item.text}
              messageUser={item.userName}
              messageTime={DateFormatter.formatDate(item.time)}
            />
          )}
          keyExtractor={item => item.time}
          style={styles.list}
        />
      );
    } else {
      return <RkText style={styles.text16line}>Noch keine Mitteilungen</RkText>;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderAnnouncements()}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    announcements: makeSelectAnnouncements(state),
    communityId: makeSelectCommunity(state),
    refreshing: makeSelectAnnouncementLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnnouncements: id => dispatch(loadAnnouncements(id)),
    // Pass dispatch function to firebase listeners
    externalDispatch: action => dispatch(action)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
