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
      if(tab.title === this.props.activeTab){
        return <TouchableOpacity key={tab.title} onPress={() => this.props.onPress(tab.title)} style={this.props.activeStyle}><Text style={this.props.activeTextStyle} >{tab.title}</Text></TouchableOpacity>
      }
      return <TouchableOpacity onPress={() => this.props.onPress(tab.title)} key={tab.title} style={this.props.tabStyle}><Text style={this.props.tabTextStyle}>{tab.title}</Text></TouchableOpacity>
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
