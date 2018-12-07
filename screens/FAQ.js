import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default class FAQScreenComponent extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <View style={this.props.screenProps.globalStyle.view}>
      <View style={this.props.screenProps.globalStyle.questionContainer}>
      <Text style={this.props.screenProps.globalStyle.question}>So what are footprints and Rambls?</Text>
      <Text style={this.props.screenProps.globalStyle.detail}>A footprint is an off-the-beaten path activity, sourced by other
      Ramblrs, and further curated by us based on what you've liked so far. A Rambl is a set of footprints that pair well together
      and will fill the time you have, when you have it.</Text>
      </View>
      <View style={this.props.screenProps.globalStyle.questionContainer}>
      <Text style={this.props.screenProps.globalStyle.question}>And what are points for?</Text>
      <Text style={this.props.screenProps.globalStyle.detail}>Incentive! You earn them based on your engagement and you can trade them in
      for real dollars at a rate of $0.01 per point. Users all start with 100 Rambl points, and you can earn points actively, by stomping on footprints.</Text>
      </View>
      <View style={this.props.screenProps.globalStyle.questionContainer}>
      <Text style={this.props.screenProps.globalStyle.question}>...okay, what's a stomp?</Text>
      <Text style={this.props.screenProps.globalStyle.detail}>Think of it as a friendly wager that a footprint you liked will be popular. Depending on how much you stomp and the type of footprint it is,
      we'll decide how many Ramblrs you'll need to visit and rate the footprint 4 stars within that amount of time. If you win, you earn your stomp in points. If you dont, well, there's always next time :)</Text>
      </View>
      <View style={this.props.screenProps.globalStyle.questionContainer}>
      <Text style={this.props.screenProps.globalStyle.question}>Does my status matter? What are the types of statuses?</Text>
      <Text style={this.props.screenProps.globalStyle.detail}>Yes! There are five levels: novice, ramblr, stomper, and influencer. You can view your
      status anytime on your profile page. When you reach influencer status, you can leave new footprints for other users, and earn
      1% of all future stomps on the footprint.</Text>
      </View>
      </View>
    );
  }
}
