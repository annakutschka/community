import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    bottom: 8.5,
    left: 22,
    margin: 0
  },
  imageContainer: {
    height: 100,
    width: 100
  },
  upperProfileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 160
  },
  profileImage: {
    flex: 1,
    borderRadius: 50,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  postNumberContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  postNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    fontSize: 12,
    marginBottom: 10
  },
  list: {
    height: '100%',
    backgroundColor: Colors.backgroundColor
  }
});

export default styles;
