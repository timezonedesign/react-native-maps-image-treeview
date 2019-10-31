import React from 'react';
import TreeView from 'react-native-final-tree-view';
import { SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage ,
} from 'react-native';
import icons from './data'
function getIcon(icon) {
  return (<Image style={{width: 24, height:24}} source={{uri: icon}} />);
}
function getName(name, level) {
  edited_name = name;
  if(edited_name.length>26-level*2)edited_name = edited_name.substr(0,24-level*2) + "...";
  return edited_name;
}
export default class secondScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: icons,
      search: '',
      recent: '',
    };
  }
  componentDidMount(){
    this._retrieveData();
  }
  _storeData = async (node) => {
    console.log(node);
    try {
        var equalto = true;
      for(i=0;i<icons[0].children.length;i++){
        if(icons[0].children[i].name==node.name) equalto=false;
      }
      if(equalto){
        node1=node;
        node1.id = node1.id+10000;
        icons[0].children.unshift(node1);
        if(icons[0].children.length>5) icons[0].children.splice(5,1);
      }
      await AsyncStorage.setItem('name', JSON.stringify(icons[0].children));
      this.setState({data: icons});
    } catch (error) {
        // Error saving data
    }
  }
  _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
            temp1=JSON.parse(value);
            console.log(temp1[0]);
            icons[0].children=[];
            icons[0].children=JSON.parse(value);
            this.setState({data: icons});
        }
    } catch (error) {
        // Error retrieving data
    }
  }

  updateSearch = search => {
    var icons1 = JSON.parse(JSON.stringify(icons));
    var data1 = this.keywordFilter(icons1, search);
    this.setState({data: data1, search: search});
  };
 
  keywordFilter = (nodes, keyword) => {
    var newNodes = [];
    for (var n of nodes) {
      if (n.children) {
        var nextNodes = this.keywordFilter(n.children, keyword);
        if (nextNodes.length > 0) {
          n.children = nextNodes;
        } else if (n.name.toLowerCase().includes(keyword.toLowerCase())) {
          n.children = nextNodes.length > 0 ? nextNodes : [];
        }
        if (
          nextNodes.length > 0 ||
          n.name.toLowerCase().includes(keyword.toLowerCase())
        ) {
          newNodes.push(n);
        }
      } else {
        if (n.name.toLowerCase().includes(keyword.toLowerCase())) {
          newNodes.push(n);
        }
      }
    }
    return newNodes;
  };
  render(){
    return(
      <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={this.state.search}
        style={styles.searchbar}
      />
      <ScrollView style={styles.scrollview}>
      {/* <ScrollView horizontal> */}
      <View>
      <TreeView
      data={this.state.data} // defined above
      onNodePress = {({ node, level }) => {
        if(node.id > 0) {
          this._storeData(node);
          this.props.navigation.navigate('thirdScreen', {name:node.name, icon: node.icon})
          return false;
        } else {
          return true;
        }
      }}
      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
        return (
        <React.Fragment key={node.id}>
          <View style={{marginLeft: 25 * level, flexDirection:'row', flexWrap:'wrap', lineHeight: 48,}}>
            {getIcon(node.icon)}
            <Text style={styles.text}>
               {"  "}{getName(node.name, level)}
            </Text>
          </View>
        </React.Fragment>
        )
        }
    }
    />
    </View>
    {/* </ScrollView> */}
    </ScrollView>
    </View>
    );
  }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
    },
    scrollview: {
        position: 'absolute',
        top: '10%',
        height: '85%',
        width: '100%',
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
    text: {
      fontSize: 24,
      marginTop: -5,
    },
});