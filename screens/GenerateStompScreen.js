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

import RamblDetailComponent from './RamblDetailScreen.js';
import LoadingScreenComponent from './LoadingScreen';

export default class GenerateStompComponent extends React.Component {
  static navigationOptions = {
    title: 'Stomp',
  };
  constructor(props){
    super(props);
    this.state = {
      stompValue: 100,
    };
  }

//how do i pass a value from one state to the next based on user input? i.e. stomp value on which footprint
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
                  onValueChange={(itemValue, itemIndex) => this.setState({stompValues: itemValue})}
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
              <View style = {{flex: 1}}>
                <Button title = "Cancel" onPress={()=> this.setState({
                    currentRamblState: "Create"
                  })}/>
                </View>
              <View style = {{flex: 1}}>
                <Button title = "Stomp!" onPress={()=> this.setState({
                    currentRamblState: "generateStomp"
                  })}/>
                </View>
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
