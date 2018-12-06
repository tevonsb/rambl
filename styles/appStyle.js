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
    fontSize: 25,
    paddingTop: 5,
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
  },
  footprintItem:{
     color: '#FFFFFF',
     fontSize: 20,
  },
  footprintDetail: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 3,
    paddingRight: 10,
    flex:1,
    flexWrap: 'wrap',
  },
  footprintAddress: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 1,
    paddingRight: 10,
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
    margin: 10,
    borderRadius: 3,
    padding: 10,
  },
  stompContainer: {
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
    backgroundColor: "#212121",
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  announcementContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 0,
    backgroundColor: "#212121",
    marginTop: 25,
    marginBottom: 30,
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  ratingContainer: {
    margin: 10,
    borderRadius: 3,
    padding: 5,
  },
  buttonContainer: {
    width : 190,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginTop: 20,
    marginBottom: 20,
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
     height: 620,
     width: Dimensions.get('window').width-20,
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
  },
  stompHeader:{
    color: '#FFFFFF',
    fontSize: 16,
  },
  stompDetail:{
    color: '#FFFFFF',
    fontSize: 15,
    padding: 4
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
    width : 160,
    height: 35,
    color: 'white',
    backgroundColor: '#9839F7',
    marginTop: 20,
    marginBottom: 20,
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
    width: Dimensions.get('window').width-40,
    marginBottom: 10,
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
