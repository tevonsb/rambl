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
import FootprintDetailComponent from './FootprintDetailScreen.js'

export default class RamblDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getFootprints(){
    console.log(this.props.rambl.footprints);
    return this.props.rambl.footprints.map((footprint, index) => {
      return (<FootprintDetailComponent key={index.toString()} footprint={footprint}/>);
    });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     // Other info to add
     // Friends who have gone on this rambl
     // Current Stake on this rambl
     // map of this rambl
     console.log(this.props.screenProps);
    return (
      <View style={{flex:1}}>
      <Text style={this.props.screenProps.globalStyle.text}>{this.props.rambl.title}</Text>
      <Text style={this.props.screenProps.globalStyle.text}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
      <Text style={this.props.screenProps.globalStyle.text}>Footprints (Locations) in this Rambl</Text>
      {this.getFootprints()}
      </View>
    );
  }
}
