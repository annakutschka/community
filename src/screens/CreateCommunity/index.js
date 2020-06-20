import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';
import validator from 'validator';
import Layout from '../../constants/HeaderLayout';
import LogoIcon from '../../assets/images/logo-small.png';
import Shadows from '../../constants/Shadows';
import FontStyles from '../../constants/FontStyles';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HeaderIcon from '../../components/HeaderIcon';
import {
  makeSelectUserId,
  makeSelectCommunity
} from '../../store/authentication/selectors';
import { createCommunity } from '../../store/authentication/actions';

export class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorIsHidden: false,
      errorText: 'Bitte fülle alle Felder aus',
      communityName: '',
      communityPlace: ''
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderIcon
          name="arrow-round-back"
          dual={true}
          color="#000"
          left={true}
          size={40}
          onPress={() => navigation.goBack()}
        />
      ),
      headerLeftContainerStyle: { ...Layout.iconContainerLeft },
      headerStyle: { ...Layout.headerLayout },
      headerTitleContainerStyle: { ...Layout.titleContainerRight },
      headerTitle: (
        <View
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            bottom: 8.5,
            right: 22
          }}
        >
          <Image
            resizeMode="contain"
            source={LogoIcon}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined
            }}
          />
        </View>
      )
    };
  };

  componentDidUpdate() {
    if (this.props.userId) {
      if (this.props.communityId) {
        const name = this.state.communityName;
        this.props.navigation.navigate('Entry', {
          name,
          id: this.props.communityId
        });
      }
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  handleCreateCommunity = () => {
    const valid = this.isValid();
    if (valid) {
      this.setState({
        errorIsHidden: false
      });

      const data = {
        moderators: [this.props.userId],
        name: validator.escape(this.state.communityName),
        adress: validator.escape(this.state.communityPlace)
      };

      this.props.createCommunityAndAddToUser(data);
    } else {
      this.setState({
        errorIsHidden: true
      });
    }
  };

  saveCommunityToUser = k => {
    //add community to user
    this.props.saveCommunityToUser(k);

    //navigate to Welcome site with your community name
    const params = '"' + this.state.communityName + '"';
    this.props.navigation.navigate('Entry', { name: params });
  };

  renderError = () => {
    if (this.state.errorIsHidden) {
      return <Text style={styles.errorText}>{this.state.errorText}</Text>;
    }
  };

  //VALIDATION
  isValid = () => {
    if (
      validator.isEmpty(this.state.communityName) ||
      validator.isEmpty(this.state.communityPlace)
    ) {
      this.setState({
        errorText: 'Bitte fülle alle Felder aus'
      });
      return false;
    } else {
      return true;
    }
  };

  render() {
    let type = 'smallGrey';
    if (
      !validator.isEmpty(this.state.communityName) &&
      !validator.isEmpty(this.state.communityPlace)
    ) {
      type = 'smallPrimary';
    }
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{ ...styles.communityContainer, ...Shadows }}>
            <Text style={styles.headline20}>Eine neue Community</Text>

            <View style={styles.textStart}>
              <Text style={styles.text16NoAlign}>
                <Text style={styles.text16bold}>Wie soll sie heißen?</Text>
                (z.B. Campus Puch Urstein, Wohnhaus Kärtnerstraße)
              </Text>

              <RkTextInput
                placeholder="Name der Community"
                ref={input => {
                  this.name = input;
                }}
                onChangeText={text => this.setState({ communityName: text })}
                inputStyle={{
                  margin: 16
                }}
              />
            </View>

            <View style={styles.textStart}>
              <Text style={styles.text16bold}>
                Wo befindet sich die Community?
              </Text>
              <RkTextInput
                placeholder="Adresse der Community"
                onChangeText={text => this.setState({ communityPlace: text })}
                inputStyle={{
                  margin: 16
                }}
              />
            </View>

            <Text style={styles.text12}>
              Wenn du eine Community erstellst, bist du automatisch der
              Community-Verwalter. Du kannst später weitere
              Verwalter/Moderatoren hinzufügen bzw. deinen Verwalter-Status an
              jemanden anderen abgeben.
            </Text>

            {this.renderError()}

            <RkButton
              rkType={type}
              onPress={() => this.handleCreateCommunity()}
            >
              <Text style={FontStyles.text20WhiteBold}>
                Community erstellen
              </Text>
            </RkButton>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: makeSelectUserId(state),
    communityId: makeSelectCommunity(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCommunityAndAddToUser: data => dispatch(createCommunity(data)),
    saveCommunityToUser: id => dispatch(saveCommunityToUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCommunity);
