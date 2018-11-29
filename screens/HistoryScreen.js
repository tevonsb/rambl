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
  SegmentedControlIOS,
  FlatList,
  Picker
} from "react-native";
import { WebBrowser } from "expo";
import { MapView } from "expo";
import { MonoText } from "../components/StyledText";
import RamblDetailComponent from "./RamblDetailScreen.js";
import LoadingScreenComponent from "./LoadingScreen.js";

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "Past Rambls",
    headerRight: (
    <Button
    onPress={() => this.handleBackPress()}
    title="<"
    color="#fff"
  />),
  };

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
  }

  handleBackPress(){
    if(this.state.currentView === "selected"){
      this.setState({
        currentView: "unselected",
      })
    }
  }
  getMyRambls() {
    return this.props.screenProps.past_rambls;
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

  render() {
    var displayView = null;
    if (this.state.currentView === "selected") {
      return <RamblDetailComponent rambl={this.state.currentRambl} {...this.props} />;
    }
    if (this.state.currentView === "unselected") {
      if (this.state.value === "My Rambls") {
        displayView = (
          <View style={{ flex: 1, padding: 22 }}>
            <FlatList
              data={this.getMyRambls()}
              renderItem={({item}) => <Text onPress={() => this.handleRamblPress(item)}>{item.title}</Text>}/>
              </View>
            )
          }
        if(this.state.value === "Friends\' Rambls"){
          console.log(this.getMyLocation());
          displayView = (
            <View style={{flex: 1, padding: 22}}>
              <FlatList
                data={this.getFriendsRambls()}
                renderItem={({item}) => <Text onPress={() => this.handleRamblPress(item)}>{this.getMyLocation()==item.city ? item.title: ""}</Text>}/>
                </View>
              )
            }
      return (
        <View style={{ flex: 1 }}>
          <View>
            <SegmentedControlIOS
              values={this.state.values}
              selectedIndex={this.state.selectedIndex}
              onChange={this._onChange}
              onValueChange={this._onValueChange}
            />
          </View>
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
