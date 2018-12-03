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
  Dimensions,
} from 'react-native';
import {MapView} from 'expo';
import FootprintDetailComponent from './FootprintDetailScreen.js';
import ExpandedFootprintDetailComponent from './ExpandedFootprintDetailScreen.js';

import LoadingScreenComponent from './LoadingScreen';
import RamblLoadedComponent from './RamblLoaded.js';
import RateandStompComponent from './RateandStomp.js';
import ContinueRambleComponent from './ContinueRambling.js';
import RamblCompletedComponent from './RamblComplete.js';
import HistoryScreenComponent from './HistoryScreen.js';
import CurrentScreenComponent from './CurrentScreen.js';
import GenerateStompComponent from './GenerateStompScreen.js';
import StompGeneratedComponent from './stompGenerated.js';


//Rambl currentRamblState options: Details, Loading, Generated, Rambbling, Rate, Complete

export default class RamblDetailComponent extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      currentRamblState: "Detail",
      currentFootprint: null,
    }
    this.setRamblState = this.setRamblState.bind(this);
  }

  getFootprints(){
    return this.props.rambl.footprints.map((footprint, index) => {
      return (<FootprintDetailComponent key={index.toString()} footprint={footprint} {...this.props}/>);
    });
  }

  displayFootprints(){
    return this.props.rambl.footprints.map((footprint, index) => {
      return ( <MapView.Marker
        key = {index.toString()}
          coordinate = {{latitude: (this.props.rambl.footprints[index].latitude),
          longitude: (this.props.rambl.footprints[index].longitude)}}
          title = {footprint.title}
          pinColor = {"#00E7FF"}
          description = {footprint.Address}
          />);
    });
  }

  displayFollow(){
    if(this.props.rambl.city ==="London"){
      return(
        <View style = {{flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'}}>
        <View style = {{flex: 1}}>
          <Button title = "Cancel" onPress={()=> this.setState({
              currentRamblState: "Create"
            })}/>
          </View>
        <View style = {{flex: 1}}>
          <Button title = "Follow" onPress={()=> this.setState({
              currentRamblState: "Loading"
            })}/>
          </View>
       </View>
      );
    }else{
      return(
        <View style = {{flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'}}>
        <View style = {{flex: 1}}>
          <Button title = "Cancel" onPress={()=> this.setState({
              currentRamblState: "History"
            })}/>
          </View>
       </View>
      );
    }
  }

  setRamblState(state){
    this.setState({
      currentRamblState: state,
    });
  }

  render() {
    //Rambl Detail Screen
    if(this.state.currentRamblState === "Detail"){
      return (
        <View style={this.props.screenProps.globalStyle.view}>
          <MapView
            style={this.props.screenProps.globalStyle.map}
            initialRegion={{
              latitude: this.props.rambl.latitude,
              longitude: this.props.rambl.longitude,
              latitudeDelta: this.props.rambl.latitudeDelta,
              longitudeDelta: this.props.rambl.longitudeDelta,
            }}
            showBuildings = {true}
          >{this.displayFootprints()}
          </MapView>
          <Text style={this.props.screenProps.globalStyle.header}>{this.props.rambl.title}</Text>
          <Text style={this.props.screenProps.globalStyle.message}>This Rambl lasts about {this.props.rambl.duration} hours.</Text>
          <Text style={this.props.screenProps.globalStyle.message}>Footprints in this Rambl:</Text>
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
      return (<RateandStompComponent {...this.props} footprint={this.state.currentFootprint} setRamblState={this.setRamblState}/>)
    }

    if(this.state.currentRamblState === "Complete"){
      return (<RamblCompletedComponent {...this.props} setRamblState={this.setRamblState}/>)
    }

    if(this.state.currentRamblState === "History"){
      return (<HistoryScreenComponent {...this.props} setRamblState={this.setRamblState}/>)
    }

    if(this.state.currentRamblState === "Create"){
      return (<CurrentScreenComponent {...this.props} setRamblState={this.setRamblState}/>)
    }

    if(this.state.currentRamblState === "generateStomp"){
      return (<GenerateStompComponent {...this.props} setRamblState={this.setRamblState}/>)
    }

    if(this.state.currentRamblState === "stompGenerated"){
      return (<StompGeneratedComponent {...this.props} setRamblState={this.setRamblState}/>)
    }


  }
}
