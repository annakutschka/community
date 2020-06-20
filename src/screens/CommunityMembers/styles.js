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
  userContainer: {
    flexDirection: 'row',
    width: '100%'
  }
});

export default styles;
