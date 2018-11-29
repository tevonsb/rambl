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
      >
      <MapView.Marker
          coordinate = {{latitude: 51.5387718,
          longitude: -0.2416814}}
          title = {"Dishoom"}
          image = {marker}
          />
          <MapView.Marker
              coordinate = {{latitude: 51.5087200,
              longitude: -0.2116604}}
              title = {"Regent's Park"}
              image = {marker}
              />
      </MapView>
      <Text style={this.props.screenProps.globalStyle.text}>{this.props.rambl.title}</Text>
      <Text style={this.props.screenProps.globalStyle.text}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
      <Text style={this.props.screenProps.globalStyle.text}>Footprints (Locations) in this Rambl</Text>
      {this.getFootprints()}
      </View>
    );
  }
}
