import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
export default class thirdScreen extends React.Component{
  constructor(props){
        super(props);
        // navigate = props.navigation
        // this.state={email:'',password:'',device_token:'',device_type:''};

    }
nextPage = (isExpanded, hasChildrenNodes) => {
  this.props.navigation.navigate('firstScreen')

}

render(){
    return(
        <View style={styles.container}>
            <Image style={{width: 128, height:128}} source ={{uri: 'https://picsum.photos/id/671/536/354'}} />
            <Text style={styles.welcome}>
                BIOHAZARDS
            </Text>
            <Text style={styles.welcome}>
                This symbol represents a biohazards.
            </Text>
            <Text onPress={this.nextPage} style={styles.text2}>Add to map</Text>
        </View>
    );
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
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


thirdScreen.navigationOptions ={
    title: 'Third Screen Title'
}
