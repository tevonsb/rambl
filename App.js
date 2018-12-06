import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import globalStyle from "./styles/appStyle.js";
import TabNavigator from "./navigation/TabNavigator";

var rambls = require("./data/rambls");
var users = require("./data/users");
var friends_rambls = require("./data/friends_rambls");
var past_rambls = require("./data/past_rambls");
var stomps = require("./data/stomps.json");

import CurrentScreen from "./screens/CurrentScreen";
import ProfileScreen from "./screens/AdjustedProfile";
import FAQScreen from "./screens/FAQ";
import StompScreen from "./screens/stompscreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      points: "200",
      username: "Amanda",
      location: "London",
      activeScreen: "Rambl",
      currentScreenState: null,
      ramblingState: null,
      stomps: stomps,
      pastRambls: past_rambls,
      rambls: rambls,
    };
    this.setGlobalState = this.setGlobalState.bind(this);
    this.handleTabPress = this.handleTabPress.bind(this);
  }

  componentWillMount() {
    const screenProps = {
      globalState: this.state,
      users: users,
      friends_rambls: friends_rambls,
      past_rambls: past_rambls,
      getStyleSheet: this.getStyleSheet,
      globalStyle: globalStyle,
    };
    this.setState({screenProps: screenProps});
  }

  setGlobalState(newState) {
    this.setState(newState);
  }

  getStyleSheet(globalStyle, localStyle) {
    var newStyle = {};
    const globalKeys = Object.keys(globalStyle);
    const localKeys = Object.keys(localStyle);
    const allKeys = new Set([...globalKeys, ...localKeys]);
    allKeys.forEach(key => {
      if (localStyle[key] == undefined) {
        newStyle[key] = globalStyle[key];
      } else {
        newStyle[key] = localStyle[key];
      }
    });
    return newStyle;
  }
  handleTabPress(title) {
    this.setState({
      activeScreen: title
    });
  }

  getActiveScreen(){
    if(this.state.activeScreen === "Profile"){
      return (<ProfileScreen {...this.state} screenProps={this.state.screenProps} setGlobalState={this.setGlobalState} />);
    }
    if(this.state.activeScreen === "Rambl"){
      return (<CurrentScreen {...this.state} screenProps={this.state.screenProps} setGlobalState={this.setGlobalState} currentState={this.state.currentScreenState}/>);
    }
    if(this.state.activeScreen === "FAQs"){
      return (<FAQScreen {...this.state} screenProps = {this.state.screenProps} />);
    }
    if(this.state.activeScreen === "Stomps"){
      return (<StompScreen {...this.state} screenProps = {this.state.screenProps} />);
    }
    return null;
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
      return (
        <View style={styles.container}>
          <View
            styles={{
              justifyContent: "center",
              width: Dimensions.get("window").width
            }}
          >
            <LinearGradient
              colors={["#9839F7", "#327ba7"]}
              style={{ padding: 20, alignItems: "center" }}
            >
              <Text
                style={{
                  color: "white",
                  paddingTop: 50,
                  paddingLeft: 20,
                  paddingBottom: 20,
                  fontSize: 30
                }}
              >
                {this.state.activeScreen}
              </Text>
            </LinearGradient>
          </View>
          {this.getActiveScreen()}
          <LinearGradient
            colors={["#3683B3", "#327ba7", "#245878"]}
            style={{
              height: 60,
            }}>
            <TabNavigator
              screenProps={this.state.screenProps}
              style={{
                justifyContent: 'space-evenly',
                height: 60,
                width: Dimensions.get('window').width,
                flexDirection: "row",
                position: "absolute",
                bottom: 0,
              }}
              activeTextStyle={{
                fontSize: 17,
                color: 'white',
                textAlign:"center",
                paddingTop: 10
              }}
              tabTextStyle={{
                fontSize: 17,
                color: 'white',
                textAlign:"center",
                paddingTop: 10
              }}
              activeStyle={{
                height: 60,
                width: Dimensions.get('window').width/4,
                borderTopColor: "white",
                borderTopWidth: 4,
              }}
              tabStyle={{
                height: 60,
                width: Dimensions.get('window').width/4,

              }}
              tabs={[
                { title: "Rambl" },
                {title: "Stomps"},
                { title: "Profile" },
                {title: "FAQs"}
              ]}
              onPress={this.handleTabPress}
              activeTab={this.state.activeScreen}
            />
          </LinearGradient>
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
