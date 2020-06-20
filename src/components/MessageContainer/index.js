import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.headline20}>{this.props.messageHeader} </Text>
          <Text style={styles.text16}>{this.props.messageText} </Text>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.containerUser}>
          <View style={styles.user}>
            <Image
              source={this.props.messageUserImage}
              styles={styles.profilImage}
            />
            <Text style={styles.textBold16}>{this.props.messageUser} </Text>
          </View>
          <Text style={styles.textTime}>{this.props.messageTime} </Text>
        </View>
      </View>
    );
  }
}
