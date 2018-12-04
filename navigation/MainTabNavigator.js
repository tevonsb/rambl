import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CurrentScreen from '../screens/CurrentScreen';
import ProfileScreen from '../screens/AdjustedProfile';
import FAQScreen from '../screens/FAQ'

const CurrentStack = createStackNavigator({
  Current: CurrentScreen,
});

CurrentStack.navigationOptions = {
  tabBarLabel: 'Current',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'You',
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
  tabBarLabel: '?',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  CurrentStack,
  ProfileStack,
  FAQStack
});
