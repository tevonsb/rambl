import {
  StyleSheet
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
    flexDirection: 'row',
    // backgroundColor: "#686666",
    height: 10,
  },
  footprintitem:{
     color: '#FFFFFF',
     width: 100,
     height: 20,
     backgroundColor: 'powderblue',
     fontSize: 20,
  },
  map: {
     flex: 1,
     height: 200,
     width: 395,
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
