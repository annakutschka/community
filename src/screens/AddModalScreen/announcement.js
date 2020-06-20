import React from 'react';
import styles from './styles';
import validator from 'validator';
import { View, Text } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import InputField from '../../components/TextInput';
import FontStyles from '../../constants/FontStyles';
import MultilineTextInput from '../../components/MultilineTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import {
  makeSelectCommunity,
  makeSelectUserId,
  makeSelectUserName
} from '../../store/authentication/selectors';
import { createAnnouncement } from '../../store/announcements/actions';

class AnnouncementForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      errorText: ''
    };
  }

  handleSaveClick() {
    const data = {
      communityId: this.props.communityId,
      message: {
        time: new Date().toLocaleString('en'),
        userName: this.props.userName,
        userId: this.props.userId,
        title: validator.escape(this.state.title),
        text: validator.escape(this.state.description)
      }
    };
    if (this.isValid()) {
      this.props.createNewAnnouncement(data);
      this.props.navigation.navigate('Home');
    }
  }

  isValid = () => {
    if (
      validator.isEmpty(this.state.title) ||
      validator.isEmpty(this.state.description)
    ) {
      this.setState({ errorText: 'Bitte fülle alle Felder aus' });
      return false;
    } else return true;
  };

  render() {
    let error;
    if (!validator.isEmpty(this.state.errorText)) {
      error = <Text style={styles.errorText}>{this.state.errorText}</Text>;
    }

    return (
      <KeyboardAwareScrollView>
        <View style={styles.moderatorForm}>
          <InputField
            headerText="Titel"
            placeHolder="Titel..."
            onChangeText={text => this.setState({ title: text })}
          />
          <MultilineTextInput
            headerText="Beschreibung"
            placeHolder="Beschreibung..."
            onChangeText={text => this.setState({ description: text })}
          />
        </View>
        <View style={styles.moderatorSpace} />
        {error}
        <View styles={styles.moderatorButton}>
          <RkButton rkType="normalLight" onPress={() => this.handleSaveClick()}>
            <Text style={FontStyles.text20WhiteBold}>Mitteilung erstellen</Text>
          </RkButton>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    communityId: makeSelectCommunity(state),
    userId: makeSelectUserId(state),
    userName: makeSelectUserName(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewAnnouncement: data => dispatch(createAnnouncement(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementForm);
