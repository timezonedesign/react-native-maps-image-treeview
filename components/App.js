import React,{Component} from 'react';
import {
    ImageBackground,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Linking,
} from 'react-native';
import firebase from '../Firebase';
import firstScreen from './firstScreen';
import secondScreen from './secondScreen';
import thirdScreen from './thirdScreen';

export default class Home extends Component{
    static navigationOptions ={
        title : 'Home Screen',
    }
    constructor(props){
        super(props);
        navigate = this.props,
        // this.state={email:'',password:'',device_token:'',device_type:''};
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
            codeword:'',
            isLoading: true,
            boards: []
        };
    }
    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { codeword } = doc.data();
            boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            codeword,
            });
        });
        this.setState({
            boards,
            isLoading: false,
        });
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
    login = () => {
        firstScreen.navigationOptions = secondScreen.navigationOptions = thirdScreen.navigationOptions ={
            title : this.state.codeword,
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                width: '100%',
            },
        };
        this.props.navigation.navigate('firstScreen', {codeword: this.state.codeword});
    }
    render(){
        return(
            <View style={styles.container}>

                <ImageBackground style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- MiniCarta -</Text>

                        <View style={styles.inputContainer}>

                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       onChangeText={(codeword) => this.setState({codeword})}
                                       value={this.state.codeword}
                                       placeholder='codeword' />
                            <Button
                                onPress={this.login}
                                title="Login"/>
                        </View>
                    </View>
                    <Text
                    style={styles.text3}
                    onPress={() => {Linking.openURL('https://firebasestorage.googleapis.com/v0/b/emergy-19023.appspot.com/o/minicarta-legal.html?alt=media')}}
                    >
                        Terms and Conditions
                    </Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    backgroundImage:{
        flex:1,
        alignSelf:'stretch',
        width:null,
        justifyContent:'center',
        backgroundColor: '#ABD8FC',
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
    content:{
        alignItems:'center',
    },
    logo:{
        top: '-30%',
        color:'white',
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'bold',
        textShadowColor:'#252525',
        textShadowOffset:{width:2,height:2},
        textShadowRadius:15,
        marginBottom:20,
    },
    inputContainer:{
        top: '-30%',
        margin:20,
        marginBottom:0,
        padding:20,
        paddingBottom:10,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'rgba(255,255,255,0.2)',
    },
    input:{
        fontSize:16,
        height:40,
        padding:10,
        marginBottom:10,
        backgroundColor:'rgba(255,255,255,1)',
    },
    text3:{
      position: 'absolute',
      bottom: '1%',
      left: '2%',
      fontSize: 16,
      color: '#0000ff',
      textDecorationLine: 'underline',
    }
});