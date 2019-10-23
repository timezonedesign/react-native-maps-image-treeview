import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import firebase from '../Firebase';
// import undefined from 'firebase/empty-import';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class firstScreen extends Component{
    static navigationOptions ={
        title : 'Back',
    }
    constructor(props){
        super(props);
        const { navigation } = this.props;
        var collection_name = navigation.getParam('codeword', 'No Codeword');
        if (collection_name == '') collection_name = 'nocodeword';
        this.ref = firebase.firestore().collection(collection_name);
        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            tabs: [],
            region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            },
            marker: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            }
        };
    }
    onCollectionUpdate = (querySnapshot) => {
        const tabs = [];
        querySnapshot.forEach((doc) => {
            const { icon, longitude, latitude } = doc.data();
            tabs.push({
            key: doc.id,
            icon,
            doc, // DocumentSnapshot
            longitude,
            latitude,
            });
        });
        this.setState({
            tabs,
            isLoading: false,
        });
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        this.load()
        this.props.navigation.addListener('willFocus', this.load)
    }
    load = () => {
        const { navigation } = this.props;
        var icon = navigation.getParam('icon', 'no_icon');
        console.log(JSON.stringify(icon));
        if(icon!='' && icon!='no_icon'){
            this.saveBoard();
        }
    }
    saveBoard() {
        this.setState({
            isLoading: true,
        });
        const { navigation } = this.props;
        var icon = navigation.getParam('icon', 'no_icon');
        console.log(icon);
        this.ref.add({
            icon: icon,
            longitude: this.state.marker.longitude,
            latitude: this.state.marker.latitude,
        }).then((docRef) => {
            this.setState({
            // title: '',
            // description: '',
            // author: '',
            isLoading: false,
            });
            // this.props.navigation.goBack();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            this.setState({
            isLoading: false,
            });
        });
    }
nextPage = () => {
    this.props.navigation.navigate('secondScreen')
}
onRegionChange = (region) => {
    this.setState({
      region,
      marker: {
        latitude: region.latitude,
        longitude: region.longitude,
      }
    });
  }
render(){
    const { navigation } = this.props;
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            onRegionChangeComplete={this.onRegionChange}
            initialRegion={this.state.region}
            >
            <Marker coordinate={this.state.marker} />
            {
                this.state.tabs.map((item, i) => (
                    <Marker
                    key={i}
                    coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                    }}
                    // description={"This is a marker in React Natve"}
                    >
                    <Image source ={item.icon} style={{height: 35, width:35 }} />
                    </Marker>
                ))
                
            }
            </MapView>
            <Text style={styles.text1}>{navigation.getParam('codeword', 'No Codeword')}</Text>
            <Text onPress={this.nextPage} style={styles.text2}>+</Text>
            <Text style={styles.text3}>Terms of Service</Text>
        </View>
        </SafeAreaView>
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