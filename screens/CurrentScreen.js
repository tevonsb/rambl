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
  Button,
} from 'react-native';
import { MapView, Overlay } from 'expo';

import RamblDetailComponent from './RamblDetailScreen.js';
import LoadingScreenComponent from './LoadingScreen';
import FriendRamblComponent from './FriendRambl.js'
var footprintSelection = require("../data/londonfootprints.json");

export default class CurrentScreenComponent extends React.Component {
  constructor(props){
    super(props);
    if(this.props.currentState !== null){
      console.log('loading saved state');
      this.state = this.props.currentState;
      console.log(this.state);
    } else {
      this.state = {
        currentRamblState: "Current",
        currentView: "map",
        hour: 1,
        minute: 15,
        currentRambl: null,
      };
    }
    this.checkDuration = this.checkDuration.bind(this);
    this.createNewRambl = this.createNewRambl.bind(this);
    this.setCurrentState = this.setCurrentState.bind(this);
  }

  componentWillUnmount(){
    this.props.setGlobalState({currentScreenState: this.state});
  }

  getPickerMinutes(){
    const minutes = [0, 15, 30, 45];
    return minutes.map((number) =>
    <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
    }

    displayFootprints(){
      return footprintSelection.map((footprint, index) => {
        return ( <MapView.Marker

          key = {index.toString()}
            coordinate = {{latitude: (footprint.latitude),
            longitude: (footprint.longitude)}}
            title = {footprint.title}
            pinColor = {"#00BFFF"}
            description = {footprint.Address}
            />);
      });
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
        return this.props.rambls.filter(this.checkDuration);
      }

      handleRamblPress(rambl){
        this.setState({
          currentRambl: rambl,
          currentView: "selected",
        });
        this.forceUpdate();
      }

      createNewRambl(){
        this.setState({
          currentView: "choose",
        });
      }
      followfriendRambl(){
        this.setState({
          currentView: "chooseFriend",
        });
      }

      setCurrentState(state){
        console.log('Current Screen state being set to '+state);
        this.setState({
          currentView: state,
        })
      }

      getListOrMessage(){
        const rambls = this.getRambls();
        if(rambls.length === 0){
          return (
            <View style={{flex: 0, justifyContent: "space-evenly", margin: 20}}>
              <Text style={this.props.screenProps.globalStyle.message}>
                Unfortunately we don't have any Rambls in your area for your trip length, try adding more time!
              </Text>
            </View>
          )
        }

        return(
          <View style={{width: Dimensions.get('window').width-20, height:320, backgroundColor: '#353535', padding: 10, marginTop: 5, marginBottom:5}}>
            <FlatList
              data={this.getRambls()}
              renderItem={({item}) =>
              <TouchableOpacity style={this.props.screenProps.globalStyle.rambl} onPress={() => this.handleRamblPress(item)}>
                <Text style={this.props.screenProps.globalStyle.message}>{item.title}, {item.city}</Text>
                <Text style={this.props.screenProps.globalStyle.detail}>Rating: {item.rating} </Text>
                <Text style={this.props.screenProps.globalStyle.detail}>Duration: {item.duration} </Text>
                <Text style={this.props.screenProps.globalStyle.detail}>Cost Estimate per Person: ${item.cost} </Text>
              </TouchableOpacity>}
            />
          </View>
        )
      }
      getComponentForState(){
        if(this.state.currentView === "map"){
          return(
            <View
              style={this.props.screenProps.globalStyle.view}
              >
          <MapView
            style={this.props.screenProps.globalStyle.largeMap}
            initialRegion={{
              latitude: 51.5177,
              longitude: -0.13,
              latitudeDelta: .05,
              longitudeDelta: .13,
            }}
            showBuildings = {true}
          >
          {this.displayFootprints()}
          </MapView>
          <View style = {{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity onPress = {()=> this.createNewRambl()} style={styles.buttonContainer}>
            <Text style = {{color: '#FFFFFF',  textShadowColor: 'white', textShadowOffset: {width: 0, height: 1},
                textShadowRadius: 80, fontSize: 20,}}>
                Discover New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=> this.followfriendRambl()} style={styles.buttonContainer}>
            <Text style = {{color: '#FFFFFF',  textShadowColor: 'white', textShadowOffset: {width: 0, height: 1},
                textShadowRadius: 80, fontSize: 20,}}>
                  Follow a Friend</Text>
          </TouchableOpacity>
          </View>
          </View>
        )
        }
        if(this.state.currentView === "selected"){
          return (
            <RamblDetailComponent setCurrentState={(state) => this.setCurrentState(state)} cancelLocation={false} rambl={this.state.currentRambl} {...this.props}/>
          )
        }
        if(this.state.currentView === "chooseFriend"){
          return (
            <FriendRamblComponent setCurrentState={(state) => this.setCurrentState(state)} rambl={this.state.currentRambl} {...this.props}/>
          )
        }
        if(this.state.currentView === "choose"){
          return (
            <View style={this.props.screenProps.globalStyle.view}>
              <View style = {{padding: 10}}>
              <Text style={this.props.screenProps.globalStyle.message}>How long do you have to spend?</Text>
              </View>
              <View style={{flex: 0, flexDirection: 'row', height: 210}}>
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
              <Text style={this.props.screenProps.globalStyle.message}>Option(s) that fit in your timeframe:</Text>
              </View>
              {this.getListOrMessage()}
              <TouchableOpacity
                style={{marginTop: 5, marginBottom: 5,alignSelf: "center"}}
                onPress={() => this.setCurrentState("map")}>
                <View style={this.props.screenProps.globalStyle.purpleButton}>
                  <Text style={this.props.screenProps.globalStyle.buttonText}> {"< Back to Map"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
        return null;
      }

      render() {
        return this.getComponentForState();
      }
    }

    const styles = StyleSheet.create({
      buttonContainer: {
        width : 190,
        height: 35,
        color: 'white',
        backgroundColor: '#9839F7',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 3,
        overflow: 'hidden',
        shadowColor: "white",
        shadowOffset: {width: 1, height: -1},
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: "center"
      },
    });
