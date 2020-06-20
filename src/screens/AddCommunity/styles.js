import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor
  },
  joinCommunityContainer: {
    elevation: 3,
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    width: '90%',
    maxHeight: '50%',
    alignItems: 'center',
    borderRadius: 3
  },
  createCommunityContainer: {
    justifyContent: 'center',
    elevation: 3,
    margin: 10,
    padding: 20,
    backgroundColor: Colors.white,
    width: '90%',
    alignItems: 'center',
    borderRadius: 3
  },
  text16: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center'
  },
  text16boldWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white
  },
  text25boldWhite: {
    fontSize: 25,
    marginTop: -3,
    fontWeight: 'bold',
    color: Colors.white
  },
  link16bold: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  link16: {
    fontSize: 16,
    padding: 10,
    textDecorationLine: 'underline'
  },
  headline20: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    margin: 16
  },
  select: {
    width: '90%'
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  picker: {
    width: '85%',
    marginBottom: 10
  },
  textStart: {
    fontSize: 16,
    marginTop: 16,
    alignItems: 'flex-start'
  },
  description: {
    marginBottom: -5
  }
});

export default styles;
