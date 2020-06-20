import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor
  },
  feedContainer: {
    backgroundColor: Colors.backgroundColor
  },
  newsfeedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  offer: {
    flex: 1,
    textAlign: 'center'
  },
  search: {
    flex: 1,
    textAlign: 'center'
  },
  list: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundColor
  }
});

export default styles;
