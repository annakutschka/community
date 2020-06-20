import { StyleSheet } from 'react-native';
import Colors from './Colors';

// Naming scheme: art Size Color Weight/Decoration
const fontStyles = StyleSheet.create({
  text20WhiteBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white
  },
  text25WhiteBold: {
    fontSize: 25,
    marginTop: -3,
    fontWeight: 'bold',
    color: Colors.white
  }
});

export default fontStyles;
