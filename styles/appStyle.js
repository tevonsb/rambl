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

  },
  footprintContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 3,
    padding: 5,
  },
  map: {
     height: 300,
     width: Dimensions.get('window').width -20,
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
  },
  purpleButton:{
    width : 150,
    height: 30,
    color: 'white',
    backgroundColor: '#9839F7',
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
