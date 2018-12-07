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
        "key": (this.props.stomps.length+1).toString(),
        "title": this.props.footprint.title,
        "Address":this.props.footprint.address,
        "rating": this.state.starCount,
        "stake":this.state.stompValue,
        "stake_time": "11/0/2020",
        "needed": 4,
        "got": 0,
        "percent":0,
      }
      this.props.setGlobalState({stomps: [newStomp, ...this.props.stomps]});
      this.props.handleStomp();
    }
  }

  getPickerValues(){
    const values = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    return values.map((number) =>
    <Picker.Item key={number.toString()} label={number.toString()} value={number}/>);
    }

    render() {
      return (
        <View style={this.props.screenProps.globalStyle.view}>
          <View style = {this.props.screenProps.globalStyle.announcementContainer}>
            <Text style={this.props.screenProps.globalStyle.announcementText}> How was the footprint? </Text>
          </View>
          <View style = {this.props.screenProps.globalStyle.ratingContainer}>
            <View style ={{marginBottom: 0, marginTop: 10}}>
              <View style ={{marginBottom: 25}}>
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
          </View>
          <View style={this.props.screenProps.globalStyle.view}>
            <View style = {this.props.screenProps.globalStyle.announcementContainer}>
              <Text style={this.props.screenProps.globalStyle.announcementText}>Would you like to stomp it?</Text>
            </View>
            <View style = {{marginLeft:10, marginBottom:15, marginTop: 10}}>
            <Text style={this.props.screenProps.globalStyle.message}>If so, select the number of points:</Text>
            </View>
            <View style = {{marginTop: 0, marginBottom:25}}>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center'}}>
                <Picker
                  selectedValue={this.state.stompValue}
                  hideUnderline
                  showSearch
                  style={{height: 220, width: 100, color: "white", marginLeft: 70}}
                  itemTextStyle={{ fontSize: 20, color: 'white' }}
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
              <View style = {{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                  <TouchableOpacity onPress={() => this.handleDonePress(0)}>
                    <View style={styles.buttonContainer} >
                      <Text style={this.props.screenProps.globalStyle.buttonText}>Rate Only</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handleDonePress(this.state.stompValue)}>
                    <View style={styles.buttonContainer} >
                      <Text style={this.props.screenProps.globalStyle.buttonText}>Rate and Stomp!</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        buttonContainer: {
          width : 180,
          height: 35,
          color: 'white',
          backgroundColor: '#9839F7',
          marginTop: 10,
          marginLeft: 5,
          marginRight: 5,
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
