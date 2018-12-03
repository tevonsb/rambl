import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  FlatList,
  Dimensions,
} from 'react-native';
import { MapView } from 'expo';

import RamblDetailComponent from './RamblDetailScreen.js';
import LoadingScreenComponent from './LoadingScreen';

export default class CurrentScreenComponent extends React.Component {
  static navigationOptions = {
    title: 'Rambl',
  };
  constructor(props){
    super(props);
    this.state = {
      currentRamblState: "Current",
      currentView: "choose",
      hour: 1,
      minute: 15,
    };
    this.checkDuration = this.checkDuration.bind(this);
  }
  getPickerMinutes(){
    const minutes = [0, 15, 30, 45];
    return minutes.map((number) =>
    <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
    }

    getPickerHours(){
      const hours = [0, 1, 2, 3, 4, 5];
      return hours.map((number) =>
      <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
      }

      checkDuration(rambl){
        return rambl.duration < this.state.hour + this.state.minute / 60;
      }
      getRambls(){
        return this.props.screenProps.rambls.filter(this.checkDuration);
      }

      handleRamblPress(rambl){
        this.setState({
          currentRambl: rambl,
          currentView: "selected",
        });
      }
      getComponentForState(){
        if(this.state.currentView === "selected"){
          return (
            <RamblDetailComponent rambl={this.state.currentRambl} {...this.props}/>
          )
        }
        if(this.state.currentView === "choose"){
          return (
            <View
              style={this.props.screenProps.globalStyle.view}
              >
              <View style = {{padding: 10}}>
              <Text style={this.props.screenProps.globalStyle.message}>How long do you have to spend?</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>

                <Picker
                  selectedValue={this.state.hour}
                  hideUnderline
                  showSearch
                  searchPlaceholder={'Search a language'}
                  style={{height: 100, width: 50, color: "white"}}
                  itemTextStyle={{ fontSize: 18, color: 'white' }}
                  itemStyle={{
                    color: "white",
                    textDecorationColor: "white",
                    marginLeft: 0,
                    paddingLeft: 15
                  }}
                  style={{height: 100, width: 50, color: "white", marginLeft: 40,}}
                  onValueChange={(itemValue, itemIndex) => this.setState({hour: itemValue})}
                  >
                  {this.getPickerHours()}
                </Picker>
                <Text style={this.props.screenProps.globalStyle.picker} >Hours</Text>

                <Picker
                  style={{height: 100, width: 50, color: "white"}}
                  itemTextStyle={{ fontSize: 18, color: 'white' }}
                  itemStyle={{
                    color: "white",
                    textDecorationColor: "white",
                    marginLeft: 0,
                    paddingLeft: 15
                  }}
                  selectedValue={this.state.minute}
                  onValueChange={(itemValue, itemIndex) => this.setState({minute: itemValue})}
                  >
                  {this.getPickerMinutes()}
                </Picker>
                <Text style={this.props.screenProps.globalStyle.picker} >Minutes</Text>
              </View>
              <View style = {{padding: 10}}>
              <Text style={this.props.screenProps.globalStyle.message}>Your Rambl is currently for {this.state.hour} hour and {this.state.minute} minutes.</Text>
              </View>
              <View style={{width: Dimensions.get('window').width-20, height:290, backgroundColor: '#353535', padding: 10, marginTop: 5, marginBottom:5}}>

                <FlatList
                  data={this.getRambls()}
                  renderItem={({item}) =>
                  <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
                    <Text style={this.props.screenProps.globalStyle.message}>{item.title}</Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                    <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate: $ {item.cost} </Text>
                  </TouchableOpacity>}
                />
              </View>
            </View>
          )
        }
        return null;
      }

      render() {
        return this.getComponentForState();
        // return (
        //   <MapView
        //     style={{ flex: 1 }}
        //     initialRegion={{
        //       latitude: 37.78825,
        //       longitude: -122.4324,
        //       latitudeDelta: 0.0922,
        //       longitudeDelta: 0.0421,
        //     }}
        //   />
        // );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
      },
    });
