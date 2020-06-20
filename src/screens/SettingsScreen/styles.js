import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.backgroundColor
  },
  listRow: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.listBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  iconContainer: {
    width: 70
  },
  arrowIcon: {
    position: 'absolute',
    right: 20
  },
  headerText: {
    marginTop: 20,
    marginBottom: 10,
    marginStart: 10,
    fontSize: 20,
    color: Colors.lightColorTwo,
    fontWeight: 'bold'
  },
  listTextRight: {
    fontSize: 18,
    textAlign: 'right',
    color: '#000',
    position: 'absolute',
    right: 20,
    fontWeight: 'bold'
  },
  listText: {
    fontSize: 18,
    color: Colors.textGray
  }
});

export default styles;
