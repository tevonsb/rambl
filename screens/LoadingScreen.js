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

import RamblDetailComponent from './RamblDetailScreen.js';
import HistoryDetailComponent from './HistoryScreen.js';

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
      <View style={{flex:1,}}>
      <PulseIndicator color = "#39a1F7" size = {250}/>
      </View>
    );
  }
}
