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
} from 'react-native';
import { MapView } from 'expo';

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

  getRambls(){
    return this.props.screenProps.rambls.map((rambl) => {
      if(rambl.duration > this.state.hour * 60 + this.state.minute){
        return (<li>rambl.title</li>)
      }
    });
  }
  getComponentForState(){
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
        </View>
        <View>
          <ul>
          {this.getRambls()}
          </ul>
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
