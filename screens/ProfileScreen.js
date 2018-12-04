import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { LinearGradient } from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import TabNavigator from '../navigation/TabNavigator.js';

export default class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
   return (
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
             <Text style={styles.description}> Ramblr Status: Influencer</Text>
             </View>
           <TouchableOpacity style={styles.buttonContainer}>
               <Text style = {{ color: '#FFFFFF', textShadowColor: 'white',
  textShadowOffset: {width: 0, height: 1},
  textShadowRadius: 80,
                   fontSize: 20,}}>Submit New Footprint!</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress = style={styles.buttonContainer}>
               <Text style = {{color: '#FFFFFF',  textShadowColor: 'white',
  textShadowOffset: {width: 0, height: 1},
  textShadowRadius: 80,
                   fontSize: 20,}}>View Friend List</Text>
             </TouchableOpacity>

            </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
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

//   render() {
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//     return (
//       <View style={this.props.screenProps.globalStyle.view}>
//         <View style = {{ alignItems: "center", marginTop: 20, marginBottom: 10}}>
//       <Text style={this.props.screenProps.globalStyle.header}>Hello, {this.props.screenProps.globalState.username}</Text></View>
//       <Text style={this.props.screenProps.globalStyle.message}>Current Location: {this.props.screenProps.globalState.location}</Text>
//       <Text style={this.props.screenProps.globalStyle.message}>Points: {this.props.screenProps.globalState.points}</Text>
//       <View style = {{ alignItems: "center"}}>
//         <View style={this.props.screenProps.globalStyle.purpleButton}>
//         <Text style={this.props.screenProps.globalStyle.buttonText}>Settings</Text>
//         </View>
//         </View>
//      </View>
//     );
//   }
// }
//
// const style = StyleSheet.create({
//   test: {
//     backgroundColor: '#FFFFFF',
//   }
// })
