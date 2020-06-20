import React from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { logInFacebook, logInGoogle } from '../../store/authentication/actions';
import {
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectAuthState,
  makeSelectAuthError,
  makeSelectFacebookLoggingIn,
  makeSelectGoogleLoggingIn
} from '../../store/authentication/selectors';
import LoadingOverlay from '../../components/LoadingOverlay';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import ButtonIcon from '../../components/ButtonIcon';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';
import styles from './styles';
import { makeSelectAllModerators } from '../../store/user/selectors';

export class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidUpdate() {
    const { loggedIn, authError, community } = this.props;
    if (loggedIn && authError === false) {
      if (community) {
        this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Welcome');
      }
    }
  }

  handleFacebookLogin = () => {
    this.props.logInWithFacebook();
  };

  handleGoogleLogin = () => {
    this.props.logInWithGoogle();
  };

  handleDataLinkClick = () => {
    this.props.navigation.navigate('Consent');
  };

  render() {
    let loading = false;
    if (
      this.props.logInFacebookLoadingState ||
      this.props.logInGoogleLoadingState
    )
      loading = true;
    return (
      <View style={styles.container}>
        <View style={styles.upperView}>
          <View style={styles.logoImageContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.buttonContainer}>
            <RkButton
              rkType="bigLogin"
              style={styles.fbButton}
              onPress={this.handleFacebookLogin}
            >
              <ButtonIcon
                name="logo-facebook"
                dual={false}
                color={Colors.white}
              />
              <Text style={FontStyles.text20WhiteBold}>
                Mit Facebook einloggen
              </Text>
            </RkButton>
            {Platform.OS === 'ios' ? (
              <RkButton
                rkType="bigLogin"
                style={styles.googleButton}
                onPress={this.handleGoogleLogin}
              >
                <ButtonIcon
                  name="logo-google"
                  dual={false}
                  color={Colors.white}
                />
                <Text style={FontStyles.text20WhiteBold}>
                  Mit Google einloggen
                </Text>
              </RkButton>
            ) : null}
            <TouchableHighlight onPress={this.handleDataLinkClick}>
              <Text style={styles.data}>Datenschutz</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.bottomImageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/students.jpg')}
            resizeMode="cover"
          />
        </View>
        {loading ? <LoadingOverlay /> : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    community: makeSelectCommunity(state),
    uid: makeSelectUserId(state),
    loggedIn: makeSelectAuthState(state),
    authError: makeSelectAuthError(state),
    logInFacebookLoadingState: makeSelectFacebookLoggingIn(state),
    logInGoogleLoadingState: makeSelectGoogleLoggingIn(state),
    moderatorIds: makeSelectAllModerators(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logInWithFacebook: () => dispatch(logInFacebook()),
    logInWithGoogle: () => dispatch(logInGoogle())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
