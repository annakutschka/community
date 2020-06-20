import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AddCommunity from '../screens/AddCommunity';
import MainTabNavigator from './MainTabNavigator';
import CreateCommunity from '../screens/CreateCommunity';
import AddModalScreen from '../screens/AddModalScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ConsentScreen from '../screens/ConsentScreen';

// For new users, choose community or create one
const WelcomeStackNavigator = createStackNavigator(
  {
    JoinCommunity: AddCommunity,
    CreateNew: CreateCommunity
  },
  {
    initialRouteName: 'JoinCommunity'
  }
);

const LoginStackNavigator = createStackNavigator(
  {
    Auth: LoginScreen,
    Consent: ConsentScreen
  },
  {
    initialRouteName: 'Auth'
  }
);

const AddNewStackNavigator = createStackNavigator(
  {
    AddNew: {
      screen: AddModalScreen
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerMode: 'screen',
      mode: 'modal'
    }
  }
);

// For modal to work, tab bar and modal on same level
const MainStackNavigator = createStackNavigator(
  {
    Tab: MainTabNavigator,
    AddNew: {
      screen: AddNewStackNavigator,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStackNavigator,
      AuthLoading: LoadingScreen,
      Main: MainStackNavigator,
      Welcome: WelcomeStackNavigator,
      Entry: WelcomeScreen
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
