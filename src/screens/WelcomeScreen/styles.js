import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  },
  welcomeContainer: {
    justifyContent: 'space-between',
    elevation: 3,
    backgroundColor: Colors.white,
    margin: 15,
    marginBottom: 20,
    padding: 20,
    width: '90%',
    height: '70%',
    alignItems: 'center'
  },
  text16: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16
  },
  text16bold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text16boldWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white
  },
  text20boldWhite: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white
  },
  headline25: {
    textAlign: 'center',
    fontSize: 25,
    padding: 16,
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  logoImageContainer: {
    marginTop: 20,
    width: '80%',
    height: '20%'
  },
  logoImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  communityImageContainer: {
    marginBottom: 16,
    marginTop: 16,
    height: '40%',
    width: '100%'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default styles;
