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
    };
  }
  getPickerMinutes(){
  }

  getPickerHours(){
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
              style={{ height: 50, width: 100 }}
              >
              <Picker.Item label="One" value="1" />
              <Picker.Item label="Two" value="2" />
              <Picker.Item label="Three" value="3" />
            </Picker>
            <Text>Minutes</Text>
            <Picker
              style={{ height: 50, width: 100 }}
              >
              <Picker.Item label="One" value="1" />
              <Picker.Item label="Two" value="2" />
              <Picker.Item label="Three" value="3" />
            </Picker>
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
