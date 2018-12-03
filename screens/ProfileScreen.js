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
        <View style = {{ alignItems: "center", marginTop: 20, marginBottom: 10}}>
      <Text style={this.props.screenProps.globalStyle.header}>Hello, {this.props.screenProps.globalState.username}</Text></View>
      <Text style={this.props.screenProps.globalStyle.message}>Current Location: {this.props.screenProps.globalState.location}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Points: {this.props.screenProps.globalState.points}</Text>
      <View style = {{ alignItems: "center"}}>
        <View style={this.props.screenProps.globalStyle.purpleButton}>
        <Text style={this.props.screenProps.globalStyle.buttonText}>Settings</Text>
        </View>
        </View>
     </View>
    );
  }
}

const style = StyleSheet.create({
  test: {
    backgroundColor: '#FFFFFF',
  }
})
