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
            <Text style={this.props.screenProps.globalStyle.detail}> Looks like you just visited a footprint! </Text>
            <Text style={this.props.screenProps.globalStyle.detail}> Rate it now! </Text>
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
            <Text style={this.props.screenProps.globalStyle.detail}>Would you like to stomp this footprint?</Text>
            <View style = {{flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'}}>
            <View style = {{flex: 1}}>
              <Button title = "No" onPress={() => this.props.setRamblState("Complete")} />
              </View>
            <View style = {{flex: 1}}>
              <Button title = "Yes!"/>
              </View>
           </View>
        </View>
      );
    }
  }
