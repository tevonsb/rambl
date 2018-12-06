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

import {Icon} from 'react-native-elements'

export default class StompGeneratedComponent extends React.Component {
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
      <Text style={this.props.screenProps.globalStyle.confirmationText}>Footprint successfully stomped! You can check your progress on your profile page. </Text>
      <Icon
        style=
        {{flex:1,
          shadowColor: "white",
          shadowOffset: {width: 1, height: -1},
          shadowRadius: 10}}
        name = "check"
        color = '#00BFFF'
        size = {200}/>
        <View style = {{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => this.props.setRamblState("Rambling")}>
            <View style={this.props.screenProps.globalStyle.purpleButton}>
            <Text style={this.props.screenProps.globalStyle.buttonText}>Okay!</Text>
            </View>
          </TouchableOpacity>

       </View>

      </View>
    );
  }
}
