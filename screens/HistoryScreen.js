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
  FlatList
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import RamblDetailComponent from "./RamblDetailScreen.js";

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "Past Rambls"
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      testText: "",
<<<<<<< HEAD
      values: ['My Rambls', 'Friends\' Rambls'],
      value: 'My Rambls',
=======
      values: ["My Rambls", "Friends' Rambls"],
      value: "My Rambls",
      currentView: "unselected"
>>>>>>> 22eace4927e117be1878e098b56e494d1b483c26
    };
    this._onChange = this._onChange.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
    this.getMyRambls = this.getMyRambls.bind(this);
<<<<<<< HEAD
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
=======
    this.getMyUsername = this.getMyUsername.bind(this); // added this
    this.getMyLocation = this.getMyLocation.bind(this); // added this
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
    this.handleRamblPress = this.handleRamblPress.bind(this);
>>>>>>> 22eace4927e117be1878e098b56e494d1b483c26
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
    console.log(value);
  }

  _onChange(event) {
    this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
  }

<<<<<<< HEAD
  render(){
    var currentView = null;
    if(this.state.value === "My Rambls"){
      currentView = (
        <View style={{flex: 1, padding: 22}}>
          <FlatList
            data={this.getMyRambls()}
            renderItem={({item}) => <Text>{item.title}</Text>}
            />
        </View>
      )
    }
    if(this.state.value === "Friends\' Rambls"){
      currentView = (
        <View style={{flex: 1, padding: 22}}>
          <FlatList
            data={this.getFriendsRambls()}
            renderItem={({item}) => <Text>{item.title}</Text>}
            />
        </View>
      )
    }
    return (
      <View
        style={{ flex: 1 }}
        >
=======
  handleRamblPress(rambl) {
    this.setState({
      currentRambl: rambl,
      currentView: "selected"
    });
  }

  render() {
    var displayView = null;

    if (this.state.currentView === "selected") {
      return <RamblDetailComponent rambl={this.state.currentRambl} />;
    }
    if (this.state.currentView == "unselected") {
      if (this.state.value === "My Rambls") {
        displayView = (
          <View style={{ flex: 1, padding: 22 }}>
            <FlatList
              data={this.getMyRambls()}
              renderItem={({ item }) => (
                <Text onPress={() => this.handleRamblPress(item)}>
                  {item.title}
                </Text>
              )}
            />
          </View>
        );
      }
      if (this.state.value === "Friends' Rambls") {
        displayView = (
          <View style={{ flex: 1, padding: 22 }}>
            <FlatList
              data={this.getFriendsRambls()}
              renderItem={({ item }) => (
                <Text onPress={() => this.handleRamblPress(item)}>
                  {item.title}
                </Text>
              )}
            />
          </View>
        );
      }
    }
    return (
      <View style={{ flex: 1 }}>
>>>>>>> 22eace4927e117be1878e098b56e494d1b483c26
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

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
