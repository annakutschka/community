import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './styles';
import { RkButton } from 'react-native-ui-kitten';
import Shadows from '../../constants/Shadows';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communityName: '',
      communityImage: '../../assets/images/icon-image.png'
    };
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.getParams();
  }

  getParams = () => {
    const name = this.props.navigation.getParam(
      'name',
      'NO COMMUNITY SELECTED'
    );
    this.setState({ communityName: name });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={{ ...styles.welcomeContainer, ...Shadows }}>
          <Text style={styles.headline25}> Glückwunsch! </Text>
          <Text style={styles.text16}>
            Du bist jetzt Teil der {this.state.communityName} Community.
          </Text>

          <View style={styles.communityImageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('../../assets/images/icon-image.png')}
            />
          </View>

          <RkButton rkType="smallPrimary" onPress={() => navigate('Main')}>
            <Text style={styles.text20boldWhite}>Eintreten</Text>
          </RkButton>
        </View>
      </SafeAreaView>
    );
  }
}
