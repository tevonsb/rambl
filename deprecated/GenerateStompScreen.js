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
  Button,
} from 'react-native';
import { MapView } from 'expo';

import LoadingScreenComponent from './LoadingScreen';

export default class GenerateStompComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stompValue: 100,
    };
  }

    getPickerValues(){
      const values = [100, 200, 300, 400, 500];
      return values.map((number) =>
      <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
      }

      getComponentForState(){
          return (
            <View
              style={this.props.screenProps.globalStyle.view}
              >
              <Text style={this.props.screenProps.globalStyle.message}>How much would you like to stomp on this footprint?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>

                <Picker
                  selectedValue={this.state.stompValue}
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
                  onValueChange={(itemValue, itemIndex) => this.setState({stompValue: itemValue})}
                  >
                  {this.getPickerValues()}
                </Picker>
              </View>
              <Text style={this.props.screenProps.globalStyle.message}>Your Stomp is currently for {this.state.stompValue}.</Text>
              <View style={{flex: 1}}>
              <View style = {{flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => this.props.setRamblState("Rambling")}>
                  <View style={this.props.screenProps.globalStyle.purpleButton} >
                  <Text style={this.props.screenProps.globalStyle.buttonText}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.setRamblState("stompGenerated")}>
                  <View style={this.props.screenProps.globalStyle.purpleButton} >
                  <Text style={this.props.screenProps.globalStyle.buttonText}>Stomp!</Text>
                  </View>
                </TouchableOpacity>
             </View>
              </View>
            </View>
          )
      }

      render() {
        return this.getComponentForState();
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
      },
    });
