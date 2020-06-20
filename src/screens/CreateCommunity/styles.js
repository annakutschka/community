import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    padding: 10
  },
  communityContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: Colors.shadowColor,
    elevation: 3,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 20,
    width: '90%',
    maxHeight: 600
  },
  text16: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16
  },
  text16NoAlign: {
    fontSize: 16,
    marginTop: 10
  },
  text12: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10
  },
  text16bold: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text25boldWhite: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -3,
    color: Colors.white
  },
  headline20: {
    textAlign: 'center',
    fontSize: 20,
    padding: 16,
    fontWeight: 'bold',
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  textStart: {
    fontSize: 16,
    marginTop: 16,
    alignItems: 'flex-start'
  },
  errorText: {
    fontSize: 16,
    color: Colors.errorText,
    padding: 8,
    marginTop: 16,
    backgroundColor: Colors.errorBackground
  }
});

export default styles;
