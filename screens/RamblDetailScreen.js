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
import {MapView} from 'expo';
import FootprintDetailComponent from './FootprintDetailScreen.js'
import marker from '../assets/images/marker.png'

export default class RamblDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getFootprints(){
    console.log(this.props.rambl.footprints);
    return this.props.rambl.footprints.map((footprint, index) => {
      return (<FootprintDetailComponent key={index.toString()} footprint={footprint} {...this.props}/>);
    });
  }

  displayFootprints(){
    var lat = (this.props.rambl.latitude-.05)+Math.random()*(.1);
    var long = (this.props.rambl.longitude-.05)+Math.random()*(.1);
    console.log(lat);
    console.log(long);
    return this.props.rambl.footprints.map((footprint, index) => {
      return ( <MapView.Marker
          coordinate = {{latitude: lat,
          longitude: long}}
          title = {footprint.title}
          image = {marker}
          />);
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
      <MapView
      style={{ flex: 1 }}
        initialRegion={{
          latitude: this.props.rambl.latitude,
          longitude: this.props.rambl.longitude,
          latitudeDelta: .05,
          longitudeDelta: .05,
        }}
        showBuildings = {true}
      >
      {this.displayFootprints()}
      </MapView>
      <Text style={this.props.screenProps.globalStyle.text}>{this.props.rambl.title}</Text>
      <Text style={this.props.screenProps.globalStyle.text}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
      <Text style={this.props.screenProps.globalStyle.text}>Footprints (Locations) in this Rambl</Text>
      {this.getFootprints()}
      </View>
    );
  }
}
