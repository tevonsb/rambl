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

export default class FootprintDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

     // Other info to add
     // Friends who have gone on this rambl
     // Current Stake on this rambl
     // map of this rambl

    return (
      <View style={{flex:1, flexDirection: 'row'}}>
      <Text>{this.props.footprint.title}</Text>
      <Text>{this.props.footprint.rating}</Text>
      <Text>This is a footprint</Text>
      </View>
    );
  }
}
