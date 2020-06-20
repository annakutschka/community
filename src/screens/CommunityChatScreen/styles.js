import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default (styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    height: '100%',
    width: '100%'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 15,
    backgroundColor: Colors.backgroundColor,
    height: '100%',
    width: '100%'
  },
  messageList: {
    flex: 1,
    width: '100%'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    height: 60,
    backgroundColor: '#EAEAEA'
  },
  input: {
    width: '80%',
    height: 40,
    marginLeft: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,

    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightColor
  },
  sendText: {
    color: Colors.lightColor,
    fontSize: 20
  },

  inputToolbarStyle: {
    marginHorizontal: 10,
    backgroundColor: Colors.borderColor,
    borderRadius: 25,
    marginBottom: 5,
    paddingLeft: 10,
    borderTopWidth: 0
  }
}));
