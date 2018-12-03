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
<<<<<<< HEAD
        return(
          <View style={this.props.screenProps.globalStyle.footprintContainer}>
          <Text style={this.props.screenProps.globalStyle.footprintItem}>{this.props.footprint.title}</Text>
          <Text style={this.props.screenProps.globalStyle.detail}>Category: {this.props.footprint.category}</Text>
          {this.getAction()}
          </View>
        )
      }
    }
=======

    return (
      <View style={this.props.screenProps.globalStyle.rambl}>
      <Text style={this.props.screenProps.globalStyle.footprintItem}>{this.props.footprint.title}</Text>
      <Text style={this.props.screenProps.globalStyle.footprintDetail}>Category: {this.props.footprint.category}</Text>
      <Text style={this.props.screenProps.globalStyle.footprintDetail}>Description: {this.props.footprint.description}</Text>
      {this.getAction()}
      </View>
    );
  }
}
>>>>>>> 231a78421d970da1e1f43ae92952a162c8fabf31
