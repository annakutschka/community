import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CommunityChatScreen from '../screens/CommunityChatScreen';
import Colors from '../constants/Colors';
import CommunityMembers from '../screens/CommunityMembers';
import UserProfileScreen from '../screens/UserProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ImpressumScreen from '../screens/ImpressumScreen';
import DSGVOScreen from '../screens/DSGVOScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Mitteilungen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
};

const FeedStack = createStackNavigator({
  Feed: FeedScreen
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Anzeigen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-today' : 'md-today'}
    />
  )
};

const AddModalStack = createStackNavigator(
  {
    AddModal: () => null
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Add',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          size={40}
          name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
      ),
      tabBarOnPress: () => {
        navigation.navigate('AddNew');
      }
    })
  }
);

const MessagesStack = createStackNavigator(
  {
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    CommunityChat: {
      screen: CommunityChatScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: tabbarVisible(navigation, 'CommunityChat'),
      tabBarLabel: 'Chat',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
        />
      )
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Menu: {
      screen: MenuScreen
    },
    Members: {
      screen: CommunityMembers
    },
    UserProfile: {
      screen: UserProfileScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Impressum: {
      screen: ImpressumScreen
    },
    DSGVO: {
      screen: DSGVOScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: tabbarVisible(navigation, 'Menu'),
      tabBarLabel: 'Profil',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
        />
      ),
      mode: Platform.OS === 'ios' ? 'modal' : 'card'
    })
  }
);

// Method to check if tabBar needs to be hidden
const tabbarVisible = (navigation, exception) => {
  const { routes } = navigation.state;

  let showTabbar = true;
  routes.forEach(route => {
    if (route.routeName === exception) {
      showTabbar = false;
    }
  });

  return showTabbar;
};

export default createBottomTabNavigator(
  {
    HomeStack,
    FeedStack,
    AddModalStack,
    MessagesStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      tintColor: '#333',
      activeTintColor: '#aaa',
      style: {
        backgroundColor: Colors.white,
        borderTopColor: 'transparent',
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: { height: 7 },
        shadowOpacity: 0.75,
        shadowRadius: 5
      }
    }
  }
);
