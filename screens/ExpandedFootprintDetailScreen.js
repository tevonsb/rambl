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

export default class ExpandedFootprintDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getAction(){
    if(this.props.action === "Visit"){
      return (
        <View style = {{
          // flex: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={()=> this.props.handleVisitPress}>
        <View style={this.props.screenProps.globalStyle.purpleButton}>
        <Text style={this.props.screenProps.globalStyle.buttonText}>Visit</Text>
        </View>
        </TouchableOpacity>
        </View>
        // <Button onPress={this.props.handleVisitPress} title="Visit"></Button>
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
        <View style={this.props.screenProps.globalStyle.rambl}>
        <Text style={this.props.screenProps.globalStyle.footprintItem}>{this.props.footprint.title}</Text>
        <Text style={this.props.screenProps.globalStyle.detail}>Category: {this.props.footprint.category}</Text>
        <Text style={this.props.screenProps.globalStyle.detail}>Description: {this.props.footprint.description}</Text>
        {this.getAction()}
        </View>
      )
    }
  }
