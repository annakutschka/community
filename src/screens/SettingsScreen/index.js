import React from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  makeSelectPhotoUrl,
  makeSelectUserName,
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectModStatus
} from '../../store/authentication/selectors';
import * as firebase from 'firebase';
import HeaderIcon from '../../components/HeaderIcon';
import photoSilhouette from '../../assets/images/profile-silhouette.png';
import Colors from '../../constants/Colors';
import Layout from '../../constants/HeaderLayout';
import ButtonIcon from '../../components/ButtonIcon';
import { loadCommunities } from '../../store/communities/actions';
import styles from './styles';
import { leaveCommunity, deleteUser } from '../../store/authentication/actions';
import { removeDataListeners } from '../../services/firebase/listeners';

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Einstellungen',
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

  state = {
    communityName: ''
  };

  componentDidMount() {
    this.props.loadCommunities();
    const name = firebase
      .database()
      .ref('communities/' + this.props.communityId + '/name')
      .once('value', snapshot =>
        this.setState({
          communityName: snapshot.val()
        })
      );
  }

  showCommunityLeaveAlert() {
    Alert.alert(
      'Community wechseln',
      'Willst du die Community wirklich wechseln? Alle deine Posts, Mitteilungen und Nachrichten werden aus dieser Community gelöscht.',
      [
        {
          text: 'Ich bleibe doch.',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Ja, verlassen.',
          onPress: () => this.handleCommunityLeave()
        }
      ],
      { cancelable: false }
    );
  }

  handleCommunityLeave() {
    this.props.leaveCommunity(this.props.communityId, this.props.userId);
    removeDataListeners(this.props.communityId);
    this.props.navigation.navigate('Welcome');
  }

  showDeleteProfileAlert() {
    Alert.alert(
      'Profil löschen',
      'Bist du sicher, dass du dein Profil löschen möchtest? Alle Posts, Mitteilungen und Chat-Nachrichten werden gelöscht.',
      [
        {
          text: 'Nein',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Ja, löschen', onPress: () => this.handleDeleteProfile() }
      ],
      { cancelable: false }
    );
  }

  handleDeleteProfile() {
    this.props.deleteUser(this.props.communityId, this.props.userId);
    removeDataListeners(this.props.communityId);
    this.props.navigation.navigate('Login');
  }

  render() {
    // Check if image available
    if (this.props.photoUrl === null) {
      photo = photoSilhouette;
    } else {
      photo = { uri: this.props.photoUrl };
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>PERSÖNLICHE INFOS</Text>
        <View style={styles.listRow}>
          <Text style={styles.listText}>Name</Text>
          <Text style={styles.listTextRight}>{this.props.userName}</Text>
        </View>
        <View style={styles.listRow}>
          <Text style={styles.listText}>Community</Text>
          <Text style={styles.listTextRight}>{this.state.communityName}</Text>
        </View>
        <TouchableHighlight onPress={() => this.showCommunityLeaveAlert()}>
          <View style={styles.listRow}>
            <Text style={styles.listText}>Community wechseln</Text>
            <ButtonIcon
              name="arrow-forward"
              style={styles.arrowIcon}
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.showDeleteProfileAlert()}>
          <View style={styles.listRow}>
            <Text style={styles.listText}>Profil löschen</Text>
            <ButtonIcon
              name="arrow-forward"
              style={styles.arrowIcon}
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>

        {this.props.modState ? (
          <React.Fragment>
            <Text style={styles.headerText}>COMMUNITY EINSTELLUNGEN</Text>
            <TouchableHighlight
              onPress={() => this.navigateToChangeCommunityPicture()}
            >
              <View style={styles.listRow}>
                <Text style={styles.listText}>Community Bild ändern</Text>
                <ButtonIcon
                  name="arrow-forward"
                  style={styles.arrowIcon}
                  dual={true}
                  color={Colors.listArrow}
                  right={true}
                />
              </View>
            </TouchableHighlight>
          </React.Fragment>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    photoUrl: makeSelectPhotoUrl(state),
    userName: makeSelectUserName(state),
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    modState: makeSelectModStatus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    leaveCommunity: (communityId, userId) =>
      dispatch(leaveCommunity({ communityId, userId })),
    deleteUser: (communityId, userId) =>
      dispatch(deleteUser({ communityId, userId })),
    loadCommunities: () => dispatch(loadCommunities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
