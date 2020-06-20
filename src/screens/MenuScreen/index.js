import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../../store/authentication/actions';
import {
  makeSelectAuthError,
  makeSelectAuthState,
  makeSelectCommunity
} from '../../store/authentication/selectors';
import HeaderIcon from '../../components/HeaderIcon';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';
import Layout from '../../constants/HeaderLayout';
import ButtonIcon from '../../components/ButtonIcon';
import { RkButton } from 'react-native-ui-kitten';
import { removeDataListeners } from '../../services/firebase/listeners';

class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Menü',
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
          onPress={() => navigation.navigate('Profile')}
        />
      ),
      headerLeftContainerStyle: { ...Layout.iconContainerLeft }
    };
  };

  componentDidUpdate() {
    const { loggedIn, authError } = this.props;
    if (loggedIn === false && authError === false) {
      this.props.navigation.navigate('Login');
    }
  }

  showLogOutAlert = () => {
    Alert.alert(
      'Ausloggen',
      'Bist du sicher, dass du dich ausloggen möchtest?',
      [
        {
          text: 'Nein',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Ja, ausloggen', onPress: () => this.handleLogOut() }
      ],
      { cancelable: false }
    );
  };

  handleLogOut() {
    this.props.logOutFromApp();
    removeDataListeners(this.props.communityId);
    this.props.navigation.navigate('Login');
  }

  navigateToCommunityMembers() {
    this.props.navigation.navigate('Members');
  }

  navigateToSettings() {
    this.props.navigation.navigate('Settings');
  }

  navigateToImprint() {
    this.props.navigation.navigate('Impressum');
  }

  navigateToDSGVO() {
    this.props.navigation.navigate('DSGVO');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.navigateToCommunityMembers()}>
          <View style={styles.listRow}>
            <View style={styles.iconContainer}>
              <ButtonIcon
                name="contacts"
                dual={true}
                size={30}
                color={Colors.lightColorTwo}
              />
            </View>
            <Text style={styles.listText}>Community-Mitglieder</Text>
            <ButtonIcon
              style={styles.arrowIcon}
              name="arrow-forward"
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateToSettings()}>
          <View style={styles.listRow}>
            <View style={styles.iconContainer}>
              <ButtonIcon
                name="settings"
                dual={true}
                size={30}
                color={Colors.lightColorTwo}
              />
            </View>
            <Text style={styles.listText}>Einstellungen</Text>
            <ButtonIcon
              name="arrow-forward"
              style={styles.arrowIcon}
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateToImprint()}>
          <View style={styles.listRow}>
            <View style={styles.iconContainer}>
              <ButtonIcon
                name="information-circle"
                dual={true}
                size={30}
                color={Colors.lightColorTwo}
              />
            </View>
            <Text style={styles.listText}>Impressum</Text>
            <ButtonIcon
              name="arrow-forward"
              style={styles.arrowIcon}
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigateToDSGVO()}>
          <View style={styles.listRow}>
            <View style={styles.iconContainer}>
              <ButtonIcon
                name="lock"
                dual={true}
                size={30}
                color={Colors.lightColorTwo}
              />
            </View>
            <Text style={styles.listText}>Datenschutz</Text>
            <ButtonIcon
              name="arrow-forward"
              style={styles.arrowIcon}
              dual={true}
              color={Colors.listArrow}
              right={true}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <RkButton rkType="bigLight" onPress={this.showLogOutAlert}>
            <Text style={FontStyles.text20WhiteBold}>Abmelden</Text>
            <ButtonIcon
              name="exit"
              dual={true}
              color={Colors.white}
              right={true}
            />
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.backgroundColor
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center'
  },
  testText: {
    fontSize: 20,
    padding: 20
  },
  listRow: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.listBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  iconContainer: {
    width: 40
  },
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  arrowIcon: {
    position: 'absolute',
    right: 20
  }
});

const mapStateToProps = state => {
  return {
    loggedIn: makeSelectAuthState(state),
    authError: makeSelectAuthError(state),
    communityId: makeSelectCommunity(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutFromApp: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuScreen);
