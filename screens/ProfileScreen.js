import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { LinearGradient } from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import TabNavigator from '../navigation/TabNavigator.js';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'You',
  };
  constructor(props){
    super(props);
  }

  handleTabSelect(tabTitle){
    console.log(tabTitle);
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={this.props.screenProps.globalStyle.view}>
      <Text style={this.props.screenProps.globalStyle.message}>Hello, {this.props.screenProps.globalState.username}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Current Location: {this.props.screenProps.globalState.location}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Points: {this.props.screenProps.globalState.points}</Text>
     </View>
    );
  }
}

const style = StyleSheet.create({
  test: {
    backgroundColor: '#FFFFFF',
  }
})
