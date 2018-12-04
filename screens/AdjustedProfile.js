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
import FriendsViewComponent from "./Friends.js";

export default class AdjustedProfScreenComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      values: ["Past Rambls", "About"],
      value: "About",
      currentView: "unselected"
    };
    this._onChange = this._onChange.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
    this.getMyRambls = this.getMyRambls.bind(this);
    this.getMyUsername = this.getMyUsername.bind(this); // added this
    this.getMyLocation = this.getMyLocation.bind(this); // added this
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
    this.handleRamblPress = this.handleRamblPress.bind(this);
    this.getFriendsRamblsMyLocation = this.getFriendsRamblsMyLocation.bind(this);
    this.getFriendsRamblsNotMyLocation = this.getFriendsRamblsNotMyLocation.bind(this);
    this.handleVisitPress = this.handleVisitPress.bind(this);
  }

  handleBackPress(){
    if(this.state.currentView === "selected"){
      this.setState({
        currentView: "unselected",
      })
    }
  }
  getMyRambls() {
    return this.props.screenProps.past_rambls;
  }

  // added this
  getMyUsername() {
    return this.props.screenProps.globalState.username;
  }
  // added this
  getMyLocation() {
    return this.props.screenProps.globalState.location;
  }

  getFriendsRambls() {
    return this.props.screenProps.friends_rambls;
  }

  getFriendsRamblsMyLocation(){
      return this.props.screenProps.friends_rambls.filter(friend_rambl => friend_rambl.city == this.props.screenProps.globalState.location);
  }

  getFriendsRamblsNotMyLocation(){
      return this.props.screenProps.friends_rambls.filter(friend_rambl => friend_rambl.city != this.props.screenProps.globalState.location);
  }

  _onValueChange(value) {
    this.setState({ value: value });
  }

  _onChange(event) {
    this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
  }

  handleRamblPress(rambl) {
    this.setState({
      currentRambl: rambl,
      currentView: "selected"
    });
  }

  handleVisitPress(){
    this.setState({
      currentView: "FriendList"
    });
  }

  render() {
    var displayView = null;
    if (this.state.currentView === "selected") {
      return <RamblDetailComponent rambl={this.state.currentRambl} {...this.props} />;
    }
    if (this.state.currentView === "FriendList") {
      return <FriendsViewComponent {...this.props} />;
    }
    if (this.state.currentView === "unselected") {
      if(this.state.value === "About"){
        displayView=(
          <View style={styles.view}>
            <LinearGradient
              colors={[ "#327ba7",'#00BFFF']}
              style={{  alignItems: "center" }}
            ><View style={styles.header}></View></LinearGradient>
              <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>Katy Lerch</Text>
                  <Text style={styles.info}>Current Location: London</Text>
                  <Text style={styles.info}>Next Stop: Morocco</Text>
                  <Text style={styles.description}>The best trip I ever went on was with friend, who interviewed me before we left and did a ton of research on the lesser known things to do in Mexico City. I loved not having to worry that I wasn't spending my time right, or that I was missing out on something amazing.</Text>
                  <Text style={styles.description}> Total points: {this.props.screenProps.globalState.points}</Text>
                  <Text style={styles.description}> Ramblr Status: Stomper</Text>
                  </View>
                <TouchableOpacity disabled = {true} style={styles.disabled}>
                    <Text style = {{ color: '#FFFFFF', textShadowColor: 'white',
       textShadowOffset: {width: 0, height: 1},
       textShadowRadius: 80,
                        fontSize: 20,}}>Submit New Footprint!</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=> this.handleVisitPress()} style={styles.buttonContainer}>
                    <Text style = {{color: '#FFFFFF',  textShadowColor: 'white',
       textShadowOffset: {width: 0, height: 1},
       textShadowRadius: 80,
                        fontSize: 20,}}>View Friend List</Text>
                  </TouchableOpacity>

                 </View>
          </View>
        )
      }
      if (this.state.value === "Past Rambls") {
        displayView = (
          <View  style={this.props.screenProps.globalStyle.view}>
            <View style={{width: Dimensions.get('window').width-20, height: 630,backgroundColor: '#353535', padding: 10, marginTop: 5}}>
            <FlatList style={this.props.screenProps.globalStyle.flatlist}
              data={this.getMyRambls()}
              renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
              <Text style={this.props.screenProps.globalStyle.message}>{item.title}, {item.city}</Text>
              <Text style={this.props.screenProps.globalStyle.detail}>{item.month} </Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
              </TouchableOpacity>}/>
              </View>
              </View>
            )
          }
          if(this.state.value === "Friends\' Rambls"){
            displayView = (
              <View  style={this.props.screenProps.globalStyle.view}>
                <Text style={this.props.screenProps.globalStyle.message}> Friends Rambls in Your Location </Text>
                <View style={{width: Dimensions.get('window').width-20, height:290, backgroundColor: '#353535', padding: 10, marginTop: 5, marginBottom:5}}>
              <FlatList style={this.props.screenProps.globalStyle.flatlist}
                  data={this.getFriendsRamblsMyLocation()}
                  renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
                  <Text style={this.props.screenProps.globalStyle.message}>{item.title}, {item.city}</Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                  <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
                </TouchableOpacity>}/>
                </View>
                <Text style={this.props.screenProps.globalStyle.message}> All Friends Rambls </Text>
                <View style={{width: Dimensions.get('window').width-20, height: 290, backgroundColor: '#353535', padding: 10, marginTop: 5}}>

                  <FlatList style={this.props.screenProps.globalStyle.flatlist}
                  data={this.getFriendsRamblsNotMyLocation()}
                  renderItem={({item}) =>

                        <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>

                    <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: ${item.cost} </Text>
                  </TouchableOpacity>}/>
                    </View>

              </View>
                )
              }
        // if(this.state.value === "Friends\' Rambls"){
        //   displayView = (
        //     <View  style={this.props.screenProps.globalStyle.view}>
        //       <FlatList
        //         data={this.getFriendsRambls()}
        //         renderItem={({item}) => <Text style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>{this.getMyLocation()==item.city ? item.title: ""}</Text>}/>
        //         </View>
        //       )
        //     }
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
                fontSize: 20,
                color: "white",
                borderColor: "white",
                height: 30,
                width: (Dimensions.get('window').width)/2,

              }}
              activeStyle = {{
                borderBottomColor: "white",
                borderBottomWidth: 4,
                paddingBottom: 5,
                height: 30,
                width: (Dimensions.get('window').width)/2,
              }}
              activeTextStyle={{
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
              tabTextStyle={{
                fontSize: 20,
                color: "white",
                textAlign: "center"
              }}
              tabs={[
                {title: "About"},
                {title: "Past Rambls"},
              ]}
              onPress={this._onValueChange}
              activeTab={this.state.value}
            />

          {displayView}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  disabled:{
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    // alignItems: 'center',
    // marginTop: 15,
    marginBottom: 15,
    // marginLeft:5 ,
    // marginRight: 3,
    paddingTop: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
      opacity: .4
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  header:{
    // backgroundColor: "#00BFFF",
    height:100,
    backgroundColor: "#9839F7"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  body:{
    marginTop:50,
    marginBottom: 35,
    alignItems: 'center',
  },
  bodyContent: {
    // flex: 1,

    // marginTop: 200,
    padding:30,
   // marginBottom: 5,
  },
  name:{
    alignSelf: 'center',
    fontSize:28,
    // color: "#696969",
    color: "white",
    fontWeight: "600"
  },
  info:{
    alignSelf: 'center',
    fontSize:18,
    // color: "#9839F7",
    color: "#00BFFF",
    marginTop:15
  },
  description:{
    fontSize:18,
    color: "white",
    // color: "#696969",
    marginTop:15,
    textAlign: 'center',
  },
  buttonContainer: {
    // marginTop:10,
    // height:45,
    // // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // marginBottom:20,
    // width:250,
    // borderRadius:30,
    // backgroundColor: "#00BFFF",
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    // alignItems: 'center',
    // marginTop: 15,
    marginBottom: 15,
    // marginLeft:5 ,
    // marginRight: 3,
    paddingTop: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
    // justifyContent: "center"
  },
});
