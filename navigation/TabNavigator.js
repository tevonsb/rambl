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
  Dimensions,
} from 'react-native';

export default class TabNavigator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'Rambl',
      currentTitle: 'Rambl',
    };
  }

  getTabs(){
    return this.props.tabs.map((tab) => {
      return <Text key={tab.title} onPress={() => this.props.onPress(tab.title)} style={{padding: 10}}>{tab.title}</Text>
    });
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={this.props.style}>
      {this.getTabs()}
      </View>
    );
  }
}
