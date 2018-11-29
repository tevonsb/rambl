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
    fontSize: 30,
    textAlign: 'center',
    // text-align: center;
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  body: {
    fontSize: 20,
  },
  view:{
    backgroundColor: "#212121",
    flex:1,
    padding: 10,
  },
  test: {
    backgroundColor: '#FFFFFF',
  },
  footprintlist:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: "#686666",
  },
  footprintitem:{
    color: '#FFFFFF',
    padding: 5,
    fontSize: 20,
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
    margin: 10,
  },
  rambl:{
    backgroundColor: "#686666",
    flex:1,
    justifyContent: 'center',
    width: 370,
    height: 45,
    margin: 10,
    padding: 10,
    color: "white",
    fontSize: 20,
    borderRadius: 3,
    overflow: 'hidden',
    shadowColor: "white",
    shadowOffset: {width: 1, height: -1},
    shadowRadius: 10
  },
});
