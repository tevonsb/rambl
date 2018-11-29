import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
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
    return this.props.rambl.footprints.map((footprint, index) => {
      return ( <MapView.Marker
        key = {index.toString()}
          coordinate = {{latitude: (this.props.rambl.latitude)+Math.random()*(.00799901),
          longitude: (this.props.rambl.longitude)+Math.random()*(.00899901)}}
          title = {footprint.title}
          image = {marker}
          />);
    });
  }

  displayFollow(){
    if(this.props.rambl.city ==="London"){
      return(
        <Button title = "Follow Rambl"/>
      );
    }
  }

  render() {
    return (
      <View style={this.props.screenProps.globalStyle.view}>
      <MapView
        style={this.props.screenProps.globalStyle.map}
        initialRegion={{
          latitude: this.props.rambl.latitude,
          longitude: this.props.rambl.longitude,
          latitudeDelta: .015,
          longitudeDelta: .015,
        }}
        showBuildings = {true}
      >{this.displayFootprints()}
      </MapView>
      <Text style={this.props.screenProps.globalStyle.header}>{this.props.rambl.title}</Text>
      <Text style={this.props.screenProps.globalStyle.message}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
      <Text style={this.props.screenProps.globalStyle.message}>Footprints (Locations) in this Rambl</Text>
      // {this.getFootprints()}
      {this.displayFollow()}

      </View>
    );
  }
}
