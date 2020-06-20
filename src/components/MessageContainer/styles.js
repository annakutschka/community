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
    elevation: 3,
    backgroundColor: Colors.white
  },
  message: {
    flexDirection: 'column',
    margin: 10
  },
  text16: {
    fontSize: 16,
    paddingTop: 10,
    color: Colors.text
  },
  headline20: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text
  },
  textTime: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: Colors.bordergray
  },
  textBold16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text
  },
  containerUser: {
    width: '95%',
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between'
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  horizontalLine: {
    width: '95%',
    borderBottomColor: Colors.bordergray,
    borderBottomWidth: 1,
    margin: 5
  },
  profileImage: {
    flex: 1,
    borderRadius: 50,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text
  }
});

export default styles;
