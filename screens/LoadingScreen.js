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

import RamblDetailComponent from './RamblDetailScreen.js';
import HistoryDetailComponent from './HistoryScreen.js';
const loadingImage = require('../data/loading.gif');

export default class LoadingScreenComponent extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //     component: <LoadingScreenComponent/>
    //   };
  }

  componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
       this.props.setRamblState("Generated");
     }, 1000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex:1}}>
      <Image source={loadingImage} />
      <Text style={this.props.screenProps.globalStyle.message}>Generating your Rambl! Sit tight.</Text>
      </View>
    );
  }
}
