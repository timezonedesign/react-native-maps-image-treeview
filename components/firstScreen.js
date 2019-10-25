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

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class firstScreen extends Component{
    constructor(props){
        super(props);
        const { navigation } = this.props;
        var collection_name = navigation.getParam('codeword', 'No Codeword');
        if (collection_name == '') collection_name = 'nocodeword';
        this.ref = firebase.firestore().collection(collection_name);
        this.unsubscribe = null;
        this.state = {
            collection_name: collection_name,
            isLoading: true,
            tabs: [],
            latitude: LATITUDE,
            longitude: LONGITUDE,
            marker: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            },
            mapType: 'standard'
        };
    }
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });
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

        navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
            });
        },
        error => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
        );
        navigator.geolocation.watchPosition(
            position => {
             const { latitude, longitude } = position.coords;
             this.setState({ latitude,longitude
             });
           },
           error => console.log(error),
            { 
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10
            }
        );
    }
    
    load = () => {
        const { navigation } = this.props;
        var icon = navigation.getParam('icon', 'no_icon');
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
        this.ref.add({
            icon: icon,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
        }).then((docRef) => {
            this.setState({
            isLoading: false,
            });
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
  changeMapType = () => {
      switch(this.state.mapType){
        case 'standard':
            this.setState({mapType:'hybrid'});
            break;
        case 'hybrid':
            this.setState({mapType:'mutedStandard'});
            break;
        case 'mutedStandard':
            this.setState({mapType:'satellite'});
            break;
        case 'satellite':
            this.setState({mapType:'terrain'});
            break;
        case 'terrain':
            this.setState({mapType:'standard'});
            break;
      }
  }
render(){
    const { navigation } = this.props;
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <Text onPress={this.changeMapType} style={styles.maptype}>
            <Image  source ={{uri: 'https://firebasestorage.googleapis.com/v0/b/emergy-19023.appspot.com/o/disaster_icons%2Fmapstyle.png?alt=media'}} style={{height: 48, width:48}} />
        </Text>
            <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            mapType={this.state.mapType}
            region={this.getMapRegion()}
            >
            <Marker coordinate={this.getMapRegion()} />
            {
                this.state.tabs.map((item, i) => (
                    <Marker
                    key={i}
                    coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                    }}
                    >
                    <Image source ={{uri: item.icon}} style={{height: 35, width:35 }} />
                    </Marker>
                ))
                
            }
            </MapView>
            <Text onPress={this.nextPage} style={styles.text2}>+</Text>
        </View>
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
 },
 maptype: {
     position:'absolute',
     top:'-5%',
     right: '3%',
     lineHeight: 100,
     zIndex: 2,
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
});