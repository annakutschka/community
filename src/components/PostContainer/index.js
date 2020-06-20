import React from 'react';
import { Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors';
import styles from './styles';

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: this.props.postBackground
        }}
      >
        <View style={styles.post}>
          <Text style={styles.headline20}>{this.props.postHeader}</Text>
          <Text style={styles.text16}>{this.props.postText}</Text>
          <View style={styles.tagContainer}>
            {this.props.tagArray.map((tag, key) => (
              <View style={styles.tag} key={key}>
                <Text key={key}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 3,
            borderBottomColor: Colors.white,
            borderBottomWidth: 1,
            marginTop: 2
          }}
        />

        <View style={styles.containerUser}>
          <View style={styles.user}>
            <Image
              styles={{
                width: 10,
                height: 10
              }}
            />
            <Text style={styles.textBold16}>{this.props.postUser}</Text>
          </View>
          <Text style={styles.textTime}>{this.props.postTime}</Text>
        </View>
      </View>
    );
  }
}
