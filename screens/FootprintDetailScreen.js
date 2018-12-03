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
        return(
          <View style={this.props.screenProps.globalStyle.footprintContainer}>
          <Text style={this.props.screenProps.globalStyle.footprintItem}>{this.props.footprint.title}</Text>
          <Text style={this.props.screenProps.globalStyle.detail}>Category: {this.props.footprint.category}</Text>
          {this.getAction()}
          </View>
        )
      }
    }
