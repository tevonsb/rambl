import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
// import firebase from "firebase";
// import firebaseui from "firebaseui";
//
// var config = {
//   apiKey: "AIzaSyCYu5wok4P58FtfezFofQBuJE14HIxR3tI",
//   authDomain: "whichgig-39099.firebaseapp.com",
//   databaseURL: "https://whichgig-39099.firebaseio.com",
//   projectId: "whichgig-39099",
//   storageBucket: "whichgig-39099.appspot.com",
//   messagingSenderId: "454631199821"
// };
// const firebaseApp = firebase.initializeApp(config);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLoadingComplete: false,
        testText: "",
        //Add additional state variables here
      };
      this.setGlobalState = this.setGlobalState.bind(this);
  }

  setGlobalState(newState){
    console.log(newState);
    this.setState(newState);
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
      };
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator screenProps = {screenProps}/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
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
    backgroundColor: '#fff',
  },
});
