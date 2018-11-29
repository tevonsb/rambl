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

export default class ContinueRambleComponent extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //     component: <LoadingScreenComponent/>
    //   };
  }
//
//   componentDidMount(){
//
//      // Start counting when the page is loaded
//      this.timeoutHandle = setTimeout(()=>{
//           // Add your logic for the transition
//           this.setState({ component: <HistoryDetailComponent/>})
//      }, 3000);
// }
//
// componentWillUnmount(){
//      clearTimeout(this.timeoutHandle);
// }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex:1}}>
      <Text style={this.props.screenProps.globalStyle.message}>You are Rambling!</Text>
      <Image source={require('../data/loading.gif')} />
       </View>
    );
  }
}
