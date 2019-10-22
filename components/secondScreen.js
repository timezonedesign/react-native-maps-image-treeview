import React from 'react';
import TreeView from 'react-native-final-tree-view';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
const family = [
  {
    id: 'Grandparent',
    name: 'https://picsum.photos/id/671/536/354',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'https://picsum.photos/id/671/536/354',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'https://picsum.photos/id/671/536/354',
            age: 10,
          },
          {
            id: 'Rose',
            name: 'https://picsum.photos/id/671/536/354',
            age: 12,
          },
        ],
      },
    ],
  },
]
function getIndicator(isExpanded, hasChildrenNodes, name) {
  // if (!hasChildrenNodes) {
  //   return (<Image source ={{uri: name}} />)
  // } else if (isExpanded) {
  //   return (<Image source ={{uri: name}} />)
  // } else {
  //   return (<Image source ={{uri: name}} />)
  // }
  return (<Image style={{width: 30, height:30}} source ={{uri: name}} />)
}
export default class secondScreen extends React.Component{
  constructor(props){
        super(props);
        // navigate = props.navigation
        // this.state={email:'',password:'',device_token:'',device_type:''};

    }
nextPage = (isExpanded, hasChildrenNodes) => {
  //this.props.navigation.navigate('thirdScreen')

}

render(){
    return(
      <TreeView
      data={family} // defined above
      onNodePress = {({ node, level }) => {
        if(level == 2) {
          this.props.navigation.navigate('thirdScreen')
          return false;
        } else {
          return true;
        }
      }}
      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
        return (
          <View style={{marginLeft: 25 * level, flexDirection:'row', flexWrap:'wrap'}}>
            {getIndicator(isExpanded, hasChildrenNodes, node.name)}
            <Text
              onPress ={this.nextPage(isExpanded, hasChildrenNodes)}
            >
               {node.name}
            </Text>
          </View>
        )
      }}
    />
    );
}
}