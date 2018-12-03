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
    this.state ={
      footprints: this.props.rambl.footprints,
      activeFootprint: null,
      currentFootprintState: "unselected",
    }
    this.handleVisitPress = this.handleVisitPress.bind(this);
  }

  handleVisitPress(footprint){
    this.setState({
      activeFootprint: footprint,
      currentFootprintState: "selected",
    })
  }

  getFootprints(){
    return this.props.rambl.footprints.map((footprint, index) => {
      return (<FootprintDetailComponent key={index.toString()} footprint={footprint} {...this.props} action="Visit" handleVisitPress={()=>this.handleVisitPress(footprint)}/>);
    });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     if(this.state.currentFootprintState === "unselected"){
       return (
         <View style={this.props.screenProps.globalStyle.view}>
         <Text style={this.props.screenProps.globalStyle.message}>You are Rambling!</Text>
         {this.getFootprints()}
         </View>
       );
     }
     if(this.state.currentFootprintState === "selected"){
       return (<RateandStompComponent {...this.props} footprint={this.state.activeFootprint}/>)
     }
  }
}
