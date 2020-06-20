import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import {
  makeSelectUserId,
  makeSelectCommunity
} from '../../store/authentication/selectors';
import { connect } from 'react-redux';

export class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch user information from store
  _bootstrapAsync = async () => {
    const userId = this.props.userId;
    const community = this.props.community;

    if (userId) {
      if (userId && community) {
        this.props.navigation.navigate('Main');
      } else {
        // If user but no community
        this.props.navigation.navigate('Welcome');
      }
    } else {
      // No user
      this.props.navigation.navigate('Login');
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    userId: makeSelectUserId(state),
    community: makeSelectCommunity(state)
  };
};

export default connect(mapStateToProps)(AuthLoadingScreen);
