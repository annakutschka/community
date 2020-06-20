import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import Colors from '../../constants/Colors';
import styles from './styles';
import AnnouncementForm from './announcement';
import PostForm from './post';
import HeaderIcon from '../../components/HeaderIcon';
import Layout from '../../constants/HeaderLayout';
import { connect } from 'react-redux';
import {
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectUserName,
  makeSelectModStatus
} from '../../store/authentication/selectors';
import { makeSelectAnnouncementCreating } from '../../store/announcements/selectors';
import {
  makeSelectPostOfferCreating,
  makeSelectPostSearchCreating
} from '../../store/posts/selectors';

class AddModalScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Neu erstellen',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleLeft },
    headerTitleContainerStyle: { ...Layout.titleContainerLeft },
    headerRight: (
      <HeaderIcon
        name="close"
        dual={true}
        color="#000"
        size={Layout.iconSize}
        onPress={() => navigation.navigate('Feed')}
      />
    ),
    headerRightContainerStyle: { ...Layout.iconContainerRight }
  });

  constructor(props) {
    super(props);

    this.state = {
      //Page toggle
      isSelectedPost: true,
      isModerator: false
    };
  }

  handleAnnouncementClick = () => {
    this.setState({
      isSelectedPost: false
    });
  };

  handlePostClick = () => {
    this.setState({
      isSelectedPost: true
    });
  };

  render() {
    let moderatorView;
    if (this.props.modState) {
      moderatorView = (
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={styles.announcement}
            disabled={this.state.isSelectedPost ? false : true}
            onPress={() => this.handleAnnouncementClick()}
          >
            <RkText
              rkType={this.state.isSelectedPost ? 'toggle' : 'toggleSelected'}
            >
              Mitteilung
            </RkText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.post}
            disabled={this.state.isSelectedPost ? true : false}
            onPress={() => this.handlePostClick()}
          >
            <RkText
              rkType={this.state.isSelectedPost ? 'toggleSelected' : 'toggle'}
            >
              Anzeige
            </RkText>
          </TouchableOpacity>
        </View>
      );
    }

    let moderatorFormView;
    if (!this.state.isSelectedPost) {
      moderatorFormView = (
        <AnnouncementForm navigation={this.props.navigation} />
      );
    }

    let postFormView;
    if (this.state.isSelectedPost) {
      postFormView = (
        <PostForm
          navigation={this.props.navigation}
          communityId={this.props.communityId}
          userName={this.props.userName}
          userId={this.props.userId}
        />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        {moderatorView}

        <View style={styles.containerLeft}>
          {moderatorFormView}
          {postFormView}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    userName: makeSelectUserName(state),
    creatingAnnouncementLoading: makeSelectAnnouncementCreating(state),
    creatingPostOfferLoading: makeSelectPostOfferCreating(state),
    creatingSearchOfferLoading: makeSelectPostSearchCreating(state),
    modState: makeSelectModStatus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModalScreen);
