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

import FootprintDetailComponent from './FootprintDetailScreen.js';
import RateandStompComponent from './RateandStomp.js';
import StompGeneratedComponent from './stompGenerated.js';
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
        complete: false,
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

    if(this.props.rambl.footprints.filter((footprint) => !footprint.visited).length === 0){
      // Setting rambl as completed.
      this.setState({complete: true});
      const newRambl = this.props.rambl;
      newRambl.key = (this.props.pastRambls.length + 1).toString();
      this.props.setGlobalState({pastRambls: [this.props.rambl, ...this.props.pastRambls]});
    }

    this.props.setGlobalState({currentRambl: currentRambl});
    this.setState({currentFootprintState: "unselected", currentFootprint: null});
  }

  getFinishButton(){
    console.log(this.state.complete);
    if(this.state.complete){
      return(
        <View style={{flex:0, flexDirection: "row", justifyContent: "space-evenly", margin: 10}} >
        <TouchableOpacity style={this.props.screenProps.globalStyle.purpleButton} onPress={()=>this.props.setRamblState("Complete")}>
          <Text style={this.props.screenProps.globalStyle.buttonText}>
            Complete!
          </Text>
        </TouchableOpacity>
      </View>
      )
    } else {
      return(
        <View style={{flex:0, flexDirection: "row", justifyContent: "space-evenly", margin: 10}}>
        <TouchableOpacity style={this.props.screenProps.globalStyle.purpleButton} onPress={()=> this.setState({modalOpen: true})}>
          <Text style={this.props.screenProps.globalStyle.buttonText}>
            Finish Rambl
          </Text>
        </TouchableOpacity>
        </View>
      )
    }
  }

  getModal(){
    if(this.state.modalOpen){
      return(
        <View style={{
            position: "absolute",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        >
          <View
            style={{top: 250, height: 150, backgroundColor: '#686666', padding: 20, borderRadius: 3,}}
            >
            <Text style={this.props.screenProps.globalStyle.message}>Are you sure you want to exit this Rambl? It isn't complete and won't be saved to your history.</Text>
            <View
              style={{flex:0, flexDirection: "row", justifyContent: "space-evenly", margin: 10}}
              >
              <TouchableOpacity style={this.props.screenProps.globalStyle.purpleButton} onPress={()=> this.props.setRamblState("Detail")}>
                <Text style={this.props.screenProps.globalStyle.buttonText} >Finish</Text>
              </TouchableOpacity>
              <TouchableOpacity style={this.props.screenProps.globalStyle.purpleButton} onPress={()=> this.setState({modalOpen: false})}>
                <Text style={this.props.screenProps.globalStyle.buttonText} >Keep Rambling!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }else{
      return null;
    }
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
          {this.getFinishButton()}
          {this.getModal()}
        </View>
      );
    }
    if(this.state.currentFootprintState === "selected"){
      return (<RateandStompComponent {...this.props} handleStomp={()=>{this.setState({currentFootprintState: "GeneratedStomp"})}} setFootprintVisited={this.setFootprintVisited} footprint={this.state.activeFootprint}/>);
    }
    if(this.state.currentFootprintState === "GeneratedStomp"){
      return(<StompGeneratedComponent {...this.props} setRamblState={() => this.setState({currentFootprintState: "unselected"})} />);
    }

  }
}
