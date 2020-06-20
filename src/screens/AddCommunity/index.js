import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Text, Image } from 'react-native';
import {
  makeSelectUserId,
  makeSelectAuthState,
  makeSelectAuthError,
  makeSelectCommunity
} from '../../store/authentication/selectors';
import { makeSelectCommunityList } from '../../store/communities/selectors';
import { addCommunity } from '../../store/authentication/actions';
import { loadCommunities } from '../../store/communities/actions';
import { RkButton } from 'react-native-ui-kitten';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';
import LogoIcon from '../../assets/images/logo-small.png';
import Shadows from '../../constants/Shadows';
import FontStyles from '../../constants/FontStyles';
import Layout from '../../constants/HeaderLayout';

class AddCommunity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownData: [],
      dropdownLabel: 'Wähle deine Community',
      buttonDisabled: true,
      communityName: '',
      pickedCommunity: ''
    };
  }

  static navigationOptions = {
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
    ),
    headerStyle: { ...Layout.headerLayout },
    headerTitleContainerStyle: { ...Layout.titleContainerRight }
  };

  componentDidMount() {
    this.props.loadCommunities();
  }

  componentDidUpdate() {
    const name = this.state.communityName;
    if (this.props.userId) {
      if (this.props.communityId && this.state.pickedCommunity) {
        this.props.navigation.navigate('Entry', {
          name,
          id: this.props.communityId
        });
      }
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  handleJoinCommunity = () => {
    this.props.addCommunityToUser({
      userId: this.props.userId,
      communityId: this.state.pickedCommunity
    });
  };

  handleDropDown(text) {
    Object.entries(this.props.communities).map(([index, item]) => {
      if (item.value == text) {
        const key = item.k;
        this.setState({
          pickedCommunity: key,
          communityName: JSON.stringify(item.value),
          buttonDisabled: false
        });
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.props.communities === []) return;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ ...styles.joinCommunityContainer, ...Shadows }}>
          <View style={{ ...styles.textContainer }}>
            <Text style={styles.headline20}>Einer Community beitreten</Text>
            <Text style={{ ...styles.text16, ...styles.description }}>
              Bitte wähle eine Community aus. Solltest du keine geeignete
              finden, kannst du auch selbst eine erstellen.
            </Text>
          </View>

          <View style={styles.picker}>
            <Dropdown
              label={this.state.dropdownLabel}
              itemPadding={8}
              fontSize={16}
              itemCount={3}
              data={this.props.communities}
              onChangeText={text => this.handleDropDown(text)}
            />
          </View>

          <RkButton
            rkType={this.state.buttonDisabled ? 'smallGrey' : 'smallLight'}
            disabled={this.state.buttonDisabled}
            onPress={() => this.handleJoinCommunity()}
          >
            <Text style={FontStyles.text20WhiteBold}>Beitreten</Text>
          </RkButton>
        </View>

        <View style={{ ...styles.createCommunityContainer, ...Shadows }}>
          <Text style={styles.headline20}>
            Du möchtest selbst eine Community erstellen?
          </Text>
          <Text style={styles.text16}>
            In ein paar Schritten eine eigene erstellen.
          </Text>
          <Text onPress={() => navigate('CreateNew')} style={styles.link16}>
            Eine Community erstellen.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: makeSelectUserId(state),
    loggedIn: makeSelectAuthState(state),
    authError: makeSelectAuthError(state),
    communityId: makeSelectCommunity(state),
    communities: makeSelectCommunityList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCommunities: () => dispatch(loadCommunities()),
    addCommunityToUser: data => dispatch(addCommunity(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommunity);
