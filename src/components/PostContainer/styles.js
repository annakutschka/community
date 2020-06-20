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
  text16: {
    fontSize: 16,
    paddingTop: 10,
    color: Colors.white
  },
  headline20: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white
  },
  textTime: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: Colors.white
  },
  textBold16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white
  },
  tagContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    width: undefined,
    height: undefined,
    paddingHorizontal: 8,
    paddingVertical: 3,
    margin: 3,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1
  },
  containerUser: {
    width: '95%',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  view: {
    height: 2,
    width: 3,
    backgroundColor: Colors.white
  }
});

export default styles;
