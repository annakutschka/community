import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../../constants/Colors';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.headline20}>{this.props.headerText}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeHolder}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline20: {
    color: Colors.text,
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  textInput: {
    height: 50,
    color: Colors.text,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.bordergray,
    borderRadius: 3,
    padding: 10,
    marginBottom: 10
  }
});
