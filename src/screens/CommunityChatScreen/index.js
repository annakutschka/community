import React from 'react';
import { connect } from 'react-redux';
import {
  GiftedChat,
  Bubble,
  Time,
  Send,
  InputToolbar
} from 'react-native-gifted-chat';
import { SafeAreaView, View, Platform } from 'react-native';
import styles from './styles';
import Layout from '../../constants/HeaderLayout';
import Colors from '../../constants/Colors';
import HeaderIcon from '../../components/HeaderIcon';
import TextIcon from '../../components/TextIcon';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { createCommunityChatMessage } from '../../store/chat/actions';
import {
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectUserName,
  makeSelectPhotoUrl
} from '../../store/authentication/selectors';
import { makeSelectCommunityChatMessages } from '../../store/chat/selectors';

class CommunityChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Community-Chat',
    headerStyle: { ...Layout.headerLayout },
    headerTitleStyle: { ...Layout.titleRight },
    headerTitleContainerStyle: { ...Layout.titleContainerRight },
    headerLeft: (
      <HeaderIcon
        name="arrow-round-back"
        dual={true}
        color="#000"
        size={Layout.iconSize}
        left={true}
        onPress={() => navigation.goBack()}
      />
    ),
    headerLeftContainerStyle: { ...Layout.iconContainerLeft }
  });

  state = {
    messages: []
  };

  handleSend(data) {
    let message = data[0];
    message.userId = this.props.userId;
    this.props.createMessage(this.props.communityId, {
      ...message
    });
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.lightColor
          },
          left: {
            backgroundColor: Colors.lightColorTwo
          }
        }}
        textStyle={{
          left: {
            color: 'white'
          },
          right: {
            color: 'white'
          }
        }}
      />
    );
  }

  renderTime() {
    return (
      <Time
        textStyle={{
          right: {
            color: 'black',
            fontSize: 14
          },
          left: {
            color: 'black',
            fontSize: 14
          }
        }}
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendButton}>
          <TextIcon dual={true} name="arrow-up" size={20} color="white" />
        </View>
      </Send>
    );
  }

  renderInputToolbar(props) {
    return (
      <InputToolbar {...props} containerStyle={styles.inputToolbarStyle} />
    );
  }
  // renderWrapper(props) {
  //   return (
  //     <View {...props} style={styles.wrapper}>
  //       <TextInput
  //         {...props}
  //         style={styles.input}
  //         placeholder="Nachricht schreiben..."
  //       />
  //     </View>
  //   );
  // }

  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <GiftedChat
          messages={this.props.messages}
          renderUsernameOnMessage={true}
          renderBubble={this.renderBubble}
          alwaysShowSend
          onSend={message => this.handleSend(message)}
          renderSend={this.renderSend}
          renderInputToolbar={this.renderInputToolbar}
          minInputToolbarHeight={55}
          user={{
            _id: this.props.userId,
            name: this.props.userName,
            avatar: this.props.userImage
          }}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: makeSelectCommunityChatMessages(state),
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    userName: makeSelectUserName(state),
    userImage: makeSelectPhotoUrl(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (communityId, message) =>
      dispatch(
        createCommunityChatMessage({
          communityId,
          message
        })
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityChatScreen);
