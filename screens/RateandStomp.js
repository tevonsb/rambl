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
  View
} from 'react-native';

import RamblDetailComponent from './RamblDetailScreen.js';
import HistoryDetailComponent from './HistoryScreen.js';
import StarRating from 'react-native-star-rating';
import GenerateStompComponent from './GenerateStompScreen.js';

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
            <View style = {{flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => this.props.setRamblState("Rambling")}>
                <View style={this.props.screenProps.globalStyle.purpleButton} >
                <Text style={this.props.screenProps.globalStyle.buttonText}>No</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.setRamblState("generateStomp")}>
                <View style={this.props.screenProps.globalStyle.purpleButton} >
                <Text style={this.props.screenProps.globalStyle.buttonText}>Yes!</Text>
                </View>
              </TouchableOpacity>
          
        </View>
        </View>
      );
    }
  }
