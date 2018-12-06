import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { LinearGradient } from "expo";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Dimensions,
} from 'react-native';
import {MapView} from 'expo';
import FootprintDetailComponent from './FootprintDetailScreen.js';

import LoadingScreenComponent from './LoadingScreen';
import RamblLoadedComponent from './RamblLoaded.js';
import RateandStompComponent from './RateandStomp.js';
import ContinueRambleComponent from './ContinueRambling.js';
import RamblCompletedComponent from './RamblComplete.js';
import StompGeneratedComponent from './stompGenerated.js';
import CurrentScreenComponent from "./CurrentScreen.js";


//Rambl currentRamblState options: Details, Loading, Generated, Rambbling, Rate, Complete

export default class RamblDetailComponent extends React.Component {

  constructor(props){
    super(props);
    console.log('CURRENT STATE');
    console.log(this.props.ramblingState);
    if(this.props.ramblingState !== null){
      this.state = this.props.ramblingState;
    } else {
      this.state = {
        currentRamblState: "Detail",
        currentFootprint: null,
      }
    }
    this.setRamblState = this.setRamblState.bind(this);
    this.handleFollowPress = this.handleFollowPress.bind(this);
  }

  componentWillUnmount(){
    this.props.setGlobalState({ramblingState: this.state});
  }
  getFootprints(){
    return (<FootprintDetailComponent height={250 } {...this.props}/>);
  }

  displayFootprints(){
    return this.props.rambl.footprints.map((footprint, index) => {
      return ( <MapView.Marker

        key = {index.toString()}
          coordinate = {{latitude: (this.props.rambl.footprints[index].latitude),
          longitude: (this.props.rambl.footprints[index].longitude)}}
          title = {footprint.title}
          pinColor = {"00BFFF"}
          description = {footprint.Address}
          />);
    });
  }

  handleFollowPress(){
    this.props.setGlobalState({currentRambl: this.props.rambl});
    this.setState({currentRamblState: "Loading"});
  }

  displayFollow(){
    if(this.props.rambl.city ==="London"){
      return(
        <View style = {{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TouchableOpacity onPress={()=> this.setState({currentRamblState: "Create"})}>
          <View style={this.props.screenProps.globalStyle.purpleButton}>
          <Text style={this.props.screenProps.globalStyle.buttonText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.handleFollowPress()}>
          <View style={this.props.screenProps.globalStyle.purpleButton}>
          <Text style={this.props.screenProps.globalStyle.buttonText}>Follow</Text>
          </View>
        </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View style = {{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TouchableOpacity onPress={()=> this.setState({currentRamblState: "Create"})}>
        <View style={this.props.screenProps.globalStyle.purpleButton}>
        <Text style={this.props.screenProps.globalStyle.buttonText}>Cancel</Text>
        </View>
        </TouchableOpacity>
        </View>
      );
    }
  }

  setRamblState(state){
    this.props.setGlobalState({continueRamblingState: null});
    this.setState({
      currentRamblState: state,
    });
  }

  render() {
    if(this.state.currentRamblState === "Detail"){
      return (
        <View style={this.props.screenProps.globalStyle.view}>
          <LinearGradient
            colors={["#9839F7", "transparent","#327ba7"]}
            style={{  }}
          >
          <MapView
            style={this.props.screenProps.globalStyle.map}
            initialRegion={{
              latitude: this.props.rambl.latitude,
              longitude: this.props.rambl.longitude,
              latitudeDelta: this.props.rambl.latitudeDelta + .01,
              longitudeDelta: this.props.rambl.longitudeDelta +.01,
            }}
            showBuildings = {true}
          >
          {this.displayFootprints()}
          </MapView>
          </LinearGradient>
          <Text style={this.props.screenProps.globalStyle.header}>{this.props.rambl.title}, {this.props.rambl.city}</Text>
          <Text style={this.props.screenProps.globalStyle.detail}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
          {this.getFootprints()}
          {this.displayFollow()}
      </View>
      );
    }

    //Rambl Loading Screen
    if(this.state.currentRamblState === "Loading"){
      return (<LoadingScreenComponent {...this.props} setRamblState={this.setRamblState}/>);
    }

    if(this.state.currentRamblState === "Generated"){
      return (<RamblLoadedComponent {...this.props} setRamblState={this.setRamblState}/>);
    }

    if(this.state.currentRamblState === "Rambling"){
      return (<ContinueRambleComponent {...this.props} setRamblState={this.setRamblState} />);
    }

    if(this.state.currentRamblState === "Rate"){
      return (<RateandStompComponent {...this.props} footprint={this.state.currentFootprint} setRamblState={this.setRamblState}/>);
    }

    if(this.state.currentRamblState === "Complete"){
      return (<RamblCompletedComponent {...this.props} setRamblState={this.setRamblState}/>);
    }

    if(this.state.currentRamblState === "Create"){
      return (<CurrentScreenComponent {...this.props} setRamblState={this.setRamblState}/>);
    }

    if(this.state.currentRamblState === "GeneratedStomp"){
      return(<StompGeneratedComponent {...this.props} setRamblState={this.setRamblState} />);
    }
  }
}
