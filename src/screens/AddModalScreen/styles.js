import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor
  },
  toggleContainer: {
    // Container oben (Leiste)
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  announcement: {
    // Mitteilungen-Button
    flex: 1,
    width: '100%'
  },
  post: {
    // Anzeigen-Button
    flex: 1,
    width: '100%'
  },
  containerLeft: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  moderatorContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  moderatorSpace: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  moderatorButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end'
  },
  moderatorForm: {
    flex: 1,
    flexDirection: 'column'
  },
  containerForm: {
    flex: 6,
    flexDirection: 'column'
  },
  postForm: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  form: {
    flex: 9,
    flexDirection: 'column'
  },
  containerCategory: {
    flex: 1,
    flexDirection: 'column'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    paddingStart: 10
  },
  containerButton: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  headline20: {
    color: Colors.text,
    paddingLeft: 10,
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text16: {
    fontSize: 16,
    padding: 10,
    color: Colors.text
  },
  text16boldWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    margin: 16
  },
  tagIsActive: {
    width: undefined,
    height: undefined,
    margin: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.backgroundColor,
    color: Colors.white
  },
  tagIsUnactive: {
    width: undefined,
    height: undefined,
    margin: 4,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.white
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginStart: 10,
    marginEnd: 5
  },
  errorText: {
    fontSize: 16,
    color: Colors.errorBackground,
    padding: 8,
    borderRadius: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: Colors.white
  }
});

export default styles;
