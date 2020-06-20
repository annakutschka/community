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
  upperProfileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 160,
    margin: 10
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 20,
    backgroundColor: Colors.lightColorTwo
  },
  icon: {
    width: 40,
    height: 40
  },
  profileImage: {
    flex: 1,
    borderRadius: 50,
    width: 100,
    height: 100
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
