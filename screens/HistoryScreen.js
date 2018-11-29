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
          <View style={this.props.screenProps.globalStyle.view}>
            <FlatList
              data={this.getMyRambls()}
              renderItem={({item}) => <Text style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>{item.title}</Text>}/>
              </View>
            )
          }
        if(this.state.value === "Friends\' Rambls"){
          console.log(this.getMyLocation());
          displayView = (
            <View  style={this.props.screenProps.globalStyle.view}>
              <FlatList
                data={this.getFriendsRambls()}
                renderItem={({item}) => <Text style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>{this.getMyLocation()==item.city ? item.title: ""}</Text>}/>
                </View>
              )
            }
      return (
        <View style={{ flex: 1 }}>
          <View>
            <SegmentedControlIOS
              style = {{opacity: 80,height: 50}}
              tintColor="#54bad0"
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

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
=======
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: "#fff"
//   }
// });

// const styles = StyleSheet.create({
//   container: {
//     top: 50,
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: "rgba(0,0,0,0.4)",
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: "center"
//   },
//   contentContainer: {
//     paddingTop: 30
//   },
//   welcomeContainer: {
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 20
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: "contain",
//     marginTop: 3,
//     marginLeft: -10
//   },
//   getStartedContainer: {
//     alignItems: "center",
//     marginHorizontal: 50
//   },
//   homeScreenFilename: {
//     marginVertical: 7
//   },
//   codeHighlightText: {
//     color: "rgba(96,100,109, 0.8)"
//   },
//   codeHighlightContainer: {
//     backgroundColor: "rgba(0,0,0,0.05)",
//     borderRadius: 3,
//     paddingHorizontal: 4
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: "rgba(96,100,109, 1)",
//     lineHeight: 24,
//     textAlign: "center"
//   },
//   tabBarInfoContainer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: "black",
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3
//       },
//       android: {
//         elevation: 20
//       }
//     }),
//     alignItems: "center",
//     backgroundColor: "#fbfbfb",
//     paddingVertical: 20
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: "rgba(96,100,109, 1)",
//     textAlign: "center"
//   },
//   navigationFilename: {
//     marginTop: 5
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: "center"
//   },
//   helpLink: {
//     paddingVertical: 15
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: "#2e78b7"
//   }
// });
>>>>>>> 10b154f08026024e4199ca6f277a3af2b5d4f236
