import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MapView } from 'expo';

export default class CurrentScreen extends React.Component {
  static navigationOptions = {
    title: 'Rambl',a
  };
  constructor(props){
    super(props);
    this.state = {
      currentView = "choose", //Options are Choose, suggest, rambl
    }
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
