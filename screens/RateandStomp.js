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
import { LinearGradient } from 'expo';

import StarRating from 'react-native-star-rating';

export default class RateandStompComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      stompValue: 300
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
    } else {
      var newStomp = {
        "key": Interger.toString(this.props.stomps.length+1),
        "title": this.props.footprint.title,
        "Address":this.props.footprint.address,
        "rating": this.state.starCount,
        "stake":this.state.stompValue,
        "stake_time": "11/0/2020",
        "needed": 4,
        "got": 0,
        "percent":0,
      }
      this.props.setGlobalState({stomps: this.props.stomps.unshift(newStomp)});
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
          <View style = {this.props.screenProps.globalStyle.announcementContainer}>
            <Text style={this.props.screenProps.globalStyle.announcementText}>How was the footprint? </Text>
          </View>
          <View style = {this.props.screenProps.globalStyle.ratingContainer}>
            <View style ={{marginBottom: 15, marginTop: 15}}>
              <Text style={this.props.screenProps.globalStyle.message}> Rate it: </Text>
            </View>
            <StarRating
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#00BFFF'}
              />
          </View>
          <View style={this.props.screenProps.globalStyle.view}>
            <View style = {{marginTop: 25}}>
              <Text style={this.props.screenProps.globalStyle.message}>Would you like to stomp this footprint?</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center'}}>
                <Picker
                  selectedValue={this.state.stompValue}
                  hideUnderline
                  showSearch
                  style={{height: 350, width: 100, color: "white", marginLeft: 70}}
                  itemTextStyle={{ fontSize: 15, color: 'white' }}
                  itemStyle={{
                    color: "white",
                    textDecorationColor: "white",
                    marginLeft: 0,
                    paddingLeft: 15
                  }}
                  onValueChange={(itemValue, itemIndex) => this.setState({stompValue: itemValue})}
                  >
                  {this.getPickerValues()}
                </Picker>
                <Text style={this.props.screenProps.globalStyle.picker} >Points</Text>
              </View>
            </View>
            <View style = {{flex:1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => this.handleDonePress(0)}>
                  <View style={this.props.screenProps.globalStyle.purpleButton} >
                    <Text style={this.props.screenProps.globalStyle.buttonText}>No thanks</Text>
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
