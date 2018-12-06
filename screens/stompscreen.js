import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  ListView,
  Picker,
  Dimensions,
} from "react-native";
import { WebBrowser } from "expo";
import { LinearGradient } from 'expo';
import { MapView } from "expo";
import { MonoText } from "../components/StyledText";
import RamblDetailComponent from "./RamblDetailScreen.js";
import LoadingScreenComponent from "./LoadingScreen.js";
import RamblLoadedComponent from "./RamblLoaded.js";
import RamblCompletedComponent from "./RamblComplete.js";
import ContinueRamblComponent from "./ContinueRambling.js";
import TabNavigator from "../navigation/TabNavigator.js";
import RateandStompComponent from "./RateandStomp.js";
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default class StompScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 80}}>
      <Text style={this.props.screenProps.globalStyle.confirmtationText}>Footprint successfully stomped! You can check your progress on your profile page. </Text>
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

// if (this.state.value === "Stomps") {
//   displayView = (
//     <View style={styles.view}>
//       <LinearGradient
//         colors={[ "#327ba7",'#00BFFF']}
//         style={{  alignItems: "center" }}
//       ><View style={styles.header}></View></LinearGradient>
//         <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
//       <View style={{width: Dimensions.get('window').width, height: 230,backgroundColor: '#353535', padding: 5, marginTop: 5}}>
//       <Text style={this.props.screenProps.globalStyle.message}> Active Stomps </Text>
//       <FlatList style={this.props.screenProps.globalStyle.flatlist}
//         data={this.getActiveStomps()}
//         renderItem={({item}) => <TouchableOpacity disabled = {true} style={this.props.screenProps.globalStyle.stompContainer}>
//         <Text style={this.props.screenProps.globalStyle.stompHeader}>Stomp on {item.title} for {item.stake} ({item.stake_time})</Text>
//         <View style ={styles.progressContainer}>
//         <AnimatedCircularProgress
//                 size={80}
//                 width={10}
//                 fill={item.percent}
//                 tintColor="#00BFFF"
//                 backgroundColor="#686666">
//                 {
//                   (fill) => (
//                        <Text style = {styles.points}>
//                          {item.stake}
//                        </Text>
//                      )
//                 }
//                 </AnimatedCircularProgress>
//                 </View>
//                 <Text style = {styles.points}> Points </Text>
//         <Text style={this.props.screenProps.globalStyle.stompDetail}>You have {item.got} out of {item.needed} Ramblrs needed to rate this footprint, and {item.timeLeft} out of {item.stake_total} remaining. </Text>
//         </TouchableOpacity>}/>
//         </View>
//         <View style={{width: Dimensions.get('window').width, height: 230,backgroundColor: '#353535', padding: 5, marginTop: 5}}>
//         <Text style={this.props.screenProps.globalStyle.message}> Inactive Stomps </Text>
//         <FlatList style={this.props.screenProps.globalStyle.flatlist}
//           data={this.getInactiveStomps()}
//           renderItem={({item}) => <TouchableOpacity disabled = {true} style={this.props.screenProps.globalStyle.stompContainer}>
//           <Text style={this.props.screenProps.globalStyle.stompHeader}>Stomp on {item.title} for {item.stake} ({item.stake_time})</Text>
//           <View style ={styles.progressContainer}>
//           <AnimatedCircularProgress
//                   size={80}
//                   width={10}
//                   fill={item.percent}
//                   tintColor="#00BFFF"
//                   backgroundColor="#686666">
//                   {
//                     (fill) => (
//                          <Text style = {styles.points}>
//                            {item.stake}
//                          </Text>
//                        )
//                   }
//                   </AnimatedCircularProgress>
//                   </View>
//                   <Text style = {styles.points}> Points </Text>
//           <Text style={this.props.screenProps.globalStyle.stompDetail}>You got {item.got} out of {item.needed} Ramblrs needed to rate this footprint. {item.outcome} </Text>
//           </TouchableOpacity>}/>
//       </View>
//     </View>
//     )
//   }
