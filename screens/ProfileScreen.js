import React from 'react';
import { ExpoConfigView } from '@expo/samples';
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
      <Text style={this.props.screenProps.globalStyle.message} >Username: {this.props.screenProps.globalState.username}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Current Location: {this.props.screenProps.globalState.location}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Points: {this.props.screenProps.globalState.points}</Text>
      <TabNavigator
        tabs={[
          {title: "tab 1"},
          {title: "tab 2"},
          {title: "tab 3"},
          {title: "tab 4"},
        ]}
        onPress={this.handleTabSelect}
        />
    </View>
    );
  }
}

const style = StyleSheet.create({
  test: {
    backgroundColor: '#FFFFFF',
  }
})
