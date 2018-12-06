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

export default class FriendsViewComponent extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      currentView: "friends",
      dataSource: ds.cloneWithRows([
         {image: "https://i.imgur.com/In7VbEK.png", username:"Rohan"},
         {image: "https://lh6.googleusercontent.com/-R42O5YkyqZ8/AAAAAAAAAAI/AAAAAAAAASg/Q-BZcKsj7JU/il/photo.jpg", username:"Katherine"},
         {image: "https://www.cioreview.com/newsimages/special/PEa0M1Ks.jpeg", username:"Eric"},
         {image: "https://pbs.twimg.com/profile_images/2413419924/image_400x400.jpg", username:"Jessica"},
         {image: "https://pbs.twimg.com/profile_images/981882124402913281/IbZSZea6_400x400.jpg", username:"Brett"},
         {image: "https://d1qb2nb5cznatu.cloudfront.net/users/7663832-large?1521991954", username:"Kally"},
         {image: "https://static1.squarespace.com/static/57c1fc61f7e0ab69ed1c7033/57cbcc16cd0f686bb5dae709/57f9682c6a496306c8345a46/1475963010501/IMG_0117.jpg?format=2500w", username:"Tevon"},
         {image: "https://i1.rgstatic.net/ii/profile.image/277889019858965-1443265313130_Q512/Clare_Chen4.jpg", username:"Clare"},
         {image: "https://lh3.googleusercontent.com/-eCZdiJi-wDk/AAAAAAAAAAI/AAAAAAABaZA/WAewjrp5lvg/s640-il/photo.jpg", username:"Amanda"},
      ]),
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.setProfileState("unselected");
  }

  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.view}>
      <TouchableOpacity onPress={()=> this.handlePress()}>
        <LinearGradient
          colors={[ "#327ba7",'#00BFFF']}
          style={{  alignItems: "center" }}
        ><View style={styles.header}></View></LinearGradient>
          <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyList}>
          <ListView style={styles.container} enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(user) => {
              return (
                  <View style={styles.box}>
                    <Image style={styles.image} source={{uri: user.image}}/>
                     <Text style={styles.username}>{user.username}</Text>
                  </View>
              )
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  disabled:{
    width : 220,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginBottom: 15,
    paddingTop: 5,
    borderRadius: 3,
    overflow: 'hidden',
    // shadowColor: "white",
    // shadowOffset: {width: 1, height: -1},
    // shadowRadius: 10,
    alignItems: 'center',
      opacity: .4
  },
  header:{
    height:150,
    backgroundColor: "#9839F7"
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 30,
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
  bodyList: {
   padding:30,
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
  bodyContent: {
    padding:30,
  },
  name:{
    alignSelf: 'center',
    fontSize:30,
    color: "white",
    fontWeight: "600"
  },
  info:{
    alignSelf: 'center',
    fontSize:18,
    color: "#00BFFF",
    marginTop:15
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
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  image:{
   width: 60,
   height: 60,
 },
});
