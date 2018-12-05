import {
  StyleSheet,
  Dimensions,
} from 'react-native';


export default globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#E5E5E5"
  },
  header: {
    color: '#FFFFFF',
    // fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 5,
    // textAlign: 'center',
    // text-align: center;
  },
  view:{
    backgroundColor: "#212121",
    flex:1,
    padding: 10,
  },
  footprintlist:{
    flex:1,
    flexDirection: "row",
    margin: 5,
    borderRadius: 7,
    overflow: 'hidden',
    height: 20,
    // justifyContent: 'space-evenly',
    // margin: 5,
    // alignContent: "space-between",
    // backgroundColor: "#686666",
    // width: Dimensions.get('window').width,
  },
  footprintItem:{
     color: '#FFFFFF',
     fontSize: 20,
  },
  footprintDetail: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 3,
    flex:1,
    flexWrap: 'wrap',
  },
  footprintButton:{
    width : 150,
    height: 35,
    color: 'white',
    backgroundColor: '#327ba7',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 6,
    marginLeft:15 ,
    marginRight: 15,
    paddingTop: 3,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10
  },
  footprintContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 0,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  questionContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 0,
    backgroundColor: "#327ba7",
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  ratingContainer: {
    margin: 10,
    borderRadius: 3,
    padding: 5,
  },
  announcementContainer: {
    justifyContent: 'center',
    width: Dimensions.get('window').width-20,
    height: 130,
    backgroundColor: "#327ba7",
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  buttonContainer: {
    // marginTop:10,
    // height:45,
    // // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // marginBottom:20,
    // width:250,
    // borderRadius:30,
    // backgroundColor: "#00BFFF",
    width : 190,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    // alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    // marginLeft:5 ,
    // marginRight: 3,
    // paddingTop: 5,
    // paddingBottom: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: "center"
  },
  announcementText:{
    color: '#FFFFFF',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
  question: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight:"bold",
    // marginTop: 10,
  },
  map: {
     height: 300,
     width: Dimensions.get('window').width -20,
  },
  largeMap: {
     height: 600,
     width: Dimensions.get('window').width,
  },
  picker:{
    color: '#FFFFFF',
    fontSize: 20,
    height: 150,
    width: 100,
    margin: 10,
    paddingTop: 85,
    justifyContent: 'center',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 20,
    // marginTop: 10,
  },
  detail: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10,
  },
  confirmtationText:{
    color: '#FFFFFF',
    fontSize: 30,
    marginBottom:100,
  },
  buttonText:{
    color: '#FFFFFF',
    fontSize: 20,
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 80,
  },
  purpleButton:{
    width : 150,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    alignItems: 'center',
    // marginTop: 6,
    marginLeft:15 ,
    marginRight: 15,
    paddingTop: 3,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10
  },
  purpleButtonLarger: {
    // marginTop:10,
    // height:45,
    // // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // marginBottom:20,
    // width:250,
    // borderRadius:30,
    // backgroundColor: "#00BFFF",
    width : 160,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    // alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    // marginLeft:5 ,
    // marginRight: 3,
    // paddingTop: 5,
    // paddingBottom: 5,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: "center"
  },
  rambl:{
    backgroundColor: "#686666",
    flex:1,
    justifyContent: 'center',
    width: Dimensions.get('window').width-20,
    height: 130,
    marginBottom: 10,
    // marginBottom: 5,
    padding: 8,
    color: "white",
    fontSize: 20,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10
  },

});
