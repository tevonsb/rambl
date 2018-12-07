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
import ContinueRamblComponent from "./ContinueRambling.js";
import TabNavigator from "../navigation/TabNavigator.js";
import RateandStompComponent from "./RateandStomp.js";
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    if(this.props.profileState){
      this.state = this.props.profileState;
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        selectedIndex: 0,
        values: ["Rambl History", "About", "Friends"],
        value: "About",
        currentView: "unselected",
        dataSource: ds.cloneWithRows([
           {image: "https://i.imgur.com/In7VbEK.png", username:"Rohan Srinivasan"},
           {image: "https://lh6.googleusercontent.com/-R42O5YkyqZ8/AAAAAAAAAAI/AAAAAAAAASg/Q-BZcKsj7JU/il/photo.jpg", username:"Katherine Lynch"},
           {image: "https://www.cioreview.com/newsimages/special/PEa0M1Ks.jpeg", username:"Eric Lamb"},
           {image: "https://pbs.twimg.com/profile_images/2413419924/image_400x400.jpg", username:"Jessica Nussbaum"},
           {image: "https://pbs.twimg.com/profile_images/981882124402913281/IbZSZea6_400x400.jpg", username:"Brett Perrotta"},
           {image: "https://d1qb2nb5cznatu.cloudfront.net/users/7663832-large?1521991954", username:"Kally Zheng"},
           {image: "https://static1.squarespace.com/static/57c1fc61f7e0ab69ed1c7033/57cbcc16cd0f686bb5dae709/57f9682c6a496306c8345a46/1475963010501/IMG_0117.jpg?format=2500w", username:"Tevon Strand-Brown"},
           {image: "https://i1.rgstatic.net/ii/profile.image/277889019858965-1443265313130_Q512/Clare_Chen4.jpg", username:"Clare Chen"},
           {image: "https://lh3.googleusercontent.com/-eCZdiJi-wDk/AAAAAAAAAAI/AAAAAAABaZA/WAewjrp5lvg/s640-il/photo.jpg", username:"Amanda Zwarenstein"},
        ]),
      };
    }

    this._onChange = this._onChange.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
    this.getMyRambls = this.getMyRambls.bind(this);
    this.getMyUsername = this.getMyUsername.bind(this); // added this
    this.getMyLocation = this.getMyLocation.bind(this); // added this
    this.getFriendsRambls = this.getFriendsRambls.bind(this);
    this.handleRamblPress = this.handleRamblPress.bind(this);
    this.getFriendsRamblsMyLocation = this.getFriendsRamblsMyLocation.bind(this);
    this.getFriendsRamblsNotMyLocation = this.getFriendsRamblsNotMyLocation.bind(this);
    this.setProfileState = this.setProfileState.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.getModal = this.getModal.bind(this);
  }

  componentWillUnmount(){
    this.props.setGlobalState({profileState: this.state});
  }

  handleBackPress(){
    if(this.state.currentView === "selected"){
      this.setState({
        currentView: "unselected",
      })
    }
  }
  getMyRambls() {
    return this.props.pastRambls;
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

  setProfileState(viewState){
    this.setState({
      currentView: viewState
    })
  }
  getModal(){
    if(this.state.modalOpen){
      return(
        <View style={{
            position: "absolute",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        >
          <View style={{top: 250, height: 150, backgroundColor: '#686666', padding: 20, borderRadius: 3}} >
            <Text style={styles.description}>Your transfer of $2.00 has been started! It may take 2-3 days to show up in your linked account.</Text>
            <View style={{flex:0, flexDirection: "row", justifyContent: "space-evenly", margin: 15}}>
              <TouchableOpacity style={this.props.screenProps.globalStyle.purpleButton} onPress={()=> this.setState({modalOpen: false})}>
                <Text style={this.props.screenProps.globalStyle.buttonText} >Okay!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }else{
      return null;
    }
  }

  render() {
    var displayView = null;
    if (this.state.currentView === "selected") {
      return <RamblDetailComponent {...this.props} cancelLocation="unselected" cancel={this.handleBackPress} rambl={this.state.currentRambl} history={true} />;
    }
    if (this.state.currentView === "unselected") {
      if (this.state.value === "Friends") {
        displayView=(
          <View style={{flex:1}}>
          <View style={styles.view}>
            <LinearGradient
              colors={[ "#327ba7",'#00BFFF']}
              style={{  alignItems: "center" }}
            ><View style={styles.header}></View></LinearGradient>
              <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
            </View>
            <View style={styles.bodyList}>
              <ListView style={styles.container} enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(user) => {
                  return (
                      <View style={styles.friendContainer}>
                        <Image style={styles.image} source={{uri: user.image}}/>
                         <Text style={styles.username}>{user.username}</Text>
                      </View>
                  )
              }}/>
            </View>
          </View>
        )
      }
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
                  <Text style={styles.description}>The best trip I ever went on was with my friend who interviewed me before we left and did research on the lesser known things to do in Mexico City. I loved not having to worry if I was missing out on something amazing.</Text>
                  <Text style={styles.description}> Total points: {this.props.screenProps.globalState.points}</Text>
                  <Text style={styles.description}> Ramblr Status: Stomper</Text>
                  </View>
                <TouchableOpacity disabled = {true} style={styles.disabled}>
                    <Text style = {{ color: '#FFFFFF', textShadowColor: 'white', textShadowOffset: {width: 0, height: 1},
                    textShadowRadius: 80, fontSize: 20,}}>Submit New Footprint!</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => this.setState({modalOpen: true})} >
                      <Text style = {{ color: '#FFFFFF', textShadowColor: 'white', textShadowOffset: {width: 0, height: 1},
                      textShadowRadius: 80, fontSize: 20,}}>Convert Points to $</Text>
                    </TouchableOpacity>
                 </View>
          </View>
        )
      }
      if (this.state.value === "History") {
        displayView = (
          <View style={styles.view}>
            <LinearGradient
              colors={[ "#327ba7",'#00BFFF']}
              style={{  alignItems: "center" }}
            ><View style={styles.header}></View></LinearGradient>
              <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
            <View style={{width: Dimensions.get('window').width-20, height: 440,backgroundColor: '#353535', padding: 10, marginTop: 10, marginLeft:10}}>
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
                {title: "About"},
                {title: "History"},
                {title: "Friends"}
              ]}
              onPress={this._onValueChange}
              activeTab={this.state.value}
            />
          {displayView}
          {this.getModal()}
        </View>
      );
    }
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
    marginTop:10,
    textAlign: 'center',
  },
  buttonContainer: {
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginBottom: 10,
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
    fontSize:20,
    alignSelf:'center',
    marginLeft:25,
    // textShadowColor: 'white',
    // textShadowOffset: {width: 0, height: 1},
    // textShadowRadius: 80,
  },
  image:{
    width: 65,
    height: 65,
   borderRadius: 33,
   borderColor: '#FFFFFF',
   borderWidth: 2,
   marginLeft: 30
 },
});
