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
import ContinueRamblComponent from "./ContinueRambling.js";
import TabNavigator from "../navigation/TabNavigator.js";
import RateandStompComponent from "./RateandStomp.js";

export default class HistoryScreenComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      values: ["My Rambls", "Friends' Rambls"],
      value: "My Rambls",
      currentView: "unselected"
    };
    this._onChange = this._onChange.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
    this.getMyRambls = this.getMyRambls.bind(this);
    this.getMyUsername = this.getMyUsername.bind(this); // added this
    this.getMyLocation = this.getMyLocation.bind(this); // added this
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
    this.handleRamblPress = this.handleRamblPress.bind(this);
    this.getFriendsRamblsMyLocation = this.getFriendsRamblsMyLocation.bind(this);
    this.getFriendsRamblsNotMyLocation = this.getFriendsRamblsNotMyLocation.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
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

  handleBackPress(){
    this.setState({currentView: "unselected"});
  }

  render() {
    var displayView = null;
    if (this.state.currentView === "selected") {
      console.log("ABOUT TO RENDER COMP");
      return <RamblDetailComponent />;
      //return <RateandStompComponent {...this.props} />;
    }
    if (this.state.currentView === "unselected") {
      if (this.state.value === "My Rambls") {
        displayView = (
          <View  style={this.props.screenProps.globalStyle.view}>
            <View style={{width: Dimensions.get('window').width-20, height: 630,backgroundColor: '#353535', padding: 10, marginTop: 5}}>
            <FlatList style={this.props.screenProps.globalStyle.flatlist}
              data={this.getMyRambls()}
              renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
              <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
              </TouchableOpacity>}/>
              </View>
              </View>
            )
          }
          if(this.state.value === "Friends\' Rambls"){
            console.log(this.getMyLocation());
            displayView = (
              <View  style={this.props.screenProps.globalStyle.view}>
                <Text style={this.props.screenProps.globalStyle.message}> Friends Rambls in Your Location </Text>
                <View style={{width: Dimensions.get('window').width-20, height:500, backgroundColor: '#353535', padding: 10, marginTop: 5, marginBottom:5}}>
              <FlatList style={this.props.screenProps.globalStyle.flatlist}
                  data={this.getFriendsRamblsMyLocation()}
                  renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
                  <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
                </TouchableOpacity>}/>
                </View>
              </View>
                )
              }

              //######################### ALL FRIENDS RAMBLS############################################
              // <Text style={this.props.screenProps.globalStyle.message}> All Friends Rambls </Text>
              // <View style={{width: Dimensions.get('window').width-20, height: 290, backgroundColor: '#353535', padding: 10, marginTop: 5, marginLeft: 10}}>
              //   <FlatList style={this.props.screenProps.globalStyle.flatlist}
              //   data={this.getFriendsRamblsNotMyLocation()}
              //   renderItem={({item}) =>
              //
              //     <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
              //     <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
              //     <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
              //     <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
              //     <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
              //   </TouchableOpacity>}/>
              //     </View>
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

            <TabNavigator
              style = {{
                justifyContent: 'space-evenly',
                height: 30,
                width: Dimensions.get('window').width,
                flexDirection: "row",
                backgroundColor: "#327ba7",
              }}
              tabStyle = {{
                fontSize: 20,
                color: "white",
                borderColor: "white",
                height: 30,
                width: (Dimensions.get('window').width)/2,

              }}
              activeStyle = {{
                borderBottomColor: "white",
                borderBottomWidth: 4,
                paddingBottom: 5,
                height: 30,
                width: (Dimensions.get('window').width)/2,
              }}
              activeTextStyle={{
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
              tabTextStyle={{
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
              tabs={[
                {title: "My Rambls"},
                {title: "Friends\' Rambls"}
              ]}
              onPress={this._onValueChange}
              activeTab={this.state.value}
            />

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
