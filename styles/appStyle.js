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
    fontWeight: 'bold',
    fontSize: 25,
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
  footprintitemR:{
     color: '#FFFFFF',
     backgroundColor: "#686666",
     fontSize: 20,
     width: 0.5*Dimensions.get('window').width-15,
     // height: 30,
     paddingRight: 10,
     alignContent: "flex-start",
     // height: 20,
     // textAlign: "center",
  },
  footprintitemL:{
     color: '#FFFFFF',
     backgroundColor: "#686666",
     fontSize: 20,
     width: 0.5*Dimensions.get('window').width-15,
     // height: 25,
     // height: 30,
     // borderRadius: 3,
     // overflow: 'hidden',
     // borderBottomLeftRadius: 3,
     // borderBottomTopRadius: 3,

     // alignItems: "left",
  },
  map: {
     height: 200,
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
  rambl:{
    backgroundColor: "#686666",
    flex:1,
    justifyContent: 'center',
    width: 392,
    height: 130,
    marginTop: 10,
    marginBottom: 5,
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
