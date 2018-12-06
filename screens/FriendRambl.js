import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  Picker,
  Dimensions,
} from "react-native";
import { WebBrowser } from "expo";
import { LinearGradient } from 'expo';
import { MapView } from "expo";
import { MonoText } from "../components/StyledText";
import RamblDetailComponent from "./RamblDetailScreen.js";
import LoadingScreenComponent from "./LoadingScreen.js";
import RamblLoadedComponent from "./RamblLoaded.js";
import RamblCompletedComponent from "./RamblComplete.js";
import ContinueRamblComponent from "./ContinueRambling.js";
import TabNavigator from "../navigation/TabNavigator.js";
import RateandStompComponent from "./RateandStomp.js";
import CurrentScreenComponent from "./CurrentScreen.js";

export default class FriendScreenComponent extends React.Component {

  constructor(props) {
    super(props);
    if(this.props.friendsRamblState){
      this.state = this.props.friendsRamblState;
    } else {
      this.state = {
        selectedIndex: 0,
        values: ["My Rambls", "Friends' Rambls"],
        value: "Friends' Rambls",
        currentView: "unselected"
      };
    }
    this._onChange = this._onChange.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
    this.getMyRambls = this.getMyRambls.bind(this);
    this.getMyUsername = this.getMyUsername.bind(this); // added this
    this.getMyLocation = this.getMyLocation.bind(this); // added this
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
    this.handleRamblPress = this.handleRamblPress.bind(this);
    this.getFriendsRamblsMyLocation = this.getFriendsRamblsMyLocation.bind(this);
    this.getFriendsRamblsNotMyLocation = this.getFriendsRamblsNotMyLocation.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillUnmount(){
    this.props.setGlobalState({friendsRamblState: this.state});
  }

  handleBackPress(){
    if(this.state.currentView === "selected"){
      this.setState({
        currentView: "unselected",
      })
    }
  }
  getMyRambls() {
    return this.props.pastRambls;
  }

  // added this
  getMyUsername() {
    return this.props.screenProps.globalState.username;
  }
  // added this
  getMyLocation() {
    return this.props.screenProps.globalState.location;
  }

  getFriendsRambls() {
    return this.props.screenProps.friends_rambls;
  }

  getFriendsRamblsMyLocation(){
      return this.props.screenProps.friends_rambls.filter(friend_rambl => friend_rambl.city == this.props.screenProps.globalState.location);
  }

  getFriendsRamblsNotMyLocation(){
      return this.props.screenProps.friends_rambls.filter(friend_rambl => friend_rambl.city != this.props.screenProps.globalState.location);
  }

  _onValueChange(value) {
    this.setState({ value: value });
  }

  _onChange(event) {
    this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
  }

  handleRamblPress(rambl) {
    this.setState({
      currentRambl: rambl,
      currentView: "selected"
    });
  }

  handleCancel(){
    this.setState({currentView: "unselected"});
    this.forceUpdate()
    this.props.setCurrentState("chooseFriend");
  }

  render() {
    var displayView = null;
    if(this.state.currentView === "selected"){
      const thisRambl = this.state.currentRambl;
      return (
        <RamblDetailComponent cancel={this.handleCancel} cancelLocation={true} {...this.props} rambl={thisRambl}/>
      )
    }
    if (this.state.currentView === "unselected") {
          if(this.state.value === "Friends\' Rambls"){
            displayView = (
              <View style={this.props.screenProps.globalStyle.view}>
                <Text style={this.props.screenProps.globalStyle.message}> Friends Rambls in Your Location </Text>
                <View style={{width: Dimensions.get('window').width-20, height:590, backgroundColor: '#353535', padding: 10, marginTop: 5}}>
                  <FlatList style={this.props.screenProps.globalStyle.flatlist}
                    data={this.getFriendsRamblsMyLocation()}
                    renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
                      <Text style={this.props.screenProps.globalStyle.message}>{item.title}, {item.city}</Text>
                      <Text style={this.props.screenProps.globalStyle.detail}>Rambl'd by {item.who} in {item.month} </Text>
                      <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                      <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
                  </TouchableOpacity>}/>
                </View>
                <View style = {{padding: 10}}>
                <TouchableOpacity
                  style={{marginTop: 0, marginBottom: 5,alignSelf: "center"}}
                  onPress={() => this.props.setCurrentState("map")}>
                  <View style={this.props.screenProps.globalStyle.purpleButton}>
                    <Text style={this.props.screenProps.globalStyle.buttonText}> {"< Back to Map"}</Text>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
                )
              }
        // if(this.state.value === "Friends\' Rambls"){
        //   displayView = (
        //     <View  style={this.props.screenProps.globalStyle.view}>
        //       <FlatList
        //         data={this.getFriendsRambls()}
        //         renderItem={({item}) => <Text style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>{this.getMyLocation()==item.city ? item.title: ""}</Text>}/>
        //         </View>
        //       )
        //     }
      return (
        <View style={{flex:1}}>

          {displayView}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
