import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default class ButtonText extends React.Component {
  render() {
    return (
      <View
        id="button-text"
        title={this.props.buttonText}
        style={styles.buttonText}
        //style={{ backgroundColor: this.props.backgroundColor }}
        onPress={(style = styles.buttonPress)}
      >
        <Text style={styles.text}>{this.props.buttonText} </Text>
      </View>
    );
  }
}

const styles = {
  buttonText: {
    width: 'auto',
    height: 'auto',
    borderRadius: 20,
    borderWidth: 0,
    margin: 16,
    backgroundColor: Colors.primaryColor
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center'
  },
  buttonPress: {
    opacity: 0.6
  }
};
