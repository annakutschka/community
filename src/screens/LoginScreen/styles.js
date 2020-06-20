import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center'
  },
  upperView: {
    // Contains logo
    position: 'relative',
    top: '10%',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  fbButton: {
    backgroundColor: Colors.facebook
  },
  googleButton: {
    backgroundColor: Colors.google
  },
  logoImageContainer: {
    width: '100%',
    height: '28%'
  },
  logoImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 0,
    height: '40%',
    width: '100%'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  data: {
    fontSize: 12,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000'
  }
});

export default styles;
