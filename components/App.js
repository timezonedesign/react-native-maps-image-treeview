import React,{Component} from 'react';
import {
    ImageBackground,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
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
            },
        };
        this.props.navigation.navigate('firstScreen', {codeword: this.state.codeword});
        // fetch('http://span.mobiosolutions.com/api/v1/login',{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify({
        //         email: this.state.username,
        //         password: this.state.password,
        //         device_token: 'aajdflkajdjfajdflkj',
        //         device_type: '1'
        //     })
        // })
        // .then((response) => response.json())
        //     .then((res) => {
        //         if(res.statusCode === 1){
        //             console.log(res);
        //             var username=res.message;
        //             AsyncStorage.setItem('username',username);
        //             this.props.navigation.navigate('SecondScreen')
        //         }else{
        //             alert(res.message);
        //         }
        //     })
        //     .done();
    }
    render(){
        // const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>

                <ImageBackground style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- EMERGENCY -</Text>

                        <View style={styles.inputContainer}>

                            <TextInput underlineColorAndroid='transparent' style={styles.input}
                                       onChangeText={(codeword) => this.setState({codeword})}
                                       value={this.state.codeword}
                                       placeholder='codeword' />

                            {/* <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                                       onChangeText={(password) => this.setState({password})}
                                       value={this.state.password} placeholder='password'/> */}
                            {/*<Button*/}
                            {/*onPress={() => navigate('SecondScreen')}*/}
                            {/*title="Login"/>*/}

                            <Button
                                onPress={this.login}
                                title="Login"/>
                        </View>
                    </View>
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
});