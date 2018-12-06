import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';

export default class LoadingScreenComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
      this.props.setRamblState("Generated");
    }, 1500);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    return (
      <View style={this.props.screenProps.globalStyle.view}>
        <View style={{flex: 0, flexDirection: "row", justifyContent: "space-evenly"}}>
          <Text style={{color: "white", fontSize:30, marginTop: 70, marginBottom: 10}}>Your Rambl is Loading...</Text>
          </View>
        <PulseIndicator color = "#327ba7" size = {200}/>
      </View>
    );
  }
}
