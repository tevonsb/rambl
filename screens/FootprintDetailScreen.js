import React from 'react';
import { ExpoConfigView } from '@expo/samples';
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
  Dimensions,
} from 'react-native';

export default class FootprintDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getAction(footprint){
    if(this.props.action === "Visit"){
      if(footprint.visited !== true){
        return (
          <View style = {{
              flex: 1,
              alignItems: 'center',
              alignSelf:'center',
              justifyContent: 'center'
            }}>
            <TouchableOpacity onPress={()=> this.props.handleVisitPress(footprint)}>
              <View style={this.props.screenProps.globalStyle.purpleButton}>
                <Text style={this.props.screenProps.globalStyle.buttonText}>I visited!</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      }
    }
    if(this.props.action === "Visited"){
      return (
        <Text>Visited</Text>
      )
    }
    return null;
  }

  getFootprints(){
    return this.props.rambl.footprints;
  }

  render() {
    return(
      //<View style={{width: Dimensions.get('window').width-20, height: 250, backgroundColor: '#353535', padding: 10, marginTop: 5}}>
      <View style={{flex:2, backgroundColor: '#353535', padding: 10, marginTop: 15}}>
        <FlatList style={this.props.screenProps.globalStyle.flatlist}
          data={this.getFootprints()}
          renderItem={({item}) =>
          <TouchableOpacity disabled={true} style={this.props.screenProps.globalStyle.footprintContainer}>
            <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Category: {item.category}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Description: {item.description}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Rating: {item.rating}/5.0</Text>
            {this.getAction(item)}
          </TouchableOpacity>} keyExtractor = {(item, index)=>index.toString()}/>
        </View>
      )
    }
  }
