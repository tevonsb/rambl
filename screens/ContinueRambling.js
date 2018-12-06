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
  View
} from 'react-native';

import FootprintDetailComponent from './FootprintDetailScreen.js';
import RateandStompComponent from './RateandStomp.js';
import {Icon} from 'react-native-elements'

export default class ContinueRambleComponent extends React.Component {
  constructor(props){
    super(props);
    if(this.props.continueRamblingState){
      this.state = this.props.continueRamblingState;
    } else {
      this.state ={
        footprints: this.props.rambl.footprints,
        activeFootprint: null,
        currentFootprintState: "unselected",
      }
    }
    this.handleVisitPress = this.handleVisitPress.bind(this);
    this.setFootprintVisited = this.setFootprintVisited.bind(this);
  }

  componentWillUnmount(){
    this.props.setGlobalState({continueRamblingState: this.state});
  }

  handleVisitPress(footprint){
    this.setState({
      activeFootprint: footprint,
      currentFootprintState: "selected",
    });
  }

  setFootprintVisited(){
    var currentRambl = this.props.rambl;
    currentRambl.footprints.forEach((footprint) => {
      if(footprint.title === this.state.activeFootprint.title){
        footprint.visited = true;
      }
    });

    if(this.props.ramblfootprints.filter((footprint) => !footprint.visited).length === 0){
      // Setting rambl as completed.
      this.props.setGlobalState({})
    }

    this.props.setGlobalState({currentRambl: currentRambl});
    this.setState({currentFootprintState: "unselected", currentFootprint: null});
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    if(this.state.currentFootprintState === "unselected"){
      return (
        <View style={this.props.screenProps.globalStyle.view}>
        <View style={this.props.screenProps.globalStyle.questionContainer}>
          <Text style={this.props.screenProps.globalStyle.announcementText}>Let's get going!</Text>
          </View>
          <FootprintDetailComponent height={500} action="Visit" handleVisitPress={this.handleVisitPress} {...this.props} />
        </View>
      );
    }
    if(this.state.currentFootprintState === "selected"){
      return (<RateandStompComponent {...this.props} setFootprintVisited={this.setFootprintVisited} footprint={this.state.activeFootprint}/>);
    }
  }
}
