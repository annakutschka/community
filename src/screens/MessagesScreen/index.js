import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/HeaderLayout';
import HeaderIcon from '../../components/HeaderIcon';

export default class MessagesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Nachrichten',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleLeft },
    headerTitleContainerStyle: { ...Layout.titleContainerLeft },
    headerRight: (
      <HeaderIcon
        name="add"
        dual={true}
        color="#000"
        size={Layout.iconSize}
        //onPress={() => navigation.navigate('NewMessageUserList')}
      />
    ),
    headerRightContainerStyle: { ...Layout.iconContainerRight }
  });

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('CommunityChat')}
        >
          <View style={styles.communityChat}>
            <Text style={styles.chatName}>Zum Community Chat</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.backgroundColor
  },
  communityChat: {
    height: 80,
    width: '100%',
    backgroundColor: Colors.lightColorTwo,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 22
  },
  chatName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
