import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CurrentScreen from '../screens/CurrentScreen';
import ProfileScreen from '../screens/AdjustedProfile';
import FAQScreen from '../screens/FAQ';
import StompScreen from '../screens/stompscreen.js'

const CurrentStack = createStackNavigator({
  Current: CurrentScreen,
});

CurrentStack.navigationOptions = {
  tabBarLabel: 'Rambl',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-options'}
    />
  ),
};

const StompStack = createStackNavigator({
  Stomp: StompScreen,
});

StompStack.navigationOptions = {
  tabBarLabel: 'Stomps',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-options'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const FAQStack = createStackNavigator({
  FAQ: FAQScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'FAQs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  CurrentStack,
  StompStack,
  ProfileStack,
  FAQStack
});
