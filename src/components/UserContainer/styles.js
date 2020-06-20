import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
    padding: 10,
    width: '95%',
    height: 'auto',
    shadowColor: Colors.shadowColor,
    elevation: 3
  },
  post: {
    flexDirection: 'column'
  },
  headline20: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black
  },
  textBold16: {
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black
  },
  user: {
    marginBottom: 2,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 0,
    borderColor: Colors.shadowColor,
    shadowColor: Colors.shadowColor,
    elevation: 3,
    backgroundColor: Colors.white
  },
  imageContainer: {
    height: 50,
    width: 50
  },
  profileImage: {
    flex: 1,
    borderRadius: 25,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default styles;
