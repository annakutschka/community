import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../../store/authentication/actions';
import {
  makeSelectAuthError,
  makeSelectAuthState
} from '../../store/authentication/selectors';
import HeaderIcon from '../../components/HeaderIcon';
import Colors from '../../constants/Colors';
import Layout from '../../constants/HeaderLayout';
import FHLogo from '../../assets/images/fhs.jpg';

class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Impressum',
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kontakt (Email)</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.listText}>communityappat@gmail.com</Text>
        </View>
        <Text style={styles.header}>Verantwortliche</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.listText}>Marion Menzl und Anna Kutschka</Text>
        </View>
        <View style={styles.innerContainerLarge}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.fhImage}
              source={FHLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.listText}>
            Community ist ein Abschlussprojekt im Rahmen des MultiMediaProjekts
            3 der Fachhochschule Salzburg
          </Text>
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
  innerContainer: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.listBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  innerContainerLarge: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.listBorderColor,
    padding: 20
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingStart: 15,
    paddingVertical: 10,
    color: Colors.lightColorTwo
  },
  listText: {
    fontSize: 16,
    color: '#000'
  },
  fhImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  imageContainer: {
    height: 100,
    width: 100
  }
});

const mapStateToProps = state => {
  return {
    loggedIn: makeSelectAuthState(state),
    authError: makeSelectAuthError(state)
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
