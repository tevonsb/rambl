import React, { Component } from 'react';
import { View, StyleSheet, Button} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Footprint = t.struct({
  title: t.String,
  address: t.String,
  description: t.String,
  category: t.String
});

export default class App extends Component {

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  }

  render() {
    return (
      <View style={styles.container}>
        <Form type={Footprint} /> {/* Notice the addition of the Form component */}
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

// import t from 'tcomb-form-native';
// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Button,
//   View
// } from 'react-native';
//
// import ProfileScreenComponent from './ProfileScreen.js';
// import GenerateForm from 'react-native-form-builder';
//
// const fields = [
//   {
//     type: 'text',
//     footprintTitle: 'Title',
//     required: true,
//     label: 'Footprint Title',
//   },
//   {
//     type: 'text',
//     address: 'Address',
//     required: true,
//     label: 'Address',
//   },
//   {
//     type: 'text',
//     description: 'description',
//     required: true,
//     label: 'Description',
//   },
//   {
//     type: 'picker',
//     name: 'country',
//     mode: 'dialog',
//     label: 'Select Category',
//     defaultValue: 'Food',
//     options: ['Food', 'Outdoor Leisure', 'Art', 'Culture', 'NightLife', 'Other'],
//   },
// ];
//
// export default class CreateFootprint extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   onPress() {
//     return (<ProfileScreenComponent {...this}/>);
//   }
//
//   render() {
//     return (
//       <View style={styles.wrapper}>
//         <View>
//           <GenerateForm
//             ref={(c) => {
//               this.formGenerator = c;
//             }}
//             fields={fields}
//           />
//         </View>
//         <TouchableOpacity onPress={()=> this.onPress()}>
//           <View style={this.props.screenProps.globalStyle.purpleButton}>
//           <Text style={this.props.screenProps.globalStyle.buttonText}>Submit!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//
// }
// }
//
//
//
// const styles = StyleSheet.create({
//   wrapper: {
//    flex: 1,
//    marginTop: 150,
//  }
// });
