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

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'You',
  };
  constructor(props){
    super(props);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex:1}}>
      <Text>Username: {this.props.screenProps.users.globalState.username}</Text>
      <Text>Current Location: {this.props.screenProps.globalState.username}</Text>
      <Text>Points: {this.props.screenProps.globalState.points}</Text>
      </View>
    );
  }
}
