import React from 'react';

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
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Past Rambls',
  };

  constructor(props){
    super(props);
    this.state = {
        selectedIndex: 0,
        testText: "",
        values: ['My Rambls', 'Friends\' Rambls'],
        value: 'My Rambls',
      };
      this._onChange = this._onChange.bind(this);
      this._onValueChange = this._onValueChange.bind(this);
  }

  _onValueChange(value){
    this.setState({value: value});
    console.log(value);
  }

  _onChange(event){
    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
  }

  render(){
    var currentView = null;
    if(this.state.value === "My Rambls"){
      currentView = (
        <Text>MY RAMBLES</Text>
      )
    }
    if(this.state.value === "Friends\' Rambls"){
      currentView = (
        <Text>YO RAMBLES</Text>
      )
    }
    return (
      <View
        style={{ flex: 1 }}
      >
      <View>
          <SegmentedControlIOS
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange = {this._onChange}
            onValueChange= {this._onValueChange} />
        </View>
        {currentView}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});