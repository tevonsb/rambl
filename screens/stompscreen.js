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
    this.state = {
      value: "Active",
    }
    this._onValueChange = this._onValueChange.bind(this);
    this.getActiveStomps=this.getActiveStomps.bind(this);
    this.getInactiveStomps = this.getInactiveStomps.bind(this);
    this.getColor = this.getColor.bind(this);
  }

    getActiveStomps(){
      return this.props.stomps.filter(stomp => stomp.status!=="Complete");
    }

    getInactiveStomps(){
      return this.props.stomps.filter(stomp => stomp.status==="Complete");
    }

  _onValueChange(value) {
    this.setState({ value: value });
  }

  getColor(item){
    if(item === 100){
      return "#00ff40";
    }else{
      return 	"#585858";
    }
  }

  render() {
    var displayView = null;
    if(this.state.value === "Active"){
      displayView = (
        <View style={styles.view}>
          <View style={{width: Dimensions.get('window').width - 20, height: 640,backgroundColor: '#353535', padding: 5, marginTop: 10, marginLeft: 10,}}>
          <FlatList style={this.props.screenProps.globalStyle.flatlist}
            data={this.getActiveStomps()}
            renderItem={({item}) => <TouchableOpacity disabled = {true} style={this.props.screenProps.globalStyle.stompContainer}>
            <Text style={this.props.screenProps.globalStyle.stompHeader}>Stomp on {item.title}</Text>
            <Text style={this.props.screenProps.globalStyle.stompDetail}>Stomped {item.stake} points {item.stake_time}</Text>
            <View style ={styles.progressContainer}>
            <AnimatedCircularProgress
                    size={80}
                    width={10}
                    fill={item.percent}
                    tintColor="#00BFFF"
                    backgroundColor="#686666">
                    {
                      (fill) => (
                           <Text style = {styles.points}>
                             {item.stake}
                           </Text>
                         )
                    }
                    </AnimatedCircularProgress>
                    </View>
                    <Text style = {styles.points}> Points </Text>
            <Text style={this.props.screenProps.globalStyle.stompDetail}>You have {item.got} out of {item.needed} Ramblrs needed to rate this footprint, and {item.timeLeft} out of {item.stake_total} remaining. </Text>
            </TouchableOpacity>}/>
            </View>
        </View>
        )
    }if(this.state.value === "Complete"){
      displayView = (
        <View style={styles.view}>
            <View style={{width: Dimensions.get('window').width -20, height:640,backgroundColor: '#353535', padding: 5, marginTop: 10, marginLeft: 10, }}>
            <FlatList style={this.props.screenProps.globalStyle.flatlist}
              data={this.getInactiveStomps()}
              renderItem={({item}) => <TouchableOpacity disabled = {true} style={this.props.screenProps.globalStyle.stompContainer}>
              <Text style={this.props.screenProps.globalStyle.stompHeader}>Stomp on {item.title}</Text>
              <Text style={this.props.screenProps.globalStyle.stompDetail}>Stomped {item.stake} points on {item.stake_time}</Text>
              <View style ={styles.progressContainer}>
              <AnimatedCircularProgress
                      size={80}
                      width={10}
                      fill={item.percent}
                    //  tintColor="#00BFFF"
                      tintColor = {this.getColor(item.percent)}
                      backgroundColor="#686666">
                      {
                        (fill) => (
                             <Text style = {styles.points}>
                               {item.stake}
                             </Text>
                           )
                      }
                      </AnimatedCircularProgress>
                      </View>
                      <Text style = {styles.points}> Points </Text>
              <Text style={this.props.screenProps.globalStyle.stompDetail}>You got {item.got} out of {item.needed} Ramblrs needed to rate this footprint. {item.outcome} </Text>
              </TouchableOpacity>}/>
          </View>
        </View>
        )
    }
      return (
        <View style={{flex:1}}>
            <TabNavigator
              style = {{
                justifyContent: 'space-evenly',
                height: 30,
                width: Dimensions.get('window').width,
                flexDirection: "row",
                backgroundColor: "#327ba7",
              }}
              tabStyle = {{
                fontSize: 15,
                color: "white",
                borderColor: "white",
                height: 30,
                width: (Dimensions.get('window').width)/3,
              }}
              activeStyle = {{
                borderBottomColor: "white",
                borderBottomWidth: 4,
                paddingBottom: 5,
                height: 30,
                width: (Dimensions.get('window').width)/3,
              }}
              activeTextStyle={{
                fontSize: 15,
                color: "white",
                textAlign: "center"
              }}
              tabTextStyle={{
                fontSize: 15,
                color: "white",
                textAlign: "center"
              }}
              tabs={[
                {title: "Active"},
                {title: "Complete"},
              ]}
              onPress={this._onValueChange}
              activeTab={this.state.value}
            />
          {displayView}
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 6
  },
  disabled:{
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginBottom: 15,
    paddingTop: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
      opacity: .4
  },
  header:{
    height:200,
    backgroundColor: "#9839F7"
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  body:{
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  bodyList: {
   padding:10,
   backgroundColor :"#212121",
 },
 box: {
   padding:5,
   marginTop:5,
   marginBottom:5,
   backgroundColor: '#9839F7',
   flexDirection: 'row',
   shadowColor: 'black',
   shadowOpacity: .2,
   shadowOffset: {
     height:1,
     width:-2
   },
   elevation:2
 },
 friendContainer: {
   padding:5,
   marginTop:5,
   marginBottom:5,
   borderRadius: 3,
   flexDirection: 'row',
   shadowColor: 'black',
   shadowOpacity: .2,
   shadowOffset: {
     height:1,
     width:-2
   },
   elevation:2
 },
  bodyContent: {
    padding:20,
    marginBottom: 10,
  },
  name:{
    alignSelf: 'center',
    fontSize:28,
    color: "white",
    fontWeight: "600"
  },
  info:{
    alignSelf: 'center',
    fontSize:18,
    color: "#00BFFF",
    marginTop:15
  },
  points:{
    alignSelf: 'center',
    alignItems: 'center',
    fontSize:12,
    color: "#FFFFFF",
    padding: 4
  },
  description:{
    fontSize:18,
    color: "white",
    marginTop:15,
    textAlign: 'center',
  },
  buttonContainer: {
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginBottom: 15,
    paddingTop: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
  },
  username:{
    color: "#FFFFFF",
    fontSize:18,
    alignSelf:'center',
    marginLeft:20,
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 80,
  },
  image:{
    width: 65,
    height: 65,
    borderRadius: 33,
   borderColor: '#FFFFFF',
   borderWidth: 1,
   marginLeft: 20
 },
});
