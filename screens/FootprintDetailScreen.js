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

  getAction(){
    if(this.props.action === "Visit"){
      return (
        <Button onPress={this.handleVisitPress}>Visit</Button>
      )
    }
    if(this.props.action === "Visited"){
      return (
        <Text>Visited</Text>
      )
    }
    return null;
  }
  render() {

    return (
      <View style={this.props.screenProps.globalStyle.footprintlist}>
      <Text style={this.props.screenProps.globalStyle.footprintitem}>{this.props.footprint.title}</Text>
      <Text style={this.props.screenProps.globalStyle.footprintitem}>{this.props.footprint.rating}</Text>
      {this.getAction}
      </View>
    );
  }
}
