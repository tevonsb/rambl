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
} from 'react-native';
import { MapView } from 'expo';
import RamblDetailComponent from './RamblDetailScreen.js'

export default class CurrentScreen extends React.Component {
  static navigationOptions = {
    title: 'Rambl',
  };
  constructor(props){
    super(props);
    this.state = {
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
              style={{flex: 1}}
              >
              <Text>How long do you have to spend?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text>Hours</Text>
                <Picker
                  selectedValue={this.state.hour}
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({hour: itemValue})}
                  >
                  {this.getPickerHours()}
                </Picker>
                <Text>Minutes</Text>
                <Picker
                  selectedValue={this.state.minute}
                  onValueChange={(itemValue, itemIndex) => this.setState({minute: itemValue})}
                  style={{ height: 50, width: 100 }}
                  >
                  {this.getPickerMinutes()}
                </Picker>
              </View>
              <Text>Your Rambl is currently for {this.state.hour} and {this.state.minute} minutes.</Text>
              <View style={{flex: 1, padding: 22}}>
                <FlatList
                  data={this.getRambls()}
                  renderItem={({item}) => <Text onPress={() => this.handleRamblPress(item)}>{item.title}</Text>}
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
