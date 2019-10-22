import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default class firstScreen extends Component{
    static navigationOptions ={
        title : 'First Screen Title',
    }
    constructor(props){
        super(props);
        // navigate = props.navigation
        // this.state={email:'',password:'',device_token:'',device_type:''};

    }
nextPage = () => {
    this.props.navigation.navigate('secondScreen')
}
render(){
    return(
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
                <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                description={"This is a marker in React Natve"}
                >

                <Image source ={{uri: 'https://picsum.photos/id/671/536/354'}} style={{height: 35, width:35 }} />

                </Marker>
            </MapView>
            <Text style={styles.text1}>sneaky-rabit-house</Text>
            <Text onPress={this.nextPage} style={styles.text2}>+</Text>
            <Text style={styles.text3}>Terms of Service</Text>
        </View>
    );
}
// firstScreen.navigationOptions ={
//     title: 'First Screen Title'
// }
}
// export default firstScreen

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
   left: '2%',
   width: '96%',
   height: '86%'
 },
  text1: {
     ...StyleSheet.absoluteFillObject,
    left: 120,
    top: 10,
    // zIndex: 2,
    fontSize: 20,
    fontWeight: "900",
 },
 text2: {
     ...StyleSheet.absoluteFillObject,
   left: '2%',
   top: '87%',
   width: '96%',
   height: '10%',
   backgroundColor: '#72AC4D',
   borderRadius: 10,
   borderColor: '#4E7635',
   borderWidth: 2,
   fontSize: 72,
   color: '#ffffff',
   textAlign: 'center',
   textAlignVertical: 'center',
   lineHeight: 72
 },
 text3: {
    left: '2%',
    fontSize: 16,
    color: '#0000ff',
    textDecorationLine: 'underline'
 },
});