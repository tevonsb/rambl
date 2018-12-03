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
  static navigationOptions = {
    title: 'You',
  };
  constructor(props){
    super(props);
  }

  handleTabSelect(tabTitle){
    console.log(tabTitle);
  }

  render() {
   return (
     <View style={styles.view}>
         <View style={styles.header}></View>
         <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/WWl3qN9.jpg'}}/>
         <View style={styles.body}>
           <View style={styles.bodyContent}>
             <Text style={styles.name}>Katy Lerch</Text>
             <Text style={styles.info}>Current Location: London</Text>
             <Text style={styles.info}>Next Stop: Morocco</Text>
             <Text style={styles.description}>The best trip I ever went on was with friend, who interviewed me before we left and did a ton of research on the lesser known things to do in Mexico City. I loved not having to worry that I wasn't spending my time right, or that I was missing out on something amazing.</Text>
             <Text style={styles.description}> Total points: {this.props.screenProps.globalState.points}</Text>
             <Text style={styles.description}> Ramblr Status: Influencer</Text>
             <TouchableOpacity style={styles.buttonContainer}>
               <Text>Submit New Footprint</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonContainer}>
               <Text>View Friend List</Text>
             </TouchableOpacity>
           </View>
       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 header:{
   backgroundColor: "#00BFFF",
   height:200,
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
   marginTop:130
 },
 name:{
   fontSize:22,
   color:"#FFFFFF",
   fontWeight:'600',
 },
 body:{
   marginTop:50,
 },
 bodyContent: {
   // flex: 1,
   alignItems: 'center',
   // marginTop: 200,
   padding:30,
 },
 name:{
   fontSize:28,
   color: "#696969",
   fontWeight: "600"
 },
 info:{
   fontSize:16,
   color: "#00BFFF",
   marginTop:10
 },
 description:{
   fontSize:16,
   color: "#696969",
   marginTop:10,
   textAlign: 'center'
 },
 buttonContainer: {
   marginTop:10,
   height:45,
   // flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   // marginBottom:20,
   width:250,
   borderRadius:30,
   backgroundColor: "#00BFFF",
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
