import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Picker,
  View
} from 'react-native';

import StarRating from 'react-native-star-rating';

export default class RateandStompComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  handleDonePress(stompAmount){ //used to decide which button was pressed (stompAmount)
    var currentRambl = this.props.rambl;
    currentRambl.footprints.forEach((footprint) => {
      if(this.props.footprint.title === footprint.title){
        footprint.stake = stompAmount;
        footprint.userRating = this.state.starCount;
      }
    });
    this.props.setGlobalState({
      currentRambl: currentRambl,
    });
    this.props.setFootprintVisited();
    if(stompAmount === 0){
      console.log("Setting rambl state");
    } else {
      this.props.setRamblState("GeneratedStomp");
    }
  }

  getPickerValues(){
    const values = [100, 200, 300, 400, 500];
    return values.map((number) =>
    <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
    }

    render() {
      return (
        <View style={this.props.screenProps.globalStyle.view}>
          <Text style={this.props.screenProps.globalStyle.message}> Looks like you just visited a footprint! </Text>
          <Text style={this.props.screenProps.globalStyle.message}> Rate it now! </Text>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'yellow'}
            />

          <Text style={this.props.screenProps.globalStyle.message}>Would you like to stomp this footprint?</Text>
            <View
              style={this.props.screenProps.globalStyle.view}
              >
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
              </View>
              <View style = {{flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'}}>
                  <TouchableOpacity onPress={() => this.handleDonePress(0)}>
                    <View style={this.props.screenProps.globalStyle.purpleButton} >
                      <Text style={this.props.screenProps.globalStyle.buttonText}>Done</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handleDonePress(this.state.stompValue)}>
                    <View style={this.props.screenProps.globalStyle.purpleButton} >
                      <Text style={this.props.screenProps.globalStyle.buttonText}>Stomp!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
          );
        }
      }
``
