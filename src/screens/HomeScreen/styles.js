import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.backgroundColor
  },
  list: {
    width: '100%',
    padding: 10
  },
  announcementContainer: {
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: Colors.white
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  headline20: {
    fontSize: 20,
    color: Colors.text,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  text16line: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'left',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  text16: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'left'
  },
  userImage: {
    width: 25,
    height: 25
  },
  time: {
    justifyContent: 'flex-end',
    color: Colors.textGray,
    fontSize: 16,
    textAlign: 'right'
  },
  list: {
    width: '100%'
  }
});

export default styles;
