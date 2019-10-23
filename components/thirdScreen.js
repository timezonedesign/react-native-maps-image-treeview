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
  }
  nextPage = () => {
    const { navigation } = this.props;
    var icon = navigation.getParam('icon', 'no_url');
    console.log(icon);
    this.props.navigation.navigate('firstScreen',{icon: icon})
  }
  
  render(){
    const { navigation } = this.props;
    var icon = navigation.getParam('icon', 'no_url');
    var name = navigation.getParam('name', 'no_url');
    return(
        <View style={styles.container}>
            <Image style={styles.image} source ={icon} />
            <Text style={styles.iconName}>
                {name.toUpperCase()}
            </Text>
            <Text style={styles.instructions}>
                This symbol represents{"\n"} a {name.toLowerCase()}
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
    image: {
      // ...StyleSheet.absoluteFillObject,
      top: '-10%',
      width: 256, 
      height:256,
    },
    iconName:{
      top: '-10%',
        fontWeight: '600',
        fontSize:32,
        textAlign:'center',
        margin:10,
    },
    instructions:{
      top: '-10%',
        fontWeight: '600',
        fontSize: 28,
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
    text2: {
     ...StyleSheet.absoluteFillObject,
    left: '2%',
    top: '75%',
    width: '96%',
    height: '10%',
    backgroundColor: '#72AC4D',
    borderRadius: 10,
    borderColor: '#4E7635',
    borderWidth: 2,
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 36
    },
});


thirdScreen.navigationOptions ={
    title: 'Back'
}
