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
              justifyContent: 'center',
            }}>
            <View style = {{marginTop:5}}>
              <TouchableOpacity style={{marginBottom: 5,}} onPress={()=> this.props.handleVisitPress(footprint)}>
                <View style={this.props.screenProps.globalStyle.purpleButton}>
                  <Text style={this.props.screenProps.globalStyle.buttonText}>Visit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )
      } else {
        return (<Text>You've already visited this footprint</Text>);
      }
      return null;
    }
  }

    getFootprints(){
      return this.props.rambl.footprints;
    }

    countVisited(){
      return this.props.rambl.footprints.filter(footprint => footprint.visited).length
    }

    render() {
      return(
        <View style={{width: Dimensions.get('window').width-20, height: this.props.height, backgroundColor: '#353535',padding:10, marginTop: 5}}>
          <FlatList style={this.props.screenProps.globalStyle.flatlist}
            data={this.getFootprints()}
            extraData={this.countVisited()}
            renderItem={({item}) => <TouchableOpacity disabled={true} style={this.props.screenProps.globalStyle.rambl}>
            <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintAddress}>{item.Address}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Category: {item.category}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Description: {item.description}</Text>
            <Text style={this.props.screenProps.globalStyle.footprintDetail}>Rating: {item.rating}/5.0</Text>
            {this.getAction(item)}
          </TouchableOpacity>} keyExtractor = {(item, index)=>index.toString()}/>
        </View>
      )
    }
  }

  // <View style={this.props.screenProps.globalStyle.rambl}>
  // <Text style={this.props.screenProps.globalStyle.footprintItem}>{this.props.footprint.title}</Text>
  // <Text style={this.props.screenProps.globalStyle.detail}>Category: {this.props.footprint.category}</Text>
  // <Text style={this.props.screenProps.globalStyle.detail}>Description: {this.props.footprint.description}</Text>
  // {this.getAction()}
  // </View>
