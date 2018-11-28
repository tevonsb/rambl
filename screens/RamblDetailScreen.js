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
} from 'react-native';

export default class RamblDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex:1}}>
      <Text>{this.props.rambl.title}</Text>
      <Text>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
      </View>
    );
  }
}
