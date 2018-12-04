import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';

export default class FriendsView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Rohan"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"Katherine"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Randy"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Eric"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Jessica"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Brett"},
      ]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                <Text style={styles.name}>John Doe</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: user.image}}/>
                       <Text style={styles.username}>{user.username}</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 60,
    height: 60,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  box: {
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#00BFFF",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  }
});
