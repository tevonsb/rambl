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
} from 'react-native';

export default class FootprintDetailComponent extends React.Component {
  constructor(props){
    super(props);
  }

  getAction(){
    if(this.props.action === "Visit"){
      return (
        <Button onPress={this.props.handleVisitPress} title="Visit"></Button>
      )
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
<<<<<<< HEAD
        return(
          <View style={this.props.screenProps.globalStyle.view}>
            <FlatList style={this.props.screenProps.globalStyle.flatlist}
              data={this.getFootprints()}
              renderItem={({item}) => <TouchableOpacity style={this.props.screenProps.globalStyle.rambl}>
              <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Category: {item.category}</Text>
              <Text style={this.props.screenProps.globalStyle.detail}>Description: {item.description}</Text>
              </TouchableOpacity>}
              keyExtractor = {(item, index)=>index.toString()}
              />
              {this.getAction()}
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
=======
    return(
        <View style={this.props.screenProps.globalStyle.rambl}>
        <Text style={this.props.screenProps.globalStyle.message}>{this.props.footprint.title}</Text>
                <Text style={this.props.screenProps.globalStyle.footprintDetail}>Rating: {this.props.footprint.rating}/5</Text>
        <Text style={this.props.screenProps.globalStyle.footprintDetail}>Category: {this.props.footprint.category}</Text>
        <Text style={this.props.screenProps.globalStyle.footprintDetail}>Description: {this.props.footprint.description}</Text>
        {this.getAction()}
        </View>
      );
    }
  }
>>>>>>> 99e6f010f8c0e30d4825f16879ca8f55e22b42f6
