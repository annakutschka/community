import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import photoSilhouette from '../../assets/images/profile-silhouette.png';

export default class PostContainer extends React.Component {
  render() {
    // Check if image available
    if (this.props.userImage === null) {
      photo = photoSilhouette;
    } else {
      photo = { uri: this.props.photoUrl };
    }

    return (
      <View style={styles.user}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={photo}
          />
        </View>
        <Text style={styles.textBold16}>{this.props.userName}</Text>
      </View>
    );
  }
}
