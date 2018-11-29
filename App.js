import React from "react";
import { Platform,
  StatusBar,
  StyleSheet,
  View ,
  Text,
  Dimensions} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import globalStyle from "./styles/appStyle.js";
import TabNavigator from "./navigation/TabNavigator";

var rambls = require("./data/rambls");
var users = require("./data/users");
var friends_rambls = require("./data/friends_rambls");
var past_rambls = require("./data/past_rambls");

import HistoryScreen from './screens/HistoryScreen';
import CurrentScreen from './screens/CurrentScreen';
import ProfileScreen from './screens/ProfileScreen';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      // testText: "",
      //Add additional state variables here
      points: "200",
      username: "Amanda",
      location: "London",
      activeScreen: "Profile"
    };
    this.setGlobalState = this.setGlobalState.bind(this);
    this.handleTabPress = this.handleTabPress.bind(this);
  }

  componentWillMount(){
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

    this.state.screens = {
      "Profile": (<ProfileScreen screenProps={screenProps}/>),
      "Current": (<CurrentScreen screenProps={screenProps} />),
      "History": (<HistoryScreen screenProps={screenProps} />),
    }
    console.log(this.state.screens[this.state.activeScreen]);
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
  handleTabPress(title){
    console.log(title);
    this.setState({
      activeScreen: title,
    });
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
          <View>
            <Text
              style={{
                backgroundColor: "#FFF",
                width: Dimensions.get('window').width,
                padding: 20}}
              >Fake Title</Text>
          </View>
          {this.state.screens[this.state.activeScreen]}
          <TabNavigator
            screenProps={this.state.screenProps}
            style={{
              justifyContent: 'space-evenly',
              height: 50,
              width: Dimensions.get('window').width,
              flexDirection: "row",
              position: "absolute",
              bottom: 0,
              backgroundColor: "#FFF",
            }}
            tabs={[
              {title: "History"},
              {title: "Current"},
              {title: "Profile"},
            ]}
            onPress={this.handleTabPress}
            />
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
