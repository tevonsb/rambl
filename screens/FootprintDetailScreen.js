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

export default class FootprintDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getAction(){
    if(this.props.action === "Visit"){
      return (
        <Button onPress={this.props.handleVisitPress} title="Visit"></Button>
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
      <Text >
      <Text style={this.props.screenProps.globalStyle.footprintitemR}>{this.props.footprint.title}</Text>
      <Text style={this.props.screenProps.globalStyle.footprintitemL}>{this.props.footprint.rating}</Text>
      {this.getAction()}
    </Text>
    );
  }
}
