import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import globalStyle from "./styles/appStyle.js";

var rambls = require("./data/rambls");
var users = require("./data/users");
var friends_rambls = require("./data/friends_rambls");
var past_rambls = require("./data/past_rambls");


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      // testText: "",
      //Add additional state variables here
      points: "200",
      username: "Amanda",
      location: "London"
    };
    this.setGlobalState = this.setGlobalState.bind(this);
  }

  setGlobalState(newState) {
    this.setState(newState);
  }

  getStyleSheet(globalStyle, localStyle){
    var newStyle = {};
    const globalKeys = Object.keys(globalStyle);
    const localKeys = Object.keys(localStyle);
    const allKeys = new Set([...globalKeys, ...localKeys]);
    allKeys.forEach((key) => {
      if(localStyle[key] == undefined){
        newStyle[key] = globalStyle[key];
      } else {
        newStyle[key] = localStyle[key];
      }
    });
    return newStyle;
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      const screenProps = {
        setGlobalState: this.setGlobalState,
        globalState: this.state,
        rambls: rambls,
        users: users,
        friends_rambls: friends_rambls,
        past_rambls: past_rambls,
        getStyleSheet: this.getStyleSheet,
        globalStyle: globalStyle,
      };
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator screenProps={screenProps} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121"
  }
});
