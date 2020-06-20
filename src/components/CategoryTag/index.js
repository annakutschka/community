import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

export default class CategoryTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Text style={styles.text16}>{this.props.tagText}</Text>;
  }
}

const styles = StyleSheet.create({
  text16: {
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 6,
    paddingLeft: 6
  }
});
