import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

import RamblDetailComponent from './RamblDetailScreen.js';
import HistoryDetailComponent from './HistoryScreen.js';
import {Icon} from 'react-native-elements'

export default class RamblLoadedComponent extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //     component: <LoadingScreenComponent/>
    //   };
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 80}}>
      <Text style={this.props.screenProps.globalStyle.message}>Your Rambl Has Been Loaded!</Text>
      <Icon
        style=
        {{flex:1,
          shadowColor: "white",
          shadowOffset: {width: 1, height: -1},
          shadowRadius: 10}}
        name = "check"
        color = '#327ba7'
        size = {200}/>
        <View style = {{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => this.props.setRamblState("Detail")}>
            <View style={this.props.screenProps.globalStyle.purpleButton} >
            <Text style={this.props.screenProps.globalStyle.message}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.setRamblState("Rambling")}>
            <View style={this.props.screenProps.globalStyle.purpleButton}>
            <Text style={this.props.screenProps.globalStyle.message}>Start!</Text>
            </View>
          </TouchableOpacity>

       </View>

      </View>
    );
  }
}
