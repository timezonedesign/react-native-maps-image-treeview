import React from 'react';
import TreeView from 'react-native-final-tree-view';
import { SearchBar } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

function getIndicator(icon) {
  return (<Image style={{width: 24, height:24}} source = {icon} />);
}
export default class secondScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: icons,
      search: ''
    };
    this.clearSearch();
  }
  updateSearch = search => {
    var data1 = this.keywordFilter(icons, search);
    this.setState({data: data1, search: search});
  };
  clearSearch = () => {
    var data1 = this.keywordFilter(icons, '');
    this.setState({data: icons, search: ''});
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
          // n.name = this.getHighlightText(n.name, keyword);
          newNodes.push(n);
        }
      } else {
        if (n.name.toLowerCase().includes(keyword.toLowerCase())) {
          // n.name = this.getHighlightText(n.name, keyword);
          newNodes.push(n);
        }
      }
    }
    return newNodes;
  };
  render(){
    return(
      <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        onClear={this.clearSearch}
        value={this.state.search}
      />
      <ScrollView>
      <View>
      <TreeView
      style={styles.treeview}
      data={this.state.data} // defined above
      onNodePress = {({ node, level }) => {
        if(node.id > 0) {
          this.props.navigation.navigate('thirdScreen', {name:node.name, icon: node.icon})
          return false;
        } else {
          return true;
        }
      }}
      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
        return (
          <View style={{marginLeft: 25 * level, flexDirection:'row', flexWrap:'wrap', lineHeight: 48,}}>
            {getIndicator(node.icon)}
            <Text style={styles.text}>
               {"  "}{node.name}
            </Text>
          </View>
        )
        }
    }
    />
    </View>
    </ScrollView>
    </View>
    );
  }
}
secondScreen.navigationOptions ={
    title: 'Back'
}
const styles=StyleSheet.create({
    treeview:{
        // lineHeight: 32
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
    //  ...StyleSheet.absoluteFillObject,
    // left: '2%',
    // top: '80%',
    // width: '96%',
    // height: '10%',
    // backgroundColor: '#72AC4D',
    // borderRadius: 10,
    // borderColor: '#4E7635',
    // borderWidth: 2,
    // padding: 5,
    fontSize: 24,
    marginTop: -5,
    // color: '#ffffff',
    // textAlign: 'center',
    // textAlignVertical: 'center',
    // lineHeight: 32,
    // height: 32
    },
});

const icons = [
  {
      id: -1,
      name: 'Manmade Hazards',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 1,
              name: 'Fire House',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-House_256x256.png'),
          },
          {
              id: 2,
              name: 'Fire School',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-School_256x256.png'),
          },
          {
              id: 3,
              name: 'Explosion',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Explosion_256x256.png'),
          },
          {
              id: 4,
              name: 'Structural Collapse',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Structural-Collapse_256x256.png'),
          },
          {
              id: 5,
              name: 'HazMat Release',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--HazMat-Release_256x256.png'),
          },
          {
              id: 6,
              name: 'Fire Industrial',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-Industrial_256x256.png'),
          },
          {
              id: 7,
              name: 'Fire Forest',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-Forest_256x256.png'),
          },
          {
              id: 8,
              name: 'Fire Other',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-Other_256x256.png'),
          },
          {
              id: 9,
              name: 'Fire Commercial',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Fire-Commercial_256x256.png'),
          },
          {
              id: 10,
              name: 'Other',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Other_256x256.png'),
          },
          {
              id: 11,
              name: 'Train Derail',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Train-Derail_256x256.png'),
          },
          {
              id: 12,
              name: 'Radiological General',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Radiological-General_256x256.png'),
          },
          {
              id: 13,
              name: 'Plane Crash',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Plane-Crash_256x256.png'),
          },
          {
              id: 14,
              name: 'Radiological Nuclear Power',
              icon: require('../assets/icons/Manmade_Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Radiological-Nuclear-Power_256x256.png'),
          },
      ],
  },
  {
      id: -2,
      name: 'USAR',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 15,
              name: 'Human Remains',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Human--Remains_256x256.png'),
          },
          {
              id: 16,
              name: 'Shelter in Place',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Shelter-in-Place_256x256.png'),
          },
          {
              id: 17,
              name: 'Hazard Fire Other',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Hazard--Fire-Other_256x256.png'),
          },
          {
              id: 18,
              name: 'Victim Detected',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Victim--Detected_256x256.png'),
          },
          {
              id: 19,
              name: 'Occupant Rescued',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Occupant--Rescued_256x256.png'),
          },
          {
              id: 20,
              name: 'Extra Blank',
              icon: require('../assets/icons/USAR/Extra-Blank_256x256.png'),
          },
          {
              id: 21,
              name: 'Occupant Followup',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Occupant--Followup_256x256.png'),
          },
          {
              id: 22,
              name: 'Extra 21',
              icon: require('../assets/icons/USAR/Extra-21_256x256.png'),
          },
          {
              id: 23,
              name: 'Targeted Search',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Targeted-Search_256x256.png'),
          },
          {
              id: 24,
              name: 'Hazard Flood',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Hazard--Flood_256x256.png'),
          },
          {
              id: 25,
              name: 'HazMat DOT Placarding Class Other',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_HazMat-DOT-Placarding--Class-Other_256x256.png'),
          },
          {
              id: 26,
              name: 'Hazard ACCESS BLOCKED No Access',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Hazard--ACCESS--BLOCKED-No-Access_256x256.png'),
          },
          {
              id: 27,
              name: 'Structure Damage',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Structure--Damage_256x256.png'),
          },
          {
              id: 28,
              name: 'LZ Helibase',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_LZ--Helibase_256x256.png'),
          },
          {
              id: 29,
              name: 'Extra 22',
              icon: require('../assets/icons/USAR/Extra-22_256x256.png'),
          },
          {
              id: 30,
              name: 'Structure No Damage',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Structure--No-Damage_256x256.png'),
          },
          {
              id: 31,
              name: 'Structure Destroyed',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Structure--Destroyed_256x256.png'),
          },
          {
              id: 32,
              name: 'Structure Failed',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Structure--Failed_256x256.png'),
          },
          {
              id: 33,
              name: 'Occupant Evaucated',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Occupant--Evaucated_256x256.png'),
          },
          {
              id: 34,
              name: 'Extra 24',
              icon: require('../assets/icons/USAR/Extra-24_256x256.png'),
          },
          {
              id: 35,
              name: 'Occupant Assisted',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Occupant--Assisted_256x256.png'),
          },
          {
              id: 36,
              name: 'Victim Confirmed',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Victim--Confirmed_256x256.png'),
          },
          {
              id: 37,
              name: 'Extra 23',
              icon: require('../assets/icons/USAR/Extra-23_256x256.png'),
          },
          {
              id: 38,
              name: 'Animal Hazard',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Animal-Hazard_256x256.png'),
          },
          {
              id: 39,
              name: 'Blank',
              icon: require('../assets/icons/USAR/Blank_256x256.png'),
          },
          {
              id: 40,
              name: 'Human Remains Removed',
              icon: require('../assets/icons/USAR/INCDNT-USAR--_WHITE__SOLID__DETAIL_Human--Remains-Removed_256x256.png'),
          },
      ],
  },
  {
      id: -3,
      name: 'Public Alerts',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 41,
              name: 'Local Area Emergency Warning',
              icon: require('../assets/icons/Public Alerts/Local-Area-Emergency-Warning_256x256.png'),
          },
          {
              id: 42,
              name: 'Coastal Flood Warning',
              icon: require('../assets/icons/Public Alerts/Coastal-Flood-Warning_256x256.png'),
          },
          {
              id: 43,
              name: 'Flood Statement',
              icon: require('../assets/icons/Public Alerts/Flood-Statement_256x256.png'),
          },
          {
              id: 44,
              name: 'Tsunami Warning',
              icon: require('../assets/icons/Public Alerts/Tsunami-Warning_256x256.png'),
          },
          {
              id: 45,
              name: 'Severe Thunderstorm Warning',
              icon: require('../assets/icons/Public Alerts/Severe-Thunderstorm-Warning_256x256.png'),
          },
          {
              id: 46,
              name: 'Blizzard Warning',
              icon: require('../assets/icons/Public Alerts/Blizzard-Warning_256x256.png'),
          },
          {
              id: 47,
              name: 'Earthquake Statement',
              icon: require('../assets/icons/Public Alerts/Earthquake-Statement_256x256.png'),
          },
          {
              id: 48,
              name: 'Avalanche Watch',
              icon: require('../assets/icons/Public Alerts/Avalanche-Watch_256x256.png'),
          },
          {
              id: 49,
              name: 'Hazardous Materials Warning',
              icon: require('../assets/icons/Public Alerts/Hazardous-Materials-Warning_256x256.png'),
          },
          {
              id: 50,
              name: 'Winter Storm Warning',
              icon: require('../assets/icons/Public Alerts/Winter-Storm-Warning_256x256.png'),
          },
          {
              id: 51,
              name: 'Fire Warning',
              icon: require('../assets/icons/Public Alerts/Fire-Warning_256x256.png'),
          },
          {
              id: 52,
              name: 'Earthquake Warning',
              icon: require('../assets/icons/Public Alerts/Earthquake-Warning_256x256.png'),
          },
          {
              id: 53,
              name: 'Severe Thunderstorm Watch',
              icon: require('../assets/icons/Public Alerts/Severe-Thunderstorm-Watch_256x256.png'),
          },
          {
              id: 54,
              name: 'Storm Surge Warning',
              icon: require('../assets/icons/Public Alerts/Storm-Surge-Warning_256x256.png'),
          },
          {
              id: 55,
              name: 'Shelter In Place Warning',
              icon: require('../assets/icons/Public Alerts/Shelter-In-Place-Warning_256x256.png'),
          },
          {
              id: 56,
              name: 'Hurricane Statement',
              icon: require('../assets/icons/Public Alerts/Hurricane-Statement_256x256.png'),
          },
          {
              id: 57,
              name: 'Hurricane Warning',
              icon: require('../assets/icons/Public Alerts/Hurricane-Warning_256x256.png'),
          },
          {
              id: 58,
              name: 'Evacuate Immediately Warning',
              icon: require('../assets/icons/Public Alerts/Evacuate-Immediately-Warning_256x256.png'),
          },
          {
              id: 59,
              name: 'Hurricane Watch',
              icon: require('../assets/icons/Public Alerts/Hurricane-Watch_256x256.png'),
          },
          {
              id: 60,
              name: 'Civil Danger Warning',
              icon: require('../assets/icons/Public Alerts/Civil-Danger-Warning_256x256.png'),
          },
          {
              id: 61,
              name: 'Special Weather Warning',
              icon: require('../assets/icons/Public Alerts/Special-Weather-Warning_256x256.png'),
          },
          {
              id: 62,
              name: 'Dust Storm Warning',
              icon: require('../assets/icons/Public Alerts/Dust-Storm-Warning_256x256.png'),
          },
          {
              id: 63,
              name: 'Radiological Hazard Warning',
              icon: require('../assets/icons/Public Alerts/Radiological-Hazard-Warning_256x256.png'),
          },
          {
              id: 64,
              name: '911 Telephone Outage Emergency Warning',
              icon: require('../assets/icons/Public Alerts/911-Telephone-Outage-Emergency-Warning_256x256.png'),
          },
          {
              id: 65,
              name: 'Tsunami Watch',
              icon: require('../assets/icons/Public Alerts/Tsunami-Watch_256x256.png'),
          },
          {
              id: 66,
              name: 'Coastal Flood Watch',
              icon: require('../assets/icons/Public Alerts/Coastal-Flood-Watch_256x256.png'),
          },
          {
              id: 67,
              name: 'Flash Flood Watch',
              icon: require('../assets/icons/Public Alerts/Flash-Flood-Watch_256x256.png'),
          },
          {
              id: 68,
              name: 'Flood Warning',
              icon: require('../assets/icons/Public Alerts/Flood-Warning_256x256.png'),
          },
          {
              id: 69,
              name: 'Extreme Wind Warning',
              icon: require('../assets/icons/Public Alerts/Extreme-Wind-Warning_256x256.png'),
          },
          {
              id: 70,
              name: 'Nuclear Powerplant Warning',
              icon: require('../assets/icons/Public Alerts/Nuclear_Powerplant-Warning_256x256.png'),
          },
          {
              id: 71,
              name: 'Tropical Storm Watch',
              icon: require('../assets/icons/Public Alerts/Tropical-Storm-Watch_256x256.png'),
          },
          {
              id: 72,
              name: 'Flash Flood Warning',
              icon: require('../assets/icons/Public Alerts/Flash-Flood-Warning_256x256.png'),
          },
          {
              id: 73,
              name: 'Emergency Action Notification National Warning',
              icon: require('../assets/icons/Public Alerts/Emergency-Action-Notification-National-Warning_256x256.png'),
          },
          {
              id: 74,
              name: 'Tropical Storm Warning',
              icon: require('../assets/icons/Public Alerts/Tropical-Storm-Warning_256x256.png'),
          },
          {
              id: 75,
              name: 'Severe Weather Statement',
              icon: require('../assets/icons/Public Alerts/Severe-Weather-Statement_256x256.png'),
          },
          {
              id: 76,
              name: 'Storm Surge Watch',
              icon: require('../assets/icons/Public Alerts/Storm-Surge-Watch_256x256.png'),
          },
          {
              id: 77,
              name: 'Law Enforcement Warning',
              icon: require('../assets/icons/Public Alerts/Law-Enforcement-Warning_256x256.png'),
          },
          {
              id: 78,
              name: 'Avalanche Warning',
              icon: require('../assets/icons/Public Alerts/Avalanche-Warning_256x256.png'),
          },
          {
              id: 79,
              name: 'High Wind Warning',
              icon: require('../assets/icons/Public Alerts/High-Wind-Warning_256x256.png'),
          },
          {
              id: 80,
              name: 'High Wind Watch',
              icon: require('../assets/icons/Public Alerts/High-Wind-Watch_256x256.png'),
          },
          {
              id: 81,
              name: 'Tornado Warning',
              icon: require('../assets/icons/Public Alerts/Tornado-Warning_256x256.png'),
          },
          {
              id: 82,
              name: 'Civil Emergency Message Warning',
              icon: require('../assets/icons/Public Alerts/Civil-Emergency-Message-Warning_256x256.png'),
          },
          {
              id: 83,
              name: 'Volcano Warning',
              icon: require('../assets/icons/Public Alerts/Volcano-Warning_256x256.png'),
          },
          {
              id: 84,
              name: 'Flash Flood Statement',
              icon: require('../assets/icons/Public Alerts/Flash-Flood-Statement_256x256.png'),
          },
          {
              id: 85,
              name: 'Winter Storm Watch',
              icon: require('../assets/icons/Public Alerts/Winter-Storm-Watch_256x256.png'),
          },
          {
              id: 86,
              name: 'Flood Watch',
              icon: require('../assets/icons/Public Alerts/Flood-Watch_256x256.png'),
          },
          {
              id: 87,
              name: 'Child Abduction Emergency Statement',
              icon: require('../assets/icons/Public Alerts/Child-Abduction-Emergency-Statement_256x256.png'),
          },
          {
              id: 88,
              name: 'Special Weather Statement',
              icon: require('../assets/icons/Public Alerts/Special-Weather-Statement_256x256.png'),
          },
          {
              id: 89,
              name: 'Nuclear Powerplant Warning',
              icon: require('../assets/icons/Public Alerts/Nuclear-Powerplant-Warning_256x256.png'),
          },
          {
              id: 90,
              name: 'Tornado Watch',
              icon: require('../assets/icons/Public Alerts/Tornado-Watch_256x256.png'),
          },
          {
              id: 91,
              name: 'Special Marine Warning',
              icon: require('../assets/icons/Public Alerts/Special-Marine-Warning_256x256.png'),
          },
      ],
  },
  {
      id: -4,
      name: 'Natural Hazards',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 92,
              name: 'Hurricane',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Hurricane_256x256.png'),
          },
          {
              id: 93,
              name: 'Wind Storm',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Wind-Storm_256x256.png'),
          },
          {
              id: 94,
              name: 'Tornado',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Tornado_256x256.png'),
          },
          {
              id: 95,
              name: 'Avalanche',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Avalanche_256x256.png'),
          },
          {
              id: 96,
              name: 'Severe Weatheri',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Severe-Weatheri_256x256.png'),
          },
          {
              id: 97,
              name: 'Landslide',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Landslide_256x256.png'),
          },
          {
              id: 98,
              name: 'Earthquake',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Earthquake_256x256.png'),
          },
          {
              id: 99,
              name: 'Snow Event',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Snow-Event_256x256.png'),
          },
          {
              id: 100,
              name: 'Tsunami',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Tsunami_256x256.png'),
          },
          {
              id: 101,
              name: 'Volcano',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Volcano_256x256.png'),
          },
          {
              id: 102,
              name: 'Mine Collapse',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Mine-Collapse_256x256.png'),
          },
          {
              id: 103,
              name: 'Other',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Other_256x256.png'),
          },
          {
              id: 104,
              name: 'Flood',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Flood_256x256.png'),
          },
          {
              id: 105,
              name: 'Severe Weather',
              icon: require('../assets/icons/Natural Hazards/HAZARD_NATHAZ_WHITE__SOLID-_DETAIL_Hazard--Severe-Weather_256x256.png'),
          },
      ],
  },
  {
      id: -5,
      name: 'Access Hazards',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: -6,
              name: 'Emergency Access Hazards',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 106,
                      name: 'Clearance Low Height No Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Low-Height-No-Access_256x256.png'),
                  },
                  {
                      id: 107,
                      name: 'Apparatus Ambulance',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Apparatus-Ambulance_256x256.png'),
                  },
                  {
                      id: 108,
                      name: 'NO Vertical Ladder Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Vertical-Ladder-Access_256x256.png'),
                  },
                  {
                      id: 109,
                      name: 'NO Turnaround Fire Engine',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Turnaround-Fire-Engine_256x256.png'),
                  },
                  {
                      id: 110,
                      name: 'Steep Access Extreme',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-Extreme_256x256.png'),
                  },
                  {
                      id: 111,
                      name: 'Road Access Vehicle General',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Road-Access-Vehicle-General_256x256.png'),
                  },
                  {
                      id: 112,
                      name: 'Traffic Calming Traffic Circles',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Traffic-Calming-Traffic-Circles_256x256.png'),
                  },
                  {
                      id: 113,
                      name: 'Steep Access Easy',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-Easy_256x256.png'),
                  },
                  {
                      id: 114,
                      name: 'Clearance Low Height',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Low-Height_256x256.png'),
                  },
                  {
                      id: 115,
                      name: 'Restricted Weight',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Restricted-Weight_256x256.png'),
                  },
                  {
                      id: 116,
                      name: 'NO Vehicle Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Vehicle-Access_256x256.png'),
                  },
                  {
                      id: 117,
                      name: 'NO Turnaround Ambulance',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Turnaround-Ambulance_256x256.png'),
                  },
                  {
                      id: 118,
                      name: 'Clearance Narrow No Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Narrow-No-Access_256x256.png'),
                  },
                  {
                      id: 119,
                      name: 'BLOCKED No Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--BLOCKED-No-Access_256x256.png'),
                  },
                  {
                      id: 120,
                      name: 'Poor Access Vehicle General',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Poor-Access-Vehicle-General_256x256.png'),
                  },
                  {
                      id: 121,
                      name: 'BRIDGE Do Not Cross',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--BRIDGE-Do-Not-Cross_256x256.png'),
                  },
                  {
                      id: 122,
                      name: 'Steep Access Moderate',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-Moderate_256x256.png'),
                  },
                  {
                      id: 123,
                      name: 'NO Turnaround Ladder Truck or Semi Truck',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Turnaround-Ladder-Truck-or-Semi-Truck_256x256.png'),
                  },
                  {
                      id: 124,
                      name: 'Steep Access Difficult',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-Difficult_256x256.png'),
                  },
                  {
                      id: 125,
                      name: 'Apparatus No Fire Engine',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Apparatus-No-Fire-Engine_256x256.png'),
                  },
                  {
                      id: 126,
                      name: 'Turnarounds Roadway',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Turnarounds-Roadway_256x256.png'),
                  },
                  {
                      id: 127,
                      name: 'Clearance Narrow No Access Fire Engine',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Narrow-No-Access-Fire-Engine_256x256.png'),
                  },
                  {
                      id: 128,
                      name: 'Clearance Low Height No Access Fire Engine',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Low-Height-No-Access-Fire-Engine_256x256.png'),
                  },
                  {
                      id: 129,
                      name: 'Traffic Calming Humps',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Traffic-Calming-Humps_256x256.png'),
                  },
                  {
                      id: 130,
                      name: 'Steep Access General',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-General_256x256.png'),
                  },
                  {
                      id: 131,
                      name: 'Turnarounds',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Turnarounds_256x256.png'),
                  },
                  {
                      id: 132,
                      name: 'Apparatus Fire Engine',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Apparatus-Fire-Engine_256x256.png'),
                  },
                  {
                      id: 133,
                      name: 'NO Turnaround',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Turnaround_256x256.png'),
                  },
                  {
                      id: 134,
                      name: 'NO Ladder Truck or Semi Truck Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Ladder-Truck-or-Semi-Truck-Access_256x256.png'),
                  },
                  {
                      id: 135,
                      name: 'Vertical Ladder Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Vertical-Ladder-Access_256x256.png'),
                  },
                  {
                      id: 136,
                      name: 'Clearance Narrow',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Clearance--Narrow_256x256.png'),
                  },
                  {
                      id: 137,
                      name: 'Steep Access Vehicle General',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Steep-Access-Vehicle-General_256x256.png'),
                  },
                  {
                      id: 138,
                      name: 'BLOCKED Road',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--BLOCKED-Road_256x256.png'),
                  },
                  {
                      id: 139,
                      name: 'Traffic Calming Bumps',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Traffic-Calming-Bumps_256x256.png'),
                  },
                  {
                      id: 140,
                      name: 'Turnarounds Freeway',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--Turnarounds-Freeway_256x256.png'),
                  },
                  {
                      id: 141,
                      name: 'NO Turnaround Vehicle General',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Hazards/HAZARD_ACCESS_WHITE-_SOLID-_DETAIL_Hazard--ACCESS--NO-Turnaround-Vehicle-General_256x256.png'),
                  },
              ],
          },
          {
              id: -7,
              name: 'Emergency Access Points',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 142,
                      name: 'Emergency Access Small Vehicle',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Small-Vehicle_256x256.png'),
                  },
                  {
                      id: 143,
                      name: 'Emergency Access Tram or Vertical Lift',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Tram-or-Vertical-Lift_256x256.png'),
                  },
                  {
                      id: 144,
                      name: 'Emergency Personel Access PW Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Personel-Access-PW-Access_256x256.png'),
                  },
                  {
                      id: 145,
                      name: 'Emergency Access Ladder Truck Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Ladder-Truck-Access_256x256.png'),
                  },
                  {
                      id: 146,
                      name: 'Emergency Access Ambulance Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Ambulance-Access_256x256.png'),
                  },
                  {
                      id: 147,
                      name: 'Emergency Personel Access Fire Department Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Personel-Access-Fire-Department-Access_256x256.png'),
                  },
                  {
                      id: 148,
                      name: 'Emergency Personel Access Trail Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Personel-Access-Trail-Access_256x256.png'),
                  },
                  {
                      id: 149,
                      name: 'Emergency Access Water Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Water-Access_256x256.png'),
                  },
                  {
                      id: 150,
                      name: 'Emergency Access Pumper Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Pumper-Access_256x256.png'),
                  },
                  {
                      id: 151,
                      name: 'Emergency Personel Access PD Access',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Personel-Access-PD-Access_256x256.png'),
                  },
                  {
                      id: 152,
                      name: 'Vehicle Parking',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Vehicle-Parking_256x256.png'),
                  },
                  {
                      id: 153,
                      name: 'Emergency Access Walking Access Only',
                      icon: require('../assets/icons/Access Hazards/Emergency Access Points/HAZARD_ACCESS_GREEN-_SOLID-_DETAIL_Emergency-Access-Walking-Access-Only_256x256.png'),
                  },
              ],
          },
      ],
  },
  {
      id: -8,
      name: 'Preplan',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: -9,
              name: 'Key or Knox Box',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 154,
                      name: 'Knox Plain',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--Plain_256x256.png'),
                  },
                  {
                      id: 155,
                      name: 'Knox Drug Vault',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--Drug-Vault_256x256.png'),
                  },
                  {
                      id: 156,
                      name: 'Knox DoorEntry',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--DoorEntry_256x256.png'),
                  },
                  {
                      id: 157,
                      name: 'Knox KeyShunt',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--KeyShunt_256x256.png'),
                  },
                  {
                      id: 158,
                      name: 'Knox Keycard',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--Keycard_256x256.png'),
                  },
                  {
                      id: 159,
                      name: 'Knox DoorEntry',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--DoorEntry_256x256.png'),
                  },
                  {
                      id: 160,
                      name: 'Knox Plain',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--Plain_256x256.png'),
                  },
                  {
                      id: 161,
                      name: 'Knox Drug Vault',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--Drug-Vault_256x256.png'),
                  },
                  {
                      id: 162,
                      name: 'Knox KeyShunt',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--KeyShunt_256x256.png'),
                  },
                  {
                      id: 163,
                      name: 'Knox Keycard',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--Keycard_256x256.png'),
                  },
                  {
                      id: 164,
                      name: 'Knox Residential',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Knox--Residential_256x256.png'),
                  },
                  {
                      id: 165,
                      name: 'Knox Residential',
                      icon: require('../assets/icons/Preplan/Key or Knox Box/PREPLN_ACCESS_GGREEN_SOLID-_DETAIL_Knox--Residential_256x256.png'),
                  },
              ],
          },
          {
              id: -10,
              name: 'Preplan Features',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 166,
                      name: 'Manual',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Manual_256x256.png'),
                  },
                  {
                      id: 167,
                      name: 'Safety Eyewash',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Safety--Eyewash_256x256.png'),
                  },
                  {
                      id: 168,
                      name: 'Medical First Aid',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Medical--First-Aid_256x256.png'),
                  },
                  {
                      id: 169,
                      name: 'Garbage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Garbage_256x256.png'),
                  },
                  {
                      id: 170,
                      name: 'Room Storage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Storage_256x256.png'),
                  },
                  {
                      id: 171,
                      name: 'Location Auto Carport',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Auto-Carport_256x256.png'),
                  },
                  {
                      id: 172,
                      name: 'Medical AED',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Medical--AED_256x256.png'),
                  },
                  {
                      id: 173,
                      name: 'Addressable Location Storage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Storage_256x256.png'),
                  },
                  {
                      id: 174,
                      name: 'Medical ',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Medical--_256x256.png'),
                  },
                  {
                      id: 175,
                      name: 'Room Utility Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Utility-Room_256x256.png'),
                  },
                  {
                      id: 176,
                      name: 'Safety Eyewash',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Safety--Eyewash_256x256.png'),
                  },
                  {
                      id: 177,
                      name: 'MostImportant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_MostImportant_256x256.png'),
                  },
                  {
                      id: 178,
                      name: 'Medical First Aid',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Medical--First-Aid_256x256.png'),
                  },
                  {
                      id: 179,
                      name: 'Location Residential',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Residential_256x256.png'),
                  },
                  {
                      id: 180,
                      name: 'Medical Nurse Station',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Medical--Nurse-Station_256x256.png'),
                  },
                  {
                      id: 181,
                      name: 'Room Library',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Library_256x256.png'),
                  },
                  {
                      id: 182,
                      name: 'Safety Handwash',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Safety--Handwash_256x256.png'),
                  },
                  {
                      id: 183,
                      name: 'Location Auto Garage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Auto-Garage_256x256.png'),
                  },
                  {
                      id: 184,
                      name: 'Room Utility Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Utility-Room_256x256.png'),
                  },
                  {
                      id: 185,
                      name: 'Location Parking Not',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Parking-Not_256x256.png'),
                  },
                  {
                      id: 186,
                      name: 'Room Office',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Office_256x256.png'),
                  },
                  {
                      id: 187,
                      name: 'Business',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Business_256x256.png'),
                  },
                  {
                      id: 188,
                      name: 'Business Retail',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Business--Retail_256x256.png'),
                  },
                  {
                      id: 189,
                      name: 'Garbage Garbage Chute',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Garbage--Garbage-Chute_256x256.png'),
                  },
                  {
                      id: 190,
                      name: 'Addressable Location Storage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Storage_256x256.png'),
                  },
                  {
                      id: 191,
                      name: 'Security Bomb Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Bomb-Shelter_256x256.png'),
                  },
                  {
                      id: 192,
                      name: 'Room Laundry Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Room--Laundry-Room_256x256.png'),
                  },
                  {
                      id: 193,
                      name: 'Electrical Generator Electrical',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical-Generator--Electrical_256x256.png'),
                  },
                  {
                      id: 194,
                      name: 'Electrical Transformer',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical--Transformer_256x256.png'),
                  },
                  {
                      id: 195,
                      name: 'Room Kitchen',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Kitchen_256x256.png'),
                  },
                  {
                      id: 196,
                      name: 'Room Elevator Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Elevator-Room_256x256.png'),
                  },
                  {
                      id: 197,
                      name: 'Business',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Business_256x256.png'),
                  },
                  {
                      id: 198,
                      name: 'Addressable Location Repair Build',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Repair-Build_256x256.png'),
                  },
                  {
                      id: 199,
                      name: 'Electrical Generator Electrical',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical-Generator--Electrical_256x256.png'),
                  },
                  {
                      id: 200,
                      name: 'Location Institutional',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Institutional_256x256.png'),
                  },
                  {
                      id: 201,
                      name: 'Room Kitchen',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Room--Kitchen_256x256.png'),
                  },
                  {
                      id: 202,
                      name: 'Electrical Powerlines',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical_Powerlines_256x256.png'),
                  },
                  {
                      id: 203,
                      name: 'Childcare Infant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Childcare-Infant_256x256.png'),
                  },
                  {
                      id: 204,
                      name: 'Electrical Generator',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Electrical-Generator_256x256.png'),
                  },
                  {
                      id: 205,
                      name: 'Electrical Generator Electrical Battery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical-Generator--Electrical-Battery_256x256.png'),
                  },
                  {
                      id: 206,
                      name: 'Restrooms Men',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Restrooms-Men_256x256.png'),
                  },
                  {
                      id: 207,
                      name: 'Room Laundry Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Room--Laundry-Room_256x256.png'),
                  },
                  {
                      id: 208,
                      name: 'Room Catwalk',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Room--Catwalk_256x256.png'),
                  },
                  {
                      id: 209,
                      name: 'Safety Decontamination Shower',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Safety--Decontamination-Shower_256x256.png'),
                  },
                  {
                      id: 210,
                      name: 'Addressable Location Outdoor Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Outdoor-Space_256x256.png'),
                  },
                  {
                      id: 211,
                      name: 'Security Storm Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Storm-Shelter_256x256.png'),
                  },
                  {
                      id: 212,
                      name: 'Room Catwalk',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Catwalk_256x256.png'),
                  },
                  {
                      id: 213,
                      name: 'Fire Pump',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Fire-Pump_256x256.png'),
                  },
                  {
                      id: 214,
                      name: 'Security Safe Zone',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Safe-Zone_256x256.png'),
                  },
                  {
                      id: 215,
                      name: 'MostImportant1',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_MostImportant1_256x256.png'),
                  },
                  {
                      id: 216,
                      name: 'Garbage Recycling',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Garbage--Recycling_256x256.png'),
                  },
                  {
                      id: 217,
                      name: 'Location Gym or Arena',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Gym-or-Arena_256x256.png'),
                  },
                  {
                      id: 218,
                      name: 'People Contact Information',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_People--Contact-Information_256x256.png'),
                  },
                  {
                      id: 219,
                      name: 'Room Main Entry',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Room--Main-Entry_256x256.png'),
                  },
                  {
                      id: 220,
                      name: 'Electrical Vault',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical--Vault_256x256.png'),
                  },
                  {
                      id: 221,
                      name: 'Addressable Location Parking',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Parking_256x256.png'),
                  },
                  {
                      id: 222,
                      name: 'Security Safe Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Safe-Room_256x256.png'),
                  },
                  {
                      id: 223,
                      name: 'People Handicapped',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_People--Handicapped_256x256.png'),
                  },
                  {
                      id: 224,
                      name: 'Location Loading Truck Well',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Loading-Truck-Well_256x256.png'),
                  },
                  {
                      id: 225,
                      name: 'Garbage Recycling',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Garbage--Recycling_256x256.png'),
                  },
                  {
                      id: 226,
                      name: 'Garbage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Garbage_256x256.png'),
                  },
                  {
                      id: 227,
                      name: 'Business Bank',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Business--Bank_256x256.png'),
                  },
                  {
                      id: 228,
                      name: 'Location Mercantile',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Mercantile_256x256.png'),
                  },
                  {
                      id: 229,
                      name: 'Location Loading Dock',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Loading-Dock_256x256.png'),
                  },
                  {
                      id: 230,
                      name: 'People Occupant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_People--Occupant_256x256.png'),
                  },
                  {
                      id: 231,
                      name: 'Fuel Pump Diesel',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Fuel-Pump--Diesel_256x256.png'),
                  },
                  {
                      id: 232,
                      name: 'Addressable Location Parking',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Parking_256x256.png'),
                  },
                  {
                      id: 233,
                      name: 'Room Main Entry',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Main-Entry_256x256.png'),
                  },
                  {
                      id: 234,
                      name: 'Room Classroom',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Classroom_256x256.png'),
                  },
                  {
                      id: 235,
                      name: 'Location Institutional',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Institutional_256x256.png'),
                  },
                  {
                      id: 236,
                      name: 'Addressable Location Living Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Living-Space_256x256.png'),
                  },
                  {
                      id: 237,
                      name: 'Manual Materials Safety Data Sheet',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Manual_Materials-Safety-Data-Sheet_256x256.png'),
                  },
                  {
                      id: 238,
                      name: 'Room Office',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Office_256x256.png'),
                  },
                  {
                      id: 239,
                      name: 'Electrical Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical--Room_256x256.png'),
                  },
                  {
                      id: 240,
                      name: 'Location Auditorium',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Auditorium_256x256.png'),
                  },
                  {
                      id: 241,
                      name: 'Electrical Transformer',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical--Transformer_256x256.png'),
                  },
                  {
                      id: 242,
                      name: 'Fuel Pump Diesel',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Fuel-Pump--Diesel_256x256.png'),
                  },
                  {
                      id: 243,
                      name: 'Room Classroom',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Classroom_256x256.png'),
                  },
                  {
                      id: 244,
                      name: 'Security Area of Refuge',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Area-of-Refuge_256x256.png'),
                  },
                  {
                      id: 245,
                      name: 'Room Laundry Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Laundry-Room_256x256.png'),
                  },
                  {
                      id: 246,
                      name: 'Room Telephone Equipment Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Telephone-Equipment-Room_256x256.png'),
                  },
                  {
                      id: 247,
                      name: 'Location Loading Truck Well',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Loading-Truck-Well_256x256.png'),
                  },
                  {
                      id: 248,
                      name: 'MostImportant1',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_MostImportant1_256x256.png'),
                  },
                  {
                      id: 249,
                      name: 'Safety Location HVAC',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Safety-Location--HVAC_256x256.png'),
                  },
                  {
                      id: 250,
                      name: 'Medical AED',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Medical--AED_256x256.png'),
                  },
                  {
                      id: 251,
                      name: 'Safety Location Fire Extinguisher',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Safety-Location--Fire-Extinguisher_256x256.png'),
                  },
                  {
                      id: 252,
                      name: 'Business Bank',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Business--Bank_256x256.png'),
                  },
                  {
                      id: 253,
                      name: 'PREPLN LOCATN GRAY SOLID GENERIC Restrooms',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_GENERIC_Restrooms_256x256.png'),
                  },
                  {
                      id: 254,
                      name: 'Security Storm Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Storm-Shelter_256x256.png'),
                  },
                  {
                      id: 255,
                      name: 'Room Laundry Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Laundry-Room_256x256.png'),
                  },
                  {
                      id: 256,
                      name: 'Electrical Vault',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical--Vault_256x256.png'),
                  },
                  {
                      id: 257,
                      name: 'Security Area of Refuge',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Area-of-Refuge_256x256.png'),
                  },
                  {
                      id: 258,
                      name: 'Security Evacuation Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Evacuation-Shelter_256x256.png'),
                  },
                  {
                      id: 259,
                      name: 'Room Telephone Equipment',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Telephone-Equipment_256x256.png'),
                  },
                  {
                      id: 260,
                      name: 'Security Safe Zone',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Safe-Zone_256x256.png'),
                  },
                  {
                      id: 261,
                      name: 'Garbage Dumpster',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Garbage--Dumpster_256x256.png'),
                  },
                  {
                      id: 262,
                      name: 'Room Library',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Library_256x256.png'),
                  },
                  {
                      id: 263,
                      name: 'Medical ',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Medical--_256x256.png'),
                  },
                  {
                      id: 264,
                      name: 'Location Loading Dock',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Loading-Dock_256x256.png'),
                  },
                  {
                      id: 265,
                      name: 'Blank',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Blank_256x256.png'),
                  },
                  {
                      id: 266,
                      name: 'MostImportant2',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_MostImportant2_256x256.png'),
                  },
                  {
                      id: 267,
                      name: 'Room Telephone Equipment',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Telephone-Equipment_256x256.png'),
                  },
                  {
                      id: 268,
                      name: 'Addressable Location Functional area',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Functional-area_256x256.png'),
                  },
                  {
                      id: 269,
                      name: 'MostImportant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_MostImportant_256x256.png'),
                  },
                  {
                      id: 270,
                      name: 'Business Retail',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Business--Retail_256x256.png'),
                  },
                  {
                      id: 271,
                      name: 'Room Storage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Storage_256x256.png'),
                  },
                  {
                      id: 272,
                      name: 'Location Gym or Arena',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Gym-or-Arena_256x256.png'),
                  },
                  {
                      id: 273,
                      name: 'Room Guard Shack',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Guard-Shack_256x256.png'),
                  },
                  {
                      id: 274,
                      name: 'Room Elevator Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Elevator-Room_256x256.png'),
                  },
                  {
                      id: 275,
                      name: 'Addressable Location Functional area',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Functional-area_256x256.png'),
                  },
                  {
                      id: 276,
                      name: 'Safety Handwash',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Safety--Handwash_256x256.png'),
                  },
                  {
                      id: 277,
                      name: 'Room Boiler Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Boiler-Room_256x256.png'),
                  },
                  {
                      id: 278,
                      name: 'Addressable Location Living Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Living-Space_256x256.png'),
                  },
                  {
                      id: 279,
                      name: 'Safety Location HVAC',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Safety-Location--HVAC_256x256.png'),
                  },
                  {
                      id: 280,
                      name: 'Manual Materials Safety Data Sheet',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Manual_Materials-Safety-Data-Sheet_256x256.png'),
                  },
                  {
                      id: 281,
                      name: 'Addressable Location Work Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Work-Space_256x256.png'),
                  },
                  {
                      id: 282,
                      name: 'Security Guard',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Guard_256x256.png'),
                  },
                  {
                      id: 283,
                      name: 'Addressable Location Utility',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Utility_256x256.png'),
                  },
                  {
                      id: 284,
                      name: 'MostImportant2',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_MostImportant2_256x256.png'),
                  },
                  {
                      id: 285,
                      name: 'Childcare Infant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Childcare-Infant_256x256.png'),
                  },
                  {
                      id: 286,
                      name: 'Room Catwalk',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Catwalk_256x256.png'),
                  },
                  {
                      id: 287,
                      name: 'PREPLN LOCATN GGRAY SOLID GENERIC Restrooms',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_GENERIC_Restrooms_256x256.png'),
                  },
                  {
                      id: 288,
                      name: 'Room Catwalk',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Room--Catwalk_256x256.png'),
                  },
                  {
                      id: 289,
                      name: 'Room Telephone Equipment Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Telephone-Equipment-Room_256x256.png'),
                  },
                  {
                      id: 290,
                      name: 'Addressable Location Work Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Work-Space_256x256.png'),
                  },
                  {
                      id: 291,
                      name: 'Room Boiler Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Boiler-Room_256x256.png'),
                  },
                  {
                      id: 292,
                      name: 'Location Air Conditioning',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Air-Conditioning_256x256.png'),
                  },
                  {
                      id: 293,
                      name: 'Security Guard',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Guard_256x256.png'),
                  },
                  {
                      id: 294,
                      name: 'Electrical Generator',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Electrical-Generator_256x256.png'),
                  },
                  {
                      id: 295,
                      name: 'Room Guard Shack',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Guard-Shack_256x256.png'),
                  },
                  {
                      id: 296,
                      name: 'Restrooms Men',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Restrooms-Men_256x256.png'),
                  },
                  {
                      id: 297,
                      name: 'Addressable Location Utility',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Utility_256x256.png'),
                  },
                  {
                      id: 298,
                      name: 'Garbage Dumpster',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Garbage--Dumpster_256x256.png'),
                  },
                  {
                      id: 299,
                      name: 'Room Kitchen',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Room--Kitchen_256x256.png'),
                  },
                  {
                      id: 300,
                      name: 'Safety Location Fire Extinguisher',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Safety-Location--Fire-Extinguisher_256x256.png'),
                  },
                  {
                      id: 301,
                      name: 'Security Area of Refuge 2',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Area-of-Refuge-2_256x256.png'),
                  },
                  {
                      id: 302,
                      name: 'People Contact Information',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_People--Contact-Information_256x256.png'),
                  },
                  {
                      id: 303,
                      name: 'Security Evacuation Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Evacuation-Shelter_256x256.png'),
                  },
                  {
                      id: 304,
                      name: 'Room Kitchen',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Room--Kitchen_256x256.png'),
                  },
                  {
                      id: 305,
                      name: 'EmergencyControlStation',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_EmergencyControlStation_256x256.png'),
                  },
                  {
                      id: 306,
                      name: 'Fire Pump',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Fire-Pump_256x256.png'),
                  },
                  {
                      id: 307,
                      name: 'Room Main Entry',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Room--Main-Entry_256x256.png'),
                  },
                  {
                      id: 308,
                      name: 'Manual',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_SIMPLE_Manual_256x256.png'),
                  },
                  {
                      id: 309,
                      name: 'Business Grocery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Business--Grocery_256x256.png'),
                  },
                  {
                      id: 310,
                      name: 'Security Safe',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Security--Safe_256x256.png'),
                  },
                  {
                      id: 311,
                      name: 'Medical Nurse Station',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Medical--Nurse-Station_256x256.png'),
                  },
                  {
                      id: 312,
                      name: 'MostImportant3',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_MostImportant3_256x256.png'),
                  },
                  {
                      id: 313,
                      name: 'Security Area of Refuge 2',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Area-of-Refuge-2_256x256.png'),
                  },
                  {
                      id: 314,
                      name: 'Garbage Garbage Chute',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Garbage--Garbage-Chute_256x256.png'),
                  },
                  {
                      id: 315,
                      name: 'Location Parking',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Parking_256x256.png'),
                  },
                  {
                      id: 316,
                      name: 'Manual Operations Manual',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Manual--Operations-Manual_256x256.png'),
                  },
                  {
                      id: 317,
                      name: 'Location Air Conditioning',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Air-Conditioning_256x256.png'),
                  },
                  {
                      id: 318,
                      name: 'Electrical Generator Diesel',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical-Generator--Diesel_256x256.png'),
                  },
                  {
                      id: 319,
                      name: 'Restrooms Women',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Restrooms-Women_256x256.png'),
                  },
                  {
                      id: 320,
                      name: 'People Occupant',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_People--Occupant_256x256.png'),
                  },
                  {
                      id: 321,
                      name: 'Location Parking Not',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Parking-Not_256x256.png'),
                  },
                  {
                      id: 322,
                      name: 'Room Main Entry',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Room--Main-Entry_256x256.png'),
                  },
                  {
                      id: 323,
                      name: 'Location Auto Carport',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Auto-Carport_256x256.png'),
                  },
                  {
                      id: 324,
                      name: 'Location Mercantile',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Mercantile_256x256.png'),
                  },
                  {
                      id: 325,
                      name: 'Location Auto Garage',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Auto-Garage_256x256.png'),
                  },
                  {
                      id: 326,
                      name: 'Electrical Generator Electrical Battery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical-Generator--Electrical-Battery_256x256.png'),
                  },
                  {
                      id: 327,
                      name: 'Restrooms Women',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Restrooms-Women_256x256.png'),
                  },
                  {
                      id: 328,
                      name: 'Manual Operations Manual',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Manual--Operations-Manual_256x256.png'),
                  },
                  {
                      id: 329,
                      name: 'Location Residential',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Location--Residential_256x256.png'),
                  },
                  {
                      id: 330,
                      name: 'Electrical Generator Battery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Electrical-Generator--Battery_256x256.png'),
                  },
                  {
                      id: 331,
                      name: 'MostImportant3',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_MostImportant3_256x256.png'),
                  },
                  {
                      id: 332,
                      name: 'Location Auditorium',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Auditorium_256x256.png'),
                  },
                  {
                      id: 333,
                      name: 'Electrical Powerlines',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical_Powerlines_256x256.png'),
                  },
                  {
                      id: 334,
                      name: 'Blank',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_Blank_256x256.png'),
                  },
                  {
                      id: 335,
                      name: 'Addressable Location Outdoor Space',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Addressable-Location--Outdoor-Space_256x256.png'),
                  },
                  {
                      id: 336,
                      name: 'Electrical Generator Diesel',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical-Generator--Diesel_256x256.png'),
                  },
                  {
                      id: 337,
                      name: 'Fuel Pump Regular',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Fuel-Pump--Regular_256x256.png'),
                  },
                  {
                      id: 338,
                      name: 'Electrical Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical--Room_256x256.png'),
                  },
                  {
                      id: 339,
                      name: 'Addressable Location Repair Build',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Addressable-Location--Repair-Build_256x256.png'),
                  },
                  {
                      id: 340,
                      name: 'Security Safe',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Safe_256x256.png'),
                  },
                  {
                      id: 341,
                      name: 'People Handicapped',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_People--Handicapped_256x256.png'),
                  },
                  {
                      id: 342,
                      name: 'Security Safe Room',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Safe-Room_256x256.png'),
                  },
                  {
                      id: 343,
                      name: 'Electrical Generator Battery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Electrical-Generator--Battery_256x256.png'),
                  },
                  {
                      id: 344,
                      name: 'Security Bomb Shelter',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Security--Bomb-Shelter_256x256.png'),
                  },
                  {
                      id: 345,
                      name: 'Business Grocery',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Business--Grocery_256x256.png'),
                  },
                  {
                      id: 346,
                      name: 'Childcare Child',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Childcare-Child_256x256.png'),
                  },
                  {
                      id: 347,
                      name: 'EmergencyControlStation',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_SIMPLE_EmergencyControlStation_256x256.png'),
                  },
                  {
                      id: 348,
                      name: 'Safety Decontamination Shower',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Safety--Decontamination-Shower_256x256.png'),
                  },
                  {
                      id: 349,
                      name: 'Location Parking',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Location--Parking_256x256.png'),
                  },
                  {
                      id: 350,
                      name: 'Childcare Child',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GRAY--_SOLID-_DETAIL_Childcare-Child_256x256.png'),
                  },
                  {
                      id: 351,
                      name: 'Fuel Pump Regular',
                      icon: require('../assets/icons/Preplan/Preplan Features/PREPLN_LOCATN_GGRAY-_SOLID-_DETAIL_Fuel-Pump--Regular_256x256.png'),
                  },
              ],
          },
          {
              id: -11,
              name: 'Feature Shutoff Detailed',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 352,
                      name: 'CNG Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_CNG-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 353,
                      name: 'Refrigeration Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Refrigeration-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 354,
                      name: 'Gas With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Gas_With-Line_256x256.png'),
                  },
                  {
                      id: 355,
                      name: 'LNG Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_LNG-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 356,
                      name: 'Electrical Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Electrical-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 357,
                      name: 'Fuel Pipeline With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Fuel-Pipeline_With-Line_256x256.png'),
                  },
                  {
                      id: 358,
                      name: 'Water Shutoff Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Water-Shutoff-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 359,
                      name: 'CNG Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_CNG-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 360,
                      name: 'Solar Panel Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Solar-Panel-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 361,
                      name: 'Steam Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Steam-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 362,
                      name: 'Refrigeration Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Refrigeration-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 363,
                      name: 'Electrical Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Electrical-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 364,
                      name: 'Electricall With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Electricall_With-Line_256x256.png'),
                  },
                  {
                      id: 365,
                      name: 'Plain With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_GENRIC_Plain_With-Line_256x256.png'),
                  },
                  {
                      id: 366,
                      name: 'Telecommunications MAIN With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Telecommunications-MAIN_With-Line_256x256.png'),
                  },
                  {
                      id: 367,
                      name: 'Fuel Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Fuel-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 368,
                      name: 'Telecommunications Network With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Telecommunications-Network_With-Line_256x256.png'),
                  },
                  {
                      id: 369,
                      name: 'Refrigeration With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Refrigeration_With-Line_256x256.png'),
                  },
                  {
                      id: 370,
                      name: 'Water Shutoff With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Water-Shutoff_With-Line_256x256.png'),
                  },
                  {
                      id: 371,
                      name: 'CNG With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_CNG_With-Line_256x256.png'),
                  },
                  {
                      id: 372,
                      name: 'Water Shutoff Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Water-Shutoff-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 373,
                      name: 'Telecommunications With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Telecommunications_With-Line_256x256.png'),
                  },
                  {
                      id: 374,
                      name: 'LNG With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_LNG_With-Line_256x256.png'),
                  },
                  {
                      id: 375,
                      name: 'Gas SUB With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Gas-SUB_With-Line_256x256.png'),
                  },
                  {
                      id: 376,
                      name: 'Gas MAIN With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Gas-MAIN_With-Line_256x256.png'),
                  },
                  {
                      id: 377,
                      name: 'Solar Panel MAIN With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Solar-Panel-MAIN_With-Line_256x256.png'),
                  },
                  {
                      id: 378,
                      name: 'Air Handling With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Air_Handling_With-Line_256x256.png'),
                  },
                  {
                      id: 379,
                      name: 'Fuel With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Fuel_With-Line_256x256.png'),
                  },
                  {
                      id: 380,
                      name: 'LNG Main With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_LNG-Main_With-Line_256x256.png'),
                  },
                  {
                      id: 381,
                      name: 'Steam With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Steam_With-Line_256x256.png'),
                  },
                  {
                      id: 382,
                      name: 'Solar Panel With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Solar-Panel_With-Line_256x256.png'),
                  },
                  {
                      id: 383,
                      name: 'Telecommunications TV With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Telecommunications-TV_With-Line_256x256.png'),
                  },
                  {
                      id: 384,
                      name: 'Fuel Sub With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_DETAIL_Fuel-Sub_With-Line_256x256.png'),
                  },
                  {
                      id: 385,
                      name: 'Oxygen With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Oxygen_With-Line_256x256.png'),
                  },
                  {
                      id: 386,
                      name: 'Product Shutoff With Line',
                      icon: require('../assets/icons/Preplan/Feature Shutoff Detailed/PREPLAN_SHUTOF_BLUE--_SIMPLE_Product-Shutoff_With-Line_256x256.png'),
                  },
              ],
          },
          {
              id: -12,
              name: 'Fire Suppression Detailed',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 387,
                      name: 'Monitor Dry',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Monitor--Dry_256x256.png'),
                  },
                  {
                      id: 388,
                      name: 'Fire Hose Connection Hose Connection',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Hose-Connection--Hose-Connection_256x256.png'),
                  },
                  {
                      id: 389,
                      name: 'Monitor Charged',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Monitor--Charged_256x256.png'),
                  },
                  {
                      id: 390,
                      name: 'Agent Container',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Agent-Container_256x256.png'),
                  },
                  {
                      id: 391,
                      name: 'Fire Department Connection FDC1',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Department-Connection--FDC1_256x256.png'),
                  },
                  {
                      id: 392,
                      name: 'Riser Dry',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Riser-Dry_256x256.png'),
                  },
                  {
                      id: 393,
                      name: 'Sprinkler Control Valve Outside Screw and Yoke',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-Control-Valve--Outside-Screw-and-Yoke_256x256.png'),
                  },
                  {
                      id: 394,
                      name: 'Sprinkler System PreAction',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-System--PreAction_256x256.png'),
                  },
                  {
                      id: 395,
                      name: 'Sprinkler Control Valve Wall Post Indicating Valve',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-Control-Valve--Wall-Post-Indicating-Valve_256x256.png'),
                  },
                  {
                      id: 396,
                      name: 'Hose Reel CO2',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Reel--CO2_256x256.png'),
                  },
                  {
                      id: 397,
                      name: 'Sprinkler System Semi Automatic',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-System--Semi-Automatic_256x256.png'),
                  },
                  {
                      id: 398,
                      name: 'Sprinkler Control Valve',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_GENRIC_Sprinkler-Control-Valve_256x256.png'),
                  },
                  {
                      id: 399,
                      name: 'Hose Reel Wet',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Reel--Wet_256x256.png'),
                  },
                  {
                      id: 400,
                      name: 'Dry Chemical',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Dry-Chemical_256x256.png'),
                  },
                  {
                      id: 401,
                      name: 'Fire Pump',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_GENRIC_Fire-Pump_256x256.png'),
                  },
                  {
                      id: 402,
                      name: 'Sprinkler System Sprinkler General',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_SIMPLE_Sprinkler-System--Sprinkler-General_256x256.png'),
                  },
                  {
                      id: 403,
                      name: 'Clean Agent',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Clean-Agent_256x256.png'),
                  },
                  {
                      id: 404,
                      name: 'Foam',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Foam_256x256.png'),
                  },
                  {
                      id: 405,
                      name: 'Sprinkler Control Valve Non Indicating Valve',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-Control-Valve--Non-Indicating-Valve_256x256.png'),
                  },
                  {
                      id: 406,
                      name: 'Fire Department Connection Standpipe Connection',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Department-Connection--Standpipe-Connection_256x256.png'),
                  },
                  {
                      id: 407,
                      name: 'Sprinkler System Sprinkler Deluge',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-System--Sprinkler-Deluge_256x256.png'),
                  },
                  {
                      id: 408,
                      name: 'Sprinkler Control Valve Zone Valve',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-Control-Valve--Zone-Valve_256x256.png'),
                  },
                  {
                      id: 409,
                      name: 'Water Source Hydrant Fire',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Water-Source--Hydrant-Fire_256x256.png'),
                  },
                  {
                      id: 410,
                      name: 'Water Source Static',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Water-Source--Static_256x256.png'),
                  },
                  {
                      id: 411,
                      name: 'Fire Hose Connection Hose Connection Wet',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Hose-Connection--Hose-Connection_Wet_256x256.png'),
                  },
                  {
                      id: 412,
                      name: 'Fire Pump With Out Drive',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Pump--With-Out-Drive_256x256.png'),
                  },
                  {
                      id: 413,
                      name: 'Halon',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Halon_256x256.png'),
                  },
                  {
                      id: 414,
                      name: 'Riser Wet',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Riser-Wet_256x256.png'),
                  },
                  {
                      id: 415,
                      name: 'Class K',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Class-K_256x256.png'),
                  },
                  {
                      id: 416,
                      name: 'Fire Pump With Drive',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Pump--With-Drive_256x256.png'),
                  },
                  {
                      id: 417,
                      name: 'Sprinkler System Dry',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-System--Dry_256x256.png'),
                  },
                  {
                      id: 418,
                      name: 'Hose Reel Dry Chemical',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Reel--Dry-Chemical_256x256.png'),
                  },
                  {
                      id: 419,
                      name: 'Hose Reel Foam',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Reel--Foam_256x256.png'),
                  },
                  {
                      id: 420,
                      name: 'Fire System',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Fire-System_256x256.png'),
                  },
                  {
                      id: 421,
                      name: 'Water Source Dry Hydrant',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Water-Source--Dry-Hydrant_256x256.png'),
                  },
                  {
                      id: 422,
                      name: 'Hose Connection Dry',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Connection_Dry_256x256.png'),
                  },
                  {
                      id: 423,
                      name: 'Water Source Water Inlet',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Water-Source--Water-Inlet_256x256.png'),
                  },
                  {
                      id: 424,
                      name: 'CO2',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_CO2_256x256.png'),
                  },
                  {
                      id: 425,
                      name: 'Fire Department Connection Combination Sprinkler Standpipe',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Department-Connection--Combination-Sprinkler-Standpipe_256x256.png'),
                  },
                  {
                      id: 426,
                      name: 'PREPLN FIRSUP RED SOLID Blank',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-Blank_256x256.png'),
                  },
                  {
                      id: 427,
                      name: 'Clean Gas',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Clean-Gas_256x256.png'),
                  },
                  {
                      id: 428,
                      name: 'Water',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Water_256x256.png'),
                  },
                  {
                      id: 429,
                      name: 'Water Source Drafting Site',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Water-Source--Drafting-Site_256x256.png'),
                  },
                  {
                      id: 430,
                      name: 'Wet Chemical',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FFFEAT_RED---_SOLID-_DETAIL_Wet-Chemical_256x256.png'),
                  },
                  {
                      id: 431,
                      name: 'Fire Department Connection FDC2',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Department-Connection--FDC2_256x256.png'),
                  },
                  {
                      id: 432,
                      name: 'Hose Reel Dry',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Hose-Reel--Dry_256x256.png'),
                  },
                  {
                      id: 433,
                      name: 'Fire Department Connection Sprinkler Connection',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Fire-Department-Connection--Sprinkler-Connection_256x256.png'),
                  },
                  {
                      id: 434,
                      name: 'Sprinkler Control Valve Post Indicating Valve',
                      icon: require('../assets/icons/Preplan/Fire Suppression Detailed/PREPLN_FIRSUP_RED---SOLID-_DETAIL_Sprinkler-Control-Valve--Post-Indicating-Valve_256x256.png'),
                  },
              ],
          },
          {
              id: -13,
              name: 'Vertical Access Features Detailed',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 435,
                      name: 'Hatch',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Hatch_256x256.png'),
                  },
                  {
                      id: 436,
                      name: 'Crawl Space Hatch',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Crawl-Space-Hatch_256x256.png'),
                  },
                  {
                      id: 437,
                      name: 'Attic Access',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Attic-Access_256x256.png'),
                  },
                  {
                      id: 438,
                      name: 'Stairs Spiral',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Stairs--Spiral_256x256.png'),
                  },
                  {
                      id: 439,
                      name: 'Stairs Lift',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Stairs--Lift_256x256.png'),
                  },
                  {
                      id: 440,
                      name: 'Roof Access',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Roof-Access_256x256.png'),
                  },
                  {
                      id: 441,
                      name: 'Fire Escape',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Fire-Escape_256x256.png'),
                  },
                  {
                      id: 442,
                      name: 'Stairs Double',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Stairs--Double_256x256.png'),
                  },
                  {
                      id: 443,
                      name: 'Stairs Single',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_DETAIL_Stairs_Single_256x256.png'),
                  },
                  {
                      id: 444,
                      name: 'Escalator',
                      icon: require('../assets/icons/Preplan/Vertical Access Features Detailed/PREPLN_ACCESS_GREEN-_SOLID-_SIMPLE_Escalator_256x256.png'),
                  },
              ],
          },
          {
              id: -14,
              name: 'Alarm Detectors Detailed',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 445,
                      name: 'Smoke Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Smoke-Panel_256x256.png'),
                  },
                  {
                      id: 446,
                      name: 'Duct Detector Level',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Level_256x256.png'),
                  },
                  {
                      id: 447,
                      name: 'Gas Detector Pressure',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Gas-Detector-Pressure_256x256.png'),
                  },
                  {
                      id: 448,
                      name: 'Duct Detector Gas',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Gas_256x256.png'),
                  },
                  {
                      id: 449,
                      name: 'Heat Detector Fixed Temp',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Heat-Detector--Fixed-Temp_256x256.png'),
                  },
                  {
                      id: 450,
                      name: 'Alarm Control Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_GENERIC_Alarm-Control-Panel_256x256.png'),
                  },
                  {
                      id: 451,
                      name: 'Smoke Detector Ionization',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Ionization_256x256.png'),
                  },
                  {
                      id: 452,
                      name: 'Heat Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Heat-Detector_256x256.png'),
                  },
                  {
                      id: 453,
                      name: 'Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Detector_256x256.png'),
                  },
                  {
                      id: 454,
                      name: 'Smoke Detector Tamper Switch',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Tamper-Switch_256x256.png'),
                  },
                  {
                      id: 455,
                      name: 'Heat Detector Rate of Rise',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Heat-Detector-Rate-of-Rise_256x256.png'),
                  },
                  {
                      id: 456,
                      name: 'Alarm',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_GENERIC_Alarm_256x256.png'),
                  },
                  {
                      id: 457,
                      name: 'Duct Detector Heat',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Heat_256x256.png'),
                  },
                  {
                      id: 458,
                      name: 'Gas Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_GENRIC_Gas-Detector_256x256.png'),
                  },
                  {
                      id: 459,
                      name: 'Alarm Control Panel Burglar Alarm',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Control-Panel--Burglar-Alarm_256x256.png'),
                  },
                  {
                      id: 460,
                      name: 'Heat Detector Rate Compensate',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Heat-Detector--Rate-Compensate_256x256.png'),
                  },
                  {
                      id: 461,
                      name: 'FTR',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_FTR_256x256.png'),
                  },
                  {
                      id: 462,
                      name: 'Heat Detector Rate Fixed',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Heat-Detector--Rate-Fixed_256x256.png'),
                  },
                  {
                      id: 463,
                      name: 'Smoke Detector Beam',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Beam_256x256.png'),
                  },
                  {
                      id: 464,
                      name: 'Alarm Control Panel Switchboard Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Control-Panel--Switchboard-Panel_256x256.png'),
                  },
                  {
                      id: 465,
                      name: 'Alarm Control Panel Fire Alarm Control Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Control-Panel--Fire-Alarm-Control-Panel_256x256.png'),
                  },
                  {
                      id: 466,
                      name: 'Heat Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Heat-Detector_256x256.png'),
                  },
                  {
                      id: 467,
                      name: 'Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_GENRIC_Detector_256x256.png'),
                  },
                  {
                      id: 468,
                      name: 'Smoke Detector Flow Switch',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Flow-Switch_256x256.png'),
                  },
                  {
                      id: 469,
                      name: 'Smoke Detector Photoelectric',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Photoelectric_256x256.png'),
                  },
                  {
                      id: 470,
                      name: 'Duct Detector Flow',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Flow_256x256.png'),
                  },
                  {
                      id: 471,
                      name: 'Alarm Control Panel Voice Control Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Control-Panel--Voice-Control-Panel_256x256.png'),
                  },
                  {
                      id: 472,
                      name: 'Smoke Detector Tamper Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector--Tamper-Detector_256x256.png'),
                  },
                  {
                      id: 473,
                      name: 'Voice Control Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Voice_Control_Panel_256x256.png'),
                  },
                  {
                      id: 474,
                      name: 'Duct Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_GENRIC_Duct-Detector_256x256.png'),
                  },
                  {
                      id: 475,
                      name: 'Alarm Communications Annunciator Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Communications--Annunciator-Panel_256x256.png'),
                  },
                  {
                      id: 476,
                      name: 'Smoke Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Smoke-Detector_256x256.png'),
                  },
                  {
                      id: 477,
                      name: 'Reset Panel',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Reset-Panel_256x256.png'),
                  },
                  {
                      id: 478,
                      name: 'Alarm Control Panel FAC',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_ALARM_RED---_SOLID-_DETAIL_Alarm-Control-Panel--FAC_256x256.png'),
                  },
                  {
                      id: 479,
                      name: 'Smoke Detector',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_SIMPLE_Smoke-Detector_256x256.png'),
                  },
                  {
                      id: 480,
                      name: 'Duct Detector Flame',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Flame_256x256.png'),
                  },
                  {
                      id: 481,
                      name: 'Duct Detector Smoke',
                      icon: require('../assets/icons/Preplan/Alarm Detectors Detailed/PREPLN_DETECT_GRAY--_SOLID-_DETAIL_Duct-Detector--Smoke_256x256.png'),
                  },
              ],
          },
      ],
  },
  {
      id: -15,
      name: 'Hazard Points',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 482,
              name: 'Hazard Fire No Roof Operations',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--No-Roof-Operations_256x256.png'),
          },
          {
              id: 483,
              name: 'Hazard Fire High Occupancy Load',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--High-Occupancy-Load_256x256.png'),
          },
          {
              id: 484,
              name: 'Hazard Fire Close Exposure',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Close-Exposure_256x256.png'),
          },
          {
              id: 485,
              name: 'Hazard Fire ManTrap or Entrapment',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--ManTrap-or-Entrapment_256x256.png'),
          },
          {
              id: 486,
              name: 'Hazard Fire Evaucation Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Evaucation-Hazards_256x256.png'),
          },
          {
              id: 487,
              name: 'Hazard Fire Slip Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Slip-Hazards_256x256.png'),
          },
          {
              id: 488,
              name: 'Hazard Fire Fall Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Fall-Hazards_256x256.png'),
          },
          {
              id: 489,
              name: 'Hazard Fire Building Over Nextto Water',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Building-Over-Nextto-Water_256x256.png'),
          },
          {
              id: 490,
              name: 'Hazard Fire Common Attic',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Common-Attic_256x256.png'),
          },
          {
              id: 491,
              name: 'Hazard Fire Soft Soil',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Soft-Soil_256x256.png'),
          },
          {
              id: 492,
              name: 'Hazard Fire No Water Supply',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--No-Water-Supply_256x256.png'),
          },
          {
              id: 493,
              name: 'Hazard Fire Not Occupied or Abandoned',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Not-Occupied-or-Abandoned_256x256.png'),
          },
          {
              id: 494,
              name: 'Hazard Fire Saferty Zone Gun Cover',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Saferty-Zone--Gun-Cover_256x256.png'),
          },
          {
              id: 495,
              name: 'Hazard Fire Magnetic Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Magnetic-Hazards_256x256.png'),
          },
          {
              id: 496,
              name: 'Hazard Fire Collapse Likely',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Collapse-Likely_256x256.png'),
          },
          {
              id: 497,
              name: 'Hazard Fire Poor or No Radio Reception',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Poor-or-No-Radio-Reception_256x256.png'),
          },
          {
              id: 498,
              name: 'Hazard Fire Confined Space',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Confined-Space_256x256.png'),
          },
          {
              id: 499,
              name: 'Hazard Fire Biohazard',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Biohazard_256x256.png'),
          },
          {
              id: 500,
              name: 'Hazard Fire High Pile Storage',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--High-Pile-Storage_256x256.png'),
          },
          {
              id: 501,
              name: 'Hazard Fire Electical Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Electical-Hazards_256x256.png'),
          },
          {
              id: 502,
              name: 'Hazard Fire Truss Wood I Beam',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Truss-Wood-I-Beam_256x256.png'),
          },
          {
              id: 503,
              name: 'Hazard Fire Poison',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Poison_256x256.png'),
          },
          {
              id: 504,
              name: 'Hazard Fire General Hazards',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--General-Hazards_256x256.png'),
          },
          {
              id: 505,
              name: 'Hazard Fire DO NOT USE Water',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--DO-NOT-USE-Water_256x256.png'),
          },
          {
              id: 506,
              name: 'Hazard Fire Hazardous Entry',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Hazardous-Entry_256x256.png'),
          },
          {
              id: 507,
              name: 'HazMat Tank Horizontal',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_HazMat-Tank-Horizontal_256x256.png'),
          },
          {
              id: 508,
              name: 'Hazard Fire Hazardous Entry Violent',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Hazardous-Entry-Violent_256x256.png'),
          },
          {
              id: 509,
              name: 'Hazard Fire Bowstrin Truss',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Bowstrin-Truss_256x256.png'),
          },
          {
              id: 510,
              name: 'Hazard Fire Radioactive',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Radioactive_256x256.png'),
          },
          {
              id: 511,
              name: 'Hazard Fire Powerline Above',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Powerline-Above_256x256.png'),
          },
          {
              id: 512,
              name: 'Hazard Fire Truss General',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Truss-General_256x256.png'),
          },
          {
              id: 513,
              name: 'Hazard Fire Lightweight Roof',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Lightweight-Roof_256x256.png'),
          },
          {
              id: 514,
              name: 'Hazard Fire Hazardous Shaft',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Hazardous-Shaft_256x256.png'),
          },
          {
              id: 515,
              name: 'Hazard Fire Lightweight Floor',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Lightweight-Floor_256x256.png'),
          },
          {
              id: 516,
              name: 'HazMat Tank Vertical',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_HazMat-Tank-Vertical_256x256.png'),
          },
          {
              id: 517,
              name: 'Hazard Fire Aerial Hazard',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Aerial-Hazard_256x256.png'),
          },
          {
              id: 518,
              name: 'Hazard Fire DO NOT ENTER Building',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--DO-NOT-ENTER-Building_256x256.png'),
          },
          {
              id: 519,
              name: 'Hazard Fire High Fire Load',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--High-Fire-Load_256x256.png'),
          },
          {
              id: 520,
              name: 'Hazard Fire Hazardous Voids',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Hazardous-Voids_256x256.png'),
          },
          {
              id: 521,
              name: 'Hazard Fire Truss Wood',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Truss-Wood_256x256.png'),
          },
          {
              id: 522,
              name: 'HazMat Tank Underground',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_HazMat-Tank-Underground_256x256.png'),
          },
          {
              id: 523,
              name: 'Hazard Fire Truss Metal',
              icon: require('../assets/icons/Hazard Points/HAZARD_RESPND_WHITE__SOLID-_DETAIL_Hazard--Fire--Truss-Metal_256x256.png'),
          },
      ],
  },
  {
      id: -16,
      name: 'Emergency Response Resources',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 524,
              name: 'ESF3 RES EMS Ambulance Fixed Wing Air',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_Ambulance-Fixed-Wing-Air_256x256.png'),
          },
          {
              id: 525,
              name: 'ESF8 RES Search and Rescue Radio Direction Finding Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Radio-Direction-Finding-Team_256x256.png'),
          },
          {
              id: 526,
              name: 'ESF6 RES LAW Public Safety Dive Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Public-Safety-Dive-Team_256x256.png'),
          },
          {
              id: 527,
              name: 'ESF3 RES EMS MCI Support Vehicle',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_MCI-Support-Vehicle_256x256.png'),
          },
          {
              id: 528,
              name: 'ESF6 RES LAW SWAT',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--SWAT_256x256.png'),
          },
          {
              id: 529,
              name: 'ESF7 RES Public Works Road Sweeper',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Road-Sweeper_256x256.png'),
          },
          {
              id: 530,
              name: 'ESF2 RES IMT CAP',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--CAP_256x256.png'),
          },
          {
              id: 531,
              name: 'ESF2 RES IMT Mobile Kitchen',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Mobile-Kitchen_256x256.png'),
          },
          {
              id: 532,
              name: 'ESF1 RES Animal Health Incident Management Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Incident-Management-Team_256x256.png'),
          },
          {
              id: 533,
              name: 'ESF4 RES FIRE HAZMAT Strike Team Engine',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Strike-Team-Engine_256x256.png'),
          },
          {
              id: 534,
              name: 'ESF7 RES Public Works Snow Plow Loader Mounted',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Snow-Plow--Loader-Mounted_256x256.png'),
          },
          {
              id: 535,
              name: 'ESF8 RES Search and Rescue Swiftwater Flood Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Swiftwater-Flood-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 536,
              name: 'ESF4 RES FIRE HAZMAT Rescue',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Rescue_256x256.png'),
          },
          {
              id: 537,
              name: 'ESF4 RES FIRE HAZMAT Water Tender Tanker',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Water-Tender-Tanker_256x256.png'),
          },
          {
              id: 538,
              name: 'ESF2 RES IMT Area Command',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Area-Command_256x256.png'),
          },
          {
              id: 539,
              name: 'ESF4 RES FIRE HAZMAT Helicopter',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Helicopter_256x256.png'),
          },
          {
              id: 540,
              name: 'ESF7 RES Public Works Snow Plow',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Snow-Plow_256x256.png'),
          },
          {
              id: 541,
              name: 'ESF7 RES Public Works Snow Blower Front Loader',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Snow-Blower--Front-Loader_256x256.png'),
          },
          {
              id: 542,
              name: 'ESF4 RES FIRE HAZMAT Mobile Communication Unit',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Mobile-Communication-Unit_256x256.png'),
          },
          {
              id: 543,
              name: 'ESF4 RES FIRE HAZMAT Fire Boat',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Fire-Boat_256x256.png'),
          },
          {
              id: 544,
              name: 'ESF4 RES FIRE HAZMAT Crew Transport',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Crew-Transport_256x256.png'),
          },
          {
              id: 545,
              name: 'ESF7 RES Public Works Bus',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Bus_256x256.png'),
          },
          {
              id: 546,
              name: 'ESF4 RES FIRE HAZMAT Engine Pumper',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Engine-Pumper_256x256.png'),
          },
          {
              id: 547,
              name: 'ESF12 RES Public Health',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__GENRIC_ESF12-RES_Public-Health_256x256.png'),
          },
          {
              id: 548,
              name: 'ESF8 RES Search and Rescue USAR Incident Support Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--USAR-Incident-Support-Team_256x256.png'),
          },
          {
              id: 549,
              name: 'ESF8 RES Search and Rescue Canine Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Canine-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 550,
              name: 'ESF8 RES Search and Rescue Cave Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Cave-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 551,
              name: 'ESF1 RES Animal Health Large Animal Sheltering Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Large-Animal-Sheltering-Team_256x256.png'),
          },
          {
              id: 552,
              name: 'ESF4 RES FIRE HAZMAT Aerial Apparatus Ladder',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Aerial-Apparatus-Ladder_256x256.png'),
          },
          {
              id: 553,
              name: 'ESF1 RES Animal Health Small Animal Sheltering Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Small-Animal-Sheltering-Team_256x256.png'),
          },
          {
              id: 554,
              name: 'ESF7 RES Public Works Bulldozer',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Bulldozer_256x256.png'),
          },
          {
              id: 555,
              name: 'ESF8 RES Search and Rescue Mine and Tunnel Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Mine-and-Tunnel-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 556,
              name: 'ESF4 RES FIRE HAZMAT Strike Team US Coast Guard',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Strike-Team-US-Coast-Guard_256x256.png'),
          },
          {
              id: 557,
              name: 'ESF4 RES FIRE HAZMAT HazMat',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_HazMat_256x256.png'),
          },
          {
              id: 558,
              name: 'ESF3 RES EMS Ambulance Ground',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_Ambulance-Ground_256x256.png'),
          },
          {
              id: 559,
              name: 'ESF7 RES Public Works Crane Lattice',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Crane-Lattice_256x256.png'),
          },
          {
              id: 560,
              name: 'ESF7 RES Public Works Front Excavator',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Front-Excavator_256x256.png'),
          },
          {
              id: 561,
              name: 'ESF7 RES Public Works Grader',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Grader_256x256.png'),
          },
          {
              id: 562,
              name: 'ESF8 RES Search and Rescue Wilderness Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Wilderness-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 563,
              name: 'ESF7 RES Public Works Loader Tracked',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Loader-Tracked_256x256.png'),
          },
          {
              id: 564,
              name: 'ESF7 RES Public Works Dump Truck',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Dump-Truck_256x256.png'),
          },
          {
              id: 565,
              name: 'ESF6 RES LAW Helicopter',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Helicopter_256x256.png'),
          },
          {
              id: 566,
              name: 'ESF8 RES Search and Rescue Urban Search and Rescue Task Force',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Urban-Search-and-Rescue-Task-Force_256x256.png'),
          },
          {
              id: 567,
              name: 'ESF6 RES LAW Mobile Field Force Law Enforcement Crowd Control Teams',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Mobile-Field-Force-Law-Enforcement-Crowd-Control-Teams_256x256.png'),
          },
          {
              id: 568,
              name: 'ESF7 RES Public Works Scraper',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Scraper_256x256.png'),
          },
          {
              id: 569,
              name: 'ESF3 RES EMS Ambulance Air',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_Ambulance-Air_256x256.png'),
          },
          {
              id: 570,
              name: 'ESF8 RES Search and Rescue Structural Collapse Search Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Structural-Collapse-Search-Team_256x256.png'),
          },
          {
              id: 571,
              name: 'ESF4 RES FIRE HAZMAT Hand Crew',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Hand-Crew_256x256.png'),
          },
          {
              id: 572,
              name: 'ESF7 RES Public Works Loader',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Loader_256x256.png'),
          },
          {
              id: 573,
              name: 'ESF2 RES IMT Volunteer Liason Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Volunteer-Liason-Team_256x256.png'),
          },
          {
              id: 574,
              name: 'ESF6 RES LAW Fixed Wing Recon',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Fixed-Wing-Recon_256x256.png'),
          },
          {
              id: 575,
              name: 'ESF2 RES IMT Disaster ASsessment',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Disaster-ASsessment_256x256.png'),
          },
          {
              id: 576,
              name: 'ESF1 RES Animal Health Small Animal Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Small-Animal-Rescue-Team_256x256.png'),
          },
          {
              id: 577,
              name: 'ESF7 RES Public Works Hydraulic Crane',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Hydraulic-Crane_256x256.png'),
          },
          {
              id: 578,
              name: 'ESF4 RES FIRE HAZMAT Strike Team Brush Truck',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Strike-Team-Brush-Truck_256x256.png'),
          },
          {
              id: 579,
              name: 'ESF4 RES FIRE HAZMAT Fuel Tender',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Fuel-Tender_256x256.png'),
          },
          {
              id: 580,
              name: 'ESF4 RES FIRE HAZMAT Command',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Command_256x256.png'),
          },
          {
              id: 581,
              name: 'ESF2 RES IMT Critical Incident Stress Management',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Critical-Incident-Stress-Management_256x256.png'),
          },
          {
              id: 582,
              name: 'ESF2 RES IMT Mobile Emergency Operations Center',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Mobile-Emergency-Operations-Center_256x256.png'),
          },
          {
              id: 583,
              name: 'ESF7 RES Public Works Wheel Loader Backhoe',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Wheel-Loader--Backhoe_256x256.png'),
          },
          {
              id: 584,
              name: 'ESF7 RES Public Works Damage Assessment',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Damage-Assessment_256x256.png'),
          },
          {
              id: 585,
              name: 'ESF8 RES Search and Rescue Airborne Reconnaissance Fixed Wing',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Airborne-Reconnaissance-Fixed-Wing_256x256.png'),
          },
          {
              id: 586,
              name: 'ESF3 RES EMS Critical Tranportaton Multple Patient',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_Critical-Tranportaton-Multple-Patient_256x256.png'),
          },
          {
              id: 587,
              name: 'ESF8 RES Search and Rescue Air Search Team (Fixed Wing)',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Air Search Team (Fixed-Wing)_256x256.png'),
          },
          {
              id: 588,
              name: 'ESF1 RES Animal Health Small Animal Transport Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Small-Animal-Transport-Team_256x256.png'),
          },
          {
              id: 589,
              name: 'ESF8 RES Search and Rescue Structural Collapse Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Structural-Collapse-Rescue-Team_256x256.png'),
          },
          {
              id: 590,
              name: 'ESF6 RES LAW Law Enforcement Patrol',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Law-Enforcement-Patrol_256x256.png'),
          },
          {
              id: 591,
              name: 'ESF4 RES FIRE HAZMAT Helitanker',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Helitanker_256x256.png'),
          },
          {
              id: 592,
              name: 'ESF4 RES FIRE HAZMAT Strike Team Aerial Ladder',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Strike-Team-Aerial-Ladder_256x256.png'),
          },
          {
              id: 593,
              name: 'ESF4 RES FIRE HAZMAT Foam Tender',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Foam-Tender_256x256.png'),
          },
          {
              id: 594,
              name: 'ESF4 RES FIRE HAZMAT Brush',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_Brush_256x256.png'),
          },
          {
              id: 595,
              name: 'ESF1 RES Animal Health Large Animal Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Large-Animal-Rescue-Team_256x256.png'),
          },
          {
              id: 596,
              name: 'ESF7 RES Public Works Tug Boat',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Tug-Boat_256x256.png'),
          },
          {
              id: 597,
              name: 'ESF2 RES IMT Incident Management Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Incident-Management-Team_256x256.png'),
          },
          {
              id: 598,
              name: 'ESF2 RES IMT Evacuation Coordination Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF2-RES_IMT--Evacuation-Coordination-Team_256x256.png'),
          },
          {
              id: 599,
              name: 'ESF7 RES Public Works Snow Blower Truck',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Snow-Blower--Truck_256x256.png'),
          },
          {
              id: 600,
              name: 'ESF6 RES LAW Bomb Squad',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Bomb-Squad_256x256.png'),
          },
          {
              id: 601,
              name: 'ESF4 RES FIRE HAZMAT ARFF',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF4-RES_FIRE-HAZMAT_ARFF_256x256.png'),
          },
          {
              id: 602,
              name: 'ESF1 RES Animal Health Large Animal Transport Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF1-RES_Animal-Health--Large-Animal-Transport-Team_256x256.png'),
          },
          {
              id: 603,
              name: 'ESF3 RES EMS Strike Team Ambulance',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF3-RES_EMS_Strike-Team--Ambulance_256x256.png'),
          },
          {
              id: 604,
              name: 'ESF8 RES Search and Rescue Mountain Search and Rescue Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF8-RES_Search-and-Rescue--Mountain-Search-and-Rescue-Team_256x256.png'),
          },
          {
              id: 605,
              name: 'ESF6 RES LAW Law Enforcement Patrol Strike Team',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF6-RES_LAW--Law-Enforcement-Patrol-Strike-Team_256x256.png'),
          },
          {
              id: 606,
              name: 'ESF7 RES Public Works Snow Cat',
              icon: require('../assets/icons/Emergency Response Resources/INCDNT_RESRCE_WHITE-_SOLID-__DETAIL_ESF7-RES_Public-Works--Snow-Cat_256x256.png'),
          },
      ],
  },
  {
      id: -17,
      name: 'Incident',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: -18,
              name: 'Incident Intelligence',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 607,
                      name: 'LEVEL3 Emergency Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL3_Emergency-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 608,
                      name: 'Datum Start',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Datum_Start_256x256.png'),
                  },
                  {
                      id: 609,
                      name: 'Communication Ops Telephone',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Telephone_256x256.png'),
                  },
                  {
                      id: 610,
                      name: 'Communication Ops Repeater',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Repeater_256x256.png'),
                  },
                  {
                      id: 611,
                      name: 'Sensor General',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-General_256x256.png'),
                  },
                  {
                      id: 612,
                      name: 'IRDownlink',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_IRDownlink_256x256.png'),
                  },
                  {
                      id: 613,
                      name: 'LEVEL2 Cell Phone',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL2_Cell-Phone_256x256.png'),
                  },
                  {
                      id: 614,
                      name: 'CLUE Relevant Known',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_CLUE_Relevant_Known_256x256.png'),
                  },
                  {
                      id: 615,
                      name: 'CLUE Reporting Party',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_CLUE_Reporting_Party_256x256.png'),
                  },
                  {
                      id: 616,
                      name: 'Sensor Weather',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Weather_256x256.png'),
                  },
                  {
                      id: 617,
                      name: 'LEVEL3 Cell Phone',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL3_Cell-Phone_256x256.png'),
                  },
                  {
                      id: 618,
                      name: 'Communication Ops Generic',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Generic_256x256.png'),
                  },
                  {
                      id: 619,
                      name: 'Sensor Biological',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Biological_256x256.png'),
                  },
                  {
                      id: 620,
                      name: 'Sensor Radiological',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Radiological_256x256.png'),
                  },
                  {
                      id: 621,
                      name: 'CLUE Relevant Not',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_CLUE_Relevant_Not_256x256.png'),
                  },
                  {
                      id: 622,
                      name: 'LEVEL2 Emergency Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL2_Emergency-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 623,
                      name: 'LEVEL1 Cell Phone',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL1_Cell-Phone_256x256.png'),
                  },
                  {
                      id: 624,
                      name: 'CLUE Relevant Unknown',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_CLUE_Relevant_Unknown_256x256.png'),
                  },
                  {
                      id: 625,
                      name: 'LEVEL2 Portable Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL2_Portable-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 626,
                      name: 'LEVEL1 Emergency Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL1_Emergency-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 627,
                      name: 'Sensor Intruderl',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Intruderl_256x256.png'),
                  },
                  {
                      id: 628,
                      name: 'Reporting Party',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Reporting-Party_256x256.png'),
                  },
                  {
                      id: 629,
                      name: 'Datum Finish',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Datum_Finish_256x256.png'),
                  },
                  {
                      id: 630,
                      name: 'LEVEL3 Portable Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL3_Portable-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 631,
                      name: 'Lookout',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Lookout_256x256.png'),
                  },
                  {
                      id: 632,
                      name: 'Sensor Chemical',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Chemical_256x256.png'),
                  },
                  {
                      id: 633,
                      name: 'LEVEL1 Portable Locating Transmitter',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_WHITE-_SOLID-_LEVEL1_Portable-Locating-Transmitter_256x256.png'),
                  },
                  {
                      id: 634,
                      name: 'INCDNT COMAND MLTCLR SOLID GENRIC Datum',
                      icon: require('../assets/icons/Incident/Incident Intelligence/INCDNT_COMAND_MLTCLR_SOLID-_GENRIC_Datum_256x256.png'),
                  },
              ],
          },
          {
              id: -19,
              name: 'Incident Resources',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 635,
                      name: 'Command Post Plain',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Command-Post-Plain_256x256.png'),
                  },
                  {
                      id: 636,
                      name: 'SWAT Hostage Negotation',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT_Hostage_Negotation_256x256.png'),
                  },
                  {
                      id: 637,
                      name: 'Area Command Post',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Area-Command-Post_256x256.png'),
                  },
                  {
                      id: 638,
                      name: 'Decon',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Decon_256x256.png'),
                  },
                  {
                      id: 639,
                      name: 'Diversion',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Diversion_256x256.png'),
                  },
                  {
                      id: 640,
                      name: 'EMS BLS',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_EMS--BLS_256x256.png'),
                  },
                  {
                      id: 641,
                      name: 'Barrier With Security',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Barrier--With-Security_256x256.png'),
                  },
                  {
                      id: 642,
                      name: 'Joint Operations Center',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Joint-Operations-Center_256x256.png'),
                  },
                  {
                      id: 643,
                      name: 'GENRIC Staging NWCG',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Staging_NWCG_256x256.png'),
                  },
                  {
                      id: 644,
                      name: 'Supply Distribution Food Water',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-Supply-Distribution_Food_Water_256x256.png'),
                  },
                  {
                      id: 645,
                      name: 'Communication Ops Telephone',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Telephone_256x256.png'),
                  },
                  {
                      id: 646,
                      name: 'Incident Command Post',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Incident-Command-Post_256x256.png'),
                  },
                  {
                      id: 647,
                      name: 'Decon NonAmbulatory',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Decon_NonAmbulatory_256x256.png'),
                  },
                  {
                      id: 648,
                      name: 'Communication Ops Repeater',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Repeater_256x256.png'),
                  },
                  {
                      id: 649,
                      name: 'GENRIC Barrier1',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Barrier1_256x256.png'),
                  },
                  {
                      id: 650,
                      name: 'LZ Airport',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_LZ_Airport_256x256.png'),
                  },
                  {
                      id: 651,
                      name: 'Staging EMS',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_EMS_256x256.png'),
                  },
                  {
                      id: 652,
                      name: 'Staging Law Enforcement',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Law_Enforcement_256x256.png'),
                  },
                  {
                      id: 653,
                      name: 'Bomb Detonation Location',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Bomb--Detonation-Location_256x256.png'),
                  },
                  {
                      id: 654,
                      name: 'Civilian Staging Volunteer',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Civilian-Staging--Volunteer_256x256.png'),
                  },
                  {
                      id: 655,
                      name: 'SIMPLE EMS Treatment Plain',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_SIMPLE_EMS--Treatment-Plain_256x256.png'),
                  },
                  {
                      id: 656,
                      name: 'SWAT RallyPoint',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT_RallyPoint_256x256.png'),
                  },
                  {
                      id: 657,
                      name: 'Civilian Staging Transit',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Civilian-Staging--Transit_256x256.png'),
                  },
                  {
                      id: 658,
                      name: 'Sensor General',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-General_256x256.png'),
                  },
                  {
                      id: 659,
                      name: 'SWAT Rehearsal Area',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT--Rehearsal-Area_256x256.png'),
                  },
                  {
                      id: 660,
                      name: 'GENRIC Telephone NWCG',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Telephone_NWCG_256x256.png'),
                  },
                  {
                      id: 661,
                      name: 'Staging Fire',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Fire_256x256.png'),
                  },
                  {
                      id: 662,
                      name: 'Civilian Staging Animal Reunification',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Civilian-Staging--Animal-Reunification_256x256.png'),
                  },
                  {
                      id: 663,
                      name: 'SIMPLE EMS Triage',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_SIMPLE_EMS--Triage_256x256.png'),
                  },
                  {
                      id: 664,
                      name: 'Dam',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Dam_256x256.png'),
                  },
                  {
                      id: 665,
                      name: 'GENRIC Camp',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Camp_256x256.png'),
                  },
                  {
                      id: 666,
                      name: 'Public Information Media',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Public_Information_Media_256x256.png'),
                  },
                  {
                      id: 667,
                      name: 'Water Point Helicopter',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Water-Point--Helicopter_256x256.png'),
                  },
                  {
                      id: 668,
                      name: 'LZ Marine Dock',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_LZ--Marine-Dock_256x256.png'),
                  },
                  {
                      id: 669,
                      name: 'Dike',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Dike_256x256.png'),
                  },
                  {
                      id: 670,
                      name: 'GENRIC Base',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Base_256x256.png'),
                  },
                  {
                      id: 671,
                      name: 'GENRIC Responder First Aid',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Responder_First_Aid_256x256.png'),
                  },
                  {
                      id: 672,
                      name: 'Sensor Weather',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Weather_256x256.png'),
                  },
                  {
                      id: 673,
                      name: 'Staging Equiment',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Equiment_256x256.png'),
                  },
                  {
                      id: 674,
                      name: 'Communication Ops Generic',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Communication-Ops-Generic_256x256.png'),
                  },
                  {
                      id: 675,
                      name: 'EMS ALS',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_EMS--ALS_256x256.png'),
                  },
                  {
                      id: 676,
                      name: 'Foam',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Foam_256x256.png'),
                  },
                  {
                      id: 677,
                      name: 'Diversion',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Diversion_256x256.png'),
                  },
                  {
                      id: 678,
                      name: 'Staging Priority2',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Priority2_256x256.png'),
                  },
                  {
                      id: 679,
                      name: 'Dam',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Dam_256x256.png'),
                  },
                  {
                      id: 680,
                      name: 'Staging Air',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Air_256x256.png'),
                  },
                  {
                      id: 681,
                      name: 'Sensor Biological',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Biological_256x256.png'),
                  },
                  {
                      id: 682,
                      name: 'Command Post',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Command-Post_256x256.png'),
                  },
                  {
                      id: 683,
                      name: 'GENRIC Base NWCG',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Base_NWCG_256x256.png'),
                  },
                  {
                      id: 684,
                      name: 'Foam',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Foam_256x256.png'),
                  },
                  {
                      id: 685,
                      name: 'Staging CISM',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_CISM_256x256.png'),
                  },
                  {
                      id: 686,
                      name: 'LZ Marine LZ',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_LZ--Marine-LZ_256x256.png'),
                  },
                  {
                      id: 687,
                      name: 'SIMPLE Public Information',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_SIMPLE_Public_Information_256x256.png'),
                  },
                  {
                      id: 688,
                      name: 'Absorbtion',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Absorbtion_256x256.png'),
                  },
                  {
                      id: 689,
                      name: 'GENRIC Staging',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Staging_256x256.png'),
                  },
                  {
                      id: 690,
                      name: 'Decon Ambulatory',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Decon_Ambulatory_256x256.png'),
                  },
                  {
                      id: 691,
                      name: 'Sensor Radiological',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Radiological_256x256.png'),
                  },
                  {
                      id: 692,
                      name: 'Barrier Emergency Access Only',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Barrier--Emergency-Access-Only_256x256.png'),
                  },
                  {
                      id: 693,
                      name: 'SWAT Sniper Location',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT--Sniper-Location_256x256.png'),
                  },
                  {
                      id: 694,
                      name: 'SWAT Canine',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT_Canine_256x256.png'),
                  },
                  {
                      id: 695,
                      name: 'GENRIC Barrier',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Barrier_256x256.png'),
                  },
                  {
                      id: 696,
                      name: 'Civilian Staging Family Reunification',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Civilian-Staging--Family-Reunification_256x256.png'),
                  },
                  {
                      id: 697,
                      name: 'Water Fire Hydrant',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Water--Fire-Hydrant_256x256.png'),
                  },
                  {
                      id: 698,
                      name: 'SWAT Standoff Location',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT--Standoff-Location_256x256.png'),
                  },
                  {
                      id: 699,
                      name: 'LZ Helibase',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_LZ--Helibase_256x256.png'),
                  },
                  {
                      id: 700,
                      name: 'Initial Planning Point Missing Persons Fugitive Search',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Initial_Planning_Point_Missing_Persons_Fugitive_Search_256x256.png'),
                  },
                  {
                      id: 701,
                      name: 'SWAT EMT',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_SWAT_EMT_256x256.png'),
                  },
                  {
                      id: 702,
                      name: 'Staging Priority1',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Priority1_256x256.png'),
                  },
                  {
                      id: 703,
                      name: 'Water Point Retardent',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Water-Point--Retardent_256x256.png'),
                  },
                  {
                      id: 704,
                      name: 'Decon Ambulatory',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Decon_Ambulatory_256x256.png'),
                  },
                  {
                      id: 705,
                      name: 'Dike',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Dike_256x256.png'),
                  },
                  {
                      id: 706,
                      name: 'GENRIC Repeater',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Repeater_256x256.png'),
                  },
                  {
                      id: 707,
                      name: 'Emergency Operations Cetner',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Emergency-Operations-Cetner_256x256.png'),
                  },
                  {
                      id: 708,
                      name: 'Decon NonAmbulatory',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR__SOLID__DETAIL_Decon_NonAmbulatory_256x256.png'),
                  },
                  {
                      id: 709,
                      name: 'EMS ILS',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_EMS--ILS_256x256.png'),
                  },
                  {
                      id: 710,
                      name: 'Water Point Vehicle',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Water-Point--Vehicle_256x256.png'),
                  },
                  {
                      id: 711,
                      name: 'Medical Supply Cache',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Medical-Supply-Cache_256x256.png'),
                  },
                  {
                      id: 712,
                      name: 'Multi Agency Coordination Center',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Multi-Agency-Coordination-Center_256x256.png'),
                  },
                  {
                      id: 713,
                      name: 'GENRIC SWAT',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_SWAT_256x256.png'),
                  },
                  {
                      id: 714,
                      name: 'EMS Treatment Plain',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_EMS--Treatment-Plain_256x256.png'),
                  },
                  {
                      id: 715,
                      name: 'Sensor Intruderl',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Intruderl_256x256.png'),
                  },
                  {
                      id: 716,
                      name: 'Reporting Party',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Reporting-Party_256x256.png'),
                  },
                  {
                      id: 717,
                      name: 'Bomb Containment',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Bomb--Containment_256x256.png'),
                  },
                  {
                      id: 718,
                      name: 'Barrier With Checkpoint',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Barrier-With-Checkpoint_256x256.png'),
                  },
                  {
                      id: 719,
                      name: 'Staging Rehab',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Rehab_256x256.png'),
                  },
                  {
                      id: 720,
                      name: 'Staging Faith',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_Staging_Faith_256x256.png'),
                  },
                  {
                      id: 721,
                      name: 'SIMPLE EMS Casuality Collection Point',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_SIMPLE_EMS--Casuality-Collection-Point_256x256.png'),
                  },
                  {
                      id: 722,
                      name: 'Sensor Chemical',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE__SOLID-_DETAIL_Sensor-Chemical_256x256.png'),
                  },
                  {
                      id: 723,
                      name: 'GENRIC Camp NWCG',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Camp_NWCG_256x256.png'),
                  },
                  {
                      id: 724,
                      name: 'GENRIC Repeater NWCG',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Repeater_NWCG_256x256.png'),
                  },
                  {
                      id: 725,
                      name: 'GENRIC Water Point General',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Water-Point--General_256x256.png'),
                  },
                  {
                      id: 726,
                      name: 'GENRIC EMS Plain',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_EMS--Plain_256x256.png'),
                  },
                  {
                      id: 727,
                      name: 'GENRIC Civilian Staging Not Specfic',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_GENRIC_Civilian-Staging--Not-Specfic_256x256.png'),
                  },
                  {
                      id: 728,
                      name: 'LZ Marine Launch Site',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_WHITE-_SOLID-_DETAIL_LZ--Marine-Launch-Site_256x256.png'),
                  },
                  {
                      id: 729,
                      name: 'Decon',
                      icon: require('../assets/icons/Incident/Incident Resources/INCDNT_COMAND_MLTCLR_SOLID-_DETAIL_Decon_256x256.png'),
                  },
              ],
          },
      ],
  },
  {
      id: -20,
      name: 'Hazardous Materials',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 730,
              name: 'Class 2 Flammable Liquid',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Flammable-Liquid_256x256.png'),
          },
          {
              id: 731,
              name: 'Class 3 Flammable',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-3-Flammable_256x256.png'),
          },
          {
              id: 732,
              name: 'Class 5 Organic Peroxides 51',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-5-Organic-Peroxides-51_256x256.png'),
          },
          {
              id: 733,
              name: 'Class 1 Explosives 12',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-12_256x256.png'),
          },
          {
              id: 734,
              name: 'Class 4 Flammable Solids',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-4-Flammable-Solids_256x256.png'),
          },
          {
              id: 735,
              name: 'Class 6 Infectious',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Infectious_256x256.png'),
          },
          {
              id: 736,
              name: 'Class 2 Chlorine',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Chlorine_256x256.png'),
          },
          {
              id: 737,
              name: 'Class 3 Gasoline',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-3-Gasoline_256x256.png'),
          },
          {
              id: 738,
              name: 'Class 9',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-9_256x256.png'),
          },
          {
              id: 739,
              name: 'Class 1 Explosives 14',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-14_256x256.png'),
          },
          {
              id: 740,
              name: 'Class 5 Oxidizers 51',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-5-Oxidizers-51_256x256.png'),
          },
          {
              id: 741,
              name: 'Class 3 Combustible',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-3-Combustible_256x256.png'),
          },
          {
              id: 742,
              name: 'Class 1 Explosives 13',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-13_256x256.png'),
          },
          {
              id: 743,
              name: 'Class 4 Dangerous When Wet',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-4-Dangerous-When-Wet_256x256.png'),
          },
          {
              id: 744,
              name: 'Class 4 Spontaneously Combustible',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-4-Spontaneously-Combustible_256x256.png'),
          },
          {
              id: 745,
              name: 'Class 7 Radioactive',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-7-Radioactive_256x256.png'),
          },
          {
              id: 746,
              name: 'Class 1 Explosives 15',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-15_256x256.png'),
          },
          {
              id: 747,
              name: 'Class 2 Flammable Gas 21',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Flammable-Gas-21_256x256.png'),
          },
          {
              id: 748,
              name: 'Class Other HOT',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-Other-HOT_256x256.png'),
          },
          {
              id: 749,
              name: 'Class Other DANGEROUS',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-Other-DANGEROUS_256x256.png'),
          },
          {
              id: 750,
              name: 'Class 6 Poison Gas',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Poison-Gas_256x256.png'),
          },
          {
              id: 751,
              name: 'Class 1 Blasting Agent 15',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Blasting-Agent-15_256x256.png'),
          },
          {
              id: 752,
              name: 'Class 8 Corrosive',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-8-Corrosive_256x256.png'),
          },
          {
              id: 753,
              name: 'Class Other V3',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__GENRIC_HazMat-DOT-Placarding--Class-Other-V3_256x256.png'),
          },
          {
              id: 754,
              name: 'Class Other Store Away From Food',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-Other-Store-Away-From-Food_256x256.png'),
          },
          {
              id: 755,
              name: 'Class 1 Explosives 16',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-16_256x256.png'),
          },
          {
              id: 756,
              name: 'Class 1 Explosives',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives_256x256.png'),
          },
          {
              id: 757,
              name: 'Class 6 Poisons',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Poisons_256x256.png'),
          },
          {
              id: 758,
              name: 'Class 2 Non Flammable Gas 22',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Non-Flammable-Gas-22_256x256.png'),
          },
          {
              id: 759,
              name: 'Class 8 Acids',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-8-Acids_256x256.png'),
          },
          {
              id: 760,
              name: 'Class 5 Organic Peroxides 52',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-5-Organic-Peroxides-52_256x256.png'),
          },
          {
              id: 761,
              name: 'Class 6 Toxic Gas',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Toxic-Gas_256x256.png'),
          },
          {
              id: 762,
              name: 'Class 6 Inhalation Hazards',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Inhalation-Hazards_256x256.png'),
          },
          {
              id: 763,
              name: 'Class 1 Explosives 11',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-1-Explosives-11_256x256.png'),
          },
          {
              id: 764,
              name: 'Class 2 Inhalation Hazards 23',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Inhalation-Hazards-23_256x256.png'),
          },
          {
              id: 765,
              name: 'Class 8 Alkaline',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-8-Alkaline_256x256.png'),
          },
          {
              id: 766,
              name: 'Class 6 Toxic',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-6-Toxic_256x256.png'),
          },
          {
              id: 767,
              name: 'HAZARD NFPA74 MLTCLR SOLID DETAIL ',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_NFPA74_MLTCLR_SOLID_DETAIL__256x256.png'),
          },
          {
              id: 768,
              name: 'Class 2 Flammable Solid',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Flammable-Solid_256x256.png'),
          },
          {
              id: 769,
              name: 'Class 2 Flammable Gas',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Flammable-Gas_256x256.png'),
          },
          {
              id: 770,
              name: 'Class Other V2',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__GENRIC_HazMat-DOT-Placarding--Class-Other-V2_256x256.png'),
          },
          {
              id: 771,
              name: 'Class 2 Oxygen 22',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-2-Oxygen-22_256x256.png'),
          },
          {
              id: 772,
              name: 'Class Other',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__GENRIC_HazMat-DOT-Placarding--Class-Other_256x256.png'),
          },
          {
              id: 773,
              name: 'Class 3 Fuel Oil',
              icon: require('../assets/icons/Hazardous Materials/HAZARD_HAZMAT_MLTCLR__SOLID__DETAIL_HazMat-DOT-Placarding--Class-3-Fuel-Oil_256x256.png'),
          },
      ],
  },
  {
      id: -21,
      name: 'Lifelines',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: -22,
              name: 'Transportation',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 774,
                      name: 'transportation with label no halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 775,
                      name: 'transportation with label red halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 776,
                      name: 'transportation icon only green halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 777,
                      name: 'transportation with label green halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 778,
                      name: 'transportation icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 779,
                      name: 'transportation with label amber halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 780,
                      name: 'transportation icon only red halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 781,
                      name: 'transportation icon only no halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 782,
                      name: 'transportation with label gray halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 783,
                      name: 'transportation icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Transportation/transportation-icon-only-gray-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -23,
              name: 'Energy',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 784,
                      name: 'energy power fuel with label green halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 785,
                      name: 'energy power fuel icon only green halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 786,
                      name: 'energy power fuel icon only no halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 787,
                      name: 'energy power fuel with label red halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 788,
                      name: 'energy power fuel icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 789,
                      name: 'energy power fuel with label amber halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 790,
                      name: 'energy power fuel icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 791,
                      name: 'energy power fuel icon only red halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 792,
                      name: 'energy power fuel with label no halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 793,
                      name: 'energy power fuel with label gray halo',
                      icon: require('../assets/icons/Lifelines/Energy/energy-power-fuel-with-label-gray-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -24,
              name: 'Safety and Security',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 794,
                      name: 'safety and security icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 795,
                      name: 'safety and security with label no halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 796,
                      name: 'safety and security icon only red halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 797,
                      name: 'safety and security icon only no halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 798,
                      name: 'safety and security with label red halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 799,
                      name: 'safety and security icon only green halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 800,
                      name: 'safety and security with label green halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 801,
                      name: 'safety and security icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 802,
                      name: 'safety and security with label gray halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 803,
                      name: 'safety and security with label amber halo',
                      icon: require('../assets/icons/Lifelines/Safety and Security/safety-and-security-with-label-amber-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -25,
              name: 'Food Water Shelter',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 804,
                      name: 'food water shelter icon only green halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 805,
                      name: 'food water shelter icon only no halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 806,
                      name: 'food water shelter with label red halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 807,
                      name: 'food water shelter icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 808,
                      name: 'food water shelter with label amber halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 809,
                      name: 'food water shelter icon only red halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 810,
                      name: 'food water shelter icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 811,
                      name: 'food water shelter with label gray halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 812,
                      name: 'food water shelter with label green halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 813,
                      name: 'food water shelter with label no halo',
                      icon: require('../assets/icons/Lifelines/Food Water Shelter/food-water-shelter-with-label-no-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -26,
              name: 'Hazardous Materials',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 814,
                      name: 'hazardous materials icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 815,
                      name: 'hazardous materials icon only green halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 816,
                      name: 'hazardous materials icon only no halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 817,
                      name: 'hazardous materials with label red halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 818,
                      name: 'hazardous materials icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 819,
                      name: 'hazardous materials icon only red halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 820,
                      name: 'hazardous materials with label amber halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 821,
                      name: 'hazardous materials with label gray halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 822,
                      name: 'hazardous materials with label no halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 823,
                      name: 'hazardous materials with label green halo',
                      icon: require('../assets/icons/Lifelines/Hazardous Materials/hazardous-materials-with-label-green-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -27,
              name: 'Health and Medical',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 824,
                      name: 'health and medical with label gray halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 825,
                      name: 'health and medical with label green halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 826,
                      name: 'health and medical icon only red halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-icon-only-red-halo_256x256.png'),
                  },
                  {
                      id: 827,
                      name: 'health and medical icon only no halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 828,
                      name: 'health and medical icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 829,
                      name: 'health and medical with label no halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 830,
                      name: 'health and medical with label amber halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 831,
                      name: 'health and medical with label red halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 832,
                      name: 'health and medical icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 833,
                      name: 'health and medical icon only green halo',
                      icon: require('../assets/icons/Lifelines/Health and Medical/health-and-medical-icon-only-green-halo_256x256.png'),
                  },
              ],
          },
          {
              id: -28,
              name: 'Communications',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 834,
                      name: 'communications with label green halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-with-label-green-halo_256x256.png'),
                  },
                  {
                      id: 835,
                      name: 'communications icon only gray halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-icon-only-gray-halo_256x256.png'),
                  },
                  {
                      id: 836,
                      name: 'communications with label gray halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-with-label-gray-halo_256x256.png'),
                  },
                  {
                      id: 837,
                      name: 'communications with label amber halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-with-label-amber-halo_256x256.png'),
                  },
                  {
                      id: 838,
                      name: 'communications icon only no halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-icon-only-no-halo_256x256.png'),
                  },
                  {
                      id: 839,
                      name: 'communications with label no halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-with-label-no-halo_256x256.png'),
                  },
                  {
                      id: 840,
                      name: 'communications icon only amber halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-icon-only-amber-halo_256x256.png'),
                  },
                  {
                      id: 841,
                      name: 'communications with label red halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-with-label-red-halo_256x256.png'),
                  },
                  {
                      id: 842,
                      name: 'communications icon only green halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-icon-only-green-halo_256x256.png'),
                  },
                  {
                      id: 843,
                      name: 'communications icon only red halo',
                      icon: require('../assets/icons/Lifelines/Communications/communications-icon-only-red-halo_256x256.png'),
                  },
              ],
          },
      ],
  },
  {
      id: -29,
      name: 'NIMS',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: 844,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION A',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--A_256x256.png'),
          },
          {
              id: 845,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION A',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--A_256x256.png'),
          },
          {
              id: 846,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH II',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--II_256x256.png'),
          },
          {
              id: 847,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION IC',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--IC_256x256.png'),
          },
          {
              id: 848,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL SECTION IC',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_SECTION--IC_256x256.png'),
          },
          {
              id: 849,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL SECTION DIC',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_SECTION--DIC_256x256.png'),
          },
          {
              id: 850,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH IIX',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--IIX_256x256.png'),
          },
          {
              id: 851,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION Logistics',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--Logistics_256x256.png'),
          },
          {
              id: 852,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH II',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--II_256x256.png'),
          },
          {
              id: 853,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH IIX',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--IIX_256x256.png'),
          },
          {
              id: 854,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP RIG',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--RIG_256x256.png'),
          },
          {
              id: 855,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION G',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--G_256x256.png'),
          },
          {
              id: 856,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP RIG',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--RIG_256x256.png'),
          },
          {
              id: 857,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION G',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--G_256x256.png'),
          },
          {
              id: 858,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 6',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--6_256x256.png'),
          },
          {
              id: 859,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 6',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--6_256x256.png'),
          },
          {
              id: 860,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION LNO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--LNO_256x256.png'),
          },
          {
              id: 861,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION PIO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--PIO_256x256.png'),
          },
          {
              id: 862,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION Finance',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--Finance_256x256.png'),
          },
          {
              id: 863,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH FIRE',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--FIRE_256x256.png'),
          },
          {
              id: 864,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BLANK',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BLANK_256x256.png'),
          },
          {
              id: 865,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH HazMat',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--HazMat_256x256.png'),
          },
          {
              id: 866,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP SEARCH',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--SEARCH_256x256.png'),
          },
          {
              id: 867,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH PW',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--PW_256x256.png'),
          },
          {
              id: 868,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP EMS',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--EMS_256x256.png'),
          },
          {
              id: 869,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP EMS',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--EMS_256x256.png'),
          },
          {
              id: 870,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH PW',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--PW_256x256.png'),
          },
          {
              id: 871,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH HazMat',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--HazMat_256x256.png'),
          },
          {
              id: 872,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 1',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--1_256x256.png'),
          },
          {
              id: 873,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 1',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--1_256x256.png'),
          },
          {
              id: 874,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP Rescue',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--Rescue_256x256.png'),
          },
          {
              id: 875,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH IV',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--IV_256x256.png'),
          },
          {
              id: 876,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH X',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--X_256x256.png'),
          },
          {
              id: 877,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION F',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--F_256x256.png'),
          },
          {
              id: 878,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH IV',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--IV_256x256.png'),
          },
          {
              id: 879,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION F',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--F_256x256.png'),
          },
          {
              id: 880,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 10',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--10_256x256.png'),
          },
          {
              id: 881,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 7',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--7_256x256.png'),
          },
          {
              id: 882,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH X',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--X_256x256.png'),
          },
          {
              id: 883,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 7',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--7_256x256.png'),
          },
          {
              id: 884,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH SAR',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--SAR_256x256.png'),
          },
          {
              id: 885,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH SAR',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--SAR_256x256.png'),
          },
          {
              id: 886,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION C',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--C_256x256.png'),
          },
          {
              id: 887,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION C',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--C_256x256.png'),
          },
          {
              id: 888,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH LAW',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--LAW_256x256.png'),
          },
          {
              id: 889,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 2',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--2_256x256.png'),
          },
          {
              id: 890,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH EMS',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--EMS_256x256.png'),
          },
          {
              id: 891,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH LAW',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--LAW_256x256.png'),
          },
          {
              id: 892,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL SECTION LNO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_SECTION--LNO_256x256.png'),
          },
          {
              id: 893,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 2',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--2_256x256.png'),
          },
          {
              id: 894,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH EMS',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--EMS_256x256.png'),
          },
          {
              id: 895,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL SECTION PIO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_SECTION--PIO_256x256.png'),
          },
          {
              id: 896,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION E',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--E_256x256.png'),
          },
          {
              id: 897,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION E',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--E_256x256.png'),
          },
          {
              id: 898,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 9',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--9_256x256.png'),
          },
          {
              id: 899,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP VENT',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--VENT_256x256.png'),
          },
          {
              id: 900,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 9',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--9_256x256.png'),
          },
          {
              id: 901,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP VENT',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--VENT_256x256.png'),
          },
          {
              id: 902,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH V',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--V_256x256.png'),
          },
          {
              id: 903,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH III',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--III_256x256.png'),
          },
          {
              id: 904,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH IX',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--IX_256x256.png'),
          },
          {
              id: 905,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH VI',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--VI_256x256.png'),
          },
          {
              id: 906,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION Operations',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--Operations_256x256.png'),
          },
          {
              id: 907,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH V',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--V_256x256.png'),
          },
          {
              id: 908,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH III',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--III_256x256.png'),
          },
          {
              id: 909,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP SAR',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--SAR_256x256.png'),
          },
          {
              id: 910,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION DIC',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--DIC_256x256.png'),
          },
          {
              id: 911,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 4',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--4_256x256.png'),
          },
          {
              id: 912,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH VI',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--VI_256x256.png'),
          },
          {
              id: 913,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH VII',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--VII_256x256.png'),
          },
          {
              id: 914,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH IX',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--IX_256x256.png'),
          },
          {
              id: 915,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH VII',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--VII_256x256.png'),
          },
          {
              id: 916,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 4',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--4_256x256.png'),
          },
          {
              id: 917,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP SAR',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--SAR_256x256.png'),
          },
          {
              id: 918,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH I',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--I_256x256.png'),
          },
          {
              id: 919,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP Medical',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--Medical_256x256.png'),
          },
          {
              id: 920,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION B',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--B_256x256.png'),
          },
          {
              id: 921,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH Air',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--Air_256x256.png'),
          },
          {
              id: 922,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL GROUP Rescue',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_GROUP--Rescue_256x256.png'),
          },
          {
              id: 923,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION B',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--B_256x256.png'),
          },
          {
              id: 924,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH Air',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--Air_256x256.png'),
          },
          {
              id: 925,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 10',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--10_256x256.png'),
          },
          {
              id: 926,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 3',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--3_256x256.png'),
          },
          {
              id: 927,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 3',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--3_256x256.png'),
          },
          {
              id: 928,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION SO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--SO_256x256.png'),
          },
          {
              id: 929,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP Medical',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--Medical_256x256.png'),
          },
          {
              id: 930,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE BRANCH I',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_BRANCH--I_256x256.png'),
          },
          {
              id: 931,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL SECTION SO',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_SECTION--SO_256x256.png'),
          },
          {
              id: 932,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE GROUP SEARCH',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_GROUP--SEARCH_256x256.png'),
          },
          {
              id: 933,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION D',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--D_256x256.png'),
          },
          {
              id: 934,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL BRANCH FIRE',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_BRANCH--FIRE_256x256.png'),
          },
          {
              id: 935,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION D',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--D_256x256.png'),
          },
          {
              id: 936,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 8',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--8_256x256.png'),
          },
          {
              id: 937,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 8',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--8_256x256.png'),
          },
          {
              id: 938,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE SECTION Planning',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_SECTION--Planning_256x256.png'),
          },
          {
              id: 939,
              name: 'COMAND NIMPOS WHITE SOLID DETAIL DIVISION 5',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_DETAIL_DIVISION--5_256x256.png'),
          },
          {
              id: 940,
              name: 'COMAND NIMPOS WHITE SOLID SIMPLE DIVISION 5',
              icon: require('../assets/icons/NIMS/COMAND_NIMPOS_WHITE-_SOLID-_SIMPLE_DIVISION--5_256x256.png'),
          },
      ],
  },
  {
      id: -30,
      name: 'Infrastructure',
      icon: require('../assets/Folder-Documents-icon.png'),
      children: [
          {
              id: -31,
              name: 'CRTINS PUBVEN',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 941,
                      name: 'Protestant Churches',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Protestant-Churches_256x256.png'),
                  },
                  {
                      id: 942,
                      name: 'Highways Rest Areas',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Highways-Rest-Areas_256x256.png'),
                  },
                  {
                      id: 943,
                      name: 'Ski Resorts',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Ski-Resorts_256x256.png'),
                  },
                  {
                      id: 944,
                      name: 'All Places of Worship',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/All-Places-of-Worship_256x256.png'),
                  },
                  {
                      id: 945,
                      name: 'Vineyards and Wineries',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Vineyards-and-Wineries_256x256.png'),
                  },
                  {
                      id: 946,
                      name: 'Marinas',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Marinas_256x256.png'),
                  },
                  {
                      id: 947,
                      name: 'Museums',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Museums_256x256.png'),
                  },
                  {
                      id: 948,
                      name: 'Campground',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Campground_256x256.png'),
                  },
                  {
                      id: 949,
                      name: 'Casinos',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Casinos_256x256.png'),
                  },
                  {
                      id: 950,
                      name: 'Historic Sites',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Historic-Sites_256x256.png'),
                  },
                  {
                      id: 951,
                      name: 'Arena or Stadium',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Arena-or-Stadium_256x256.png'),
                  },
                  {
                      id: 952,
                      name: 'Catholic Churches',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Catholic-Churches_256x256.png'),
                  },
                  {
                      id: 953,
                      name: 'Convention Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Convention-Centers_256x256.png'),
                  },
                  {
                      id: 954,
                      name: 'Golf Courses',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Golf-Courses_256x256.png'),
                  },
                  {
                      id: 955,
                      name: 'Community Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Community-Centers_256x256.png'),
                  },
                  {
                      id: 956,
                      name: 'Mobile Home Parks',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Mobile-Home-Parks_256x256.png'),
                  },
                  {
                      id: 957,
                      name: 'Tourist Attractions',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Tourist-Attractions_256x256.png'),
                  },
                  {
                      id: 958,
                      name: 'Theater and Performing Arts Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Theater-and-Performing-Arts-Centers_256x256.png'),
                  },
                  {
                      id: 959,
                      name: 'Drinking Establishments',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Drinking-Establishments_256x256.png'),
                  },
                  {
                      id: 960,
                      name: 'Amusement and Theme Parks',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Amusement-and-Theme-Parks_256x256.png'),
                  },
                  {
                      id: 961,
                      name: 'Cruise Line Terminals',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Cruise-Line-Terminals_256x256.png'),
                  },
                  {
                      id: 962,
                      name: 'Mosques',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Mosques_256x256.png'),
                  },
                  {
                      id: 963,
                      name: 'Libraries',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Libraries_256x256.png'),
                  },
                  {
                      id: 964,
                      name: 'State County and Local Parks',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/State-County-and-Local-Parks_256x256.png'),
                  },
                  {
                      id: 965,
                      name: 'Jewish Synagogues',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBVEN/Jewish-Synagogues_256x256.png'),
                  },
              ],
          },
          {
              id: -32,
              name: 'CRTINS FOODIN',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 966,
                      name: 'Public Refrigerated Warehouses',
                      icon: require('../assets/icons/Infrastructure/CRTINS FOODIN/Public-Refrigerated-Warehouses_256x256.png'),
                  },
              ],
          },
          {
              id: -33,
              name: 'CRTINS CHEMCL',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 967,
                      name: 'Biological Products Manufacturing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Biological-Products-Manufacturing-Facilities_256x256.png'),
                  },
                  {
                      id: 968,
                      name: 'Hazardous Manufacturing',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Hazardous-Manufacturing_256x256.png'),
                  },
                  {
                      id: 969,
                      name: 'Explosives Manufacturing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Explosives-Manufacturing-Facilities_256x256.png'),
                  },
                  {
                      id: 970,
                      name: 'Nitrogenous Fertilizer Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Nitrogenous-Fertilizer-Plants_256x256.png'),
                  },
                  {
                      id: 971,
                      name: 'Chemical Manufacturing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Chemical-Manufacturing-Facilities_256x256.png'),
                  },
                  {
                      id: 972,
                      name: 'Pharmaceutical Preparation Manufacturing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Pharmaceutical-Preparation-Manufacturing-Facilities_256x256.png'),
                  },
                  {
                      id: 973,
                      name: 'Environmental Protection Agency Facility Registry Service Emergency Response Comprehensive Env',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Environmental-Protection-Agency-Facility-Registry-Service-Emergency-Response-Comprehensive-Env_256x256.png'),
                  },
                  {
                      id: 974,
                      name: 'Phosphatic Fertilizer Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Phosphatic-Fertilizer-Plants_256x256.png'),
                  },
                  {
                      id: 975,
                      name: 'Solid Waste Landfill Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS CHEMCL/Solid-Waste-Landfill-Facilities_256x256.png'),
                  },
              ],
          },
          {
              id: -34,
              name: 'CRTINS LAWENF',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 976,
                      name: 'US Customs and Border Protection CBP Office of Field Operations OFO Sector Headquarters',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Customs-and-Border-Protection-CBP-Office-of-Field-Operations-OFO-Sector-Headquarters_256x256.png'),
                  },
                  {
                      id: 977,
                      name: 'US Marshal Service',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Marshal-Service_256x256.png'),
                  },
                  {
                      id: 978,
                      name: 'Dept of Interior DOI Bureau of Indian Affairs BIA Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-Bureau-of-Indian-Affairs-BIA-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 979,
                      name: 'Bureau of Alchohol Tobacco and Firearms',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Bureau-of-Alchohol-Tobacco-and-Firearms_256x256.png'),
                  },
                  {
                      id: 980,
                      name: 'Generic',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Generic_256x256.png'),
                  },
                  {
                      id: 981,
                      name: 'Law Enforcement Locations',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Law-Enforcement-Locations_256x256.png'),
                  },
                  {
                      id: 982,
                      name: 'Dept of Interior DOI US Park Police USPP Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-US-Park-Police-USPP-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 983,
                      name: 'US Postal Service USPS Postal Inspection Service Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Postal-Service-USPS-Postal-Inspection-Service-Facilities_256x256.png'),
                  },
                  {
                      id: 984,
                      name: 'US Customs and Border Protection CBP Office of Field Operations OFO Field Office Headquarters',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Customs-and-Border-Protection-CBP-Office-of-Field-Operations-OFO-Field-Office-Headquarters_256x256.png'),
                  },
                  {
                      id: 985,
                      name: 'Dept of Interior DOI Bureau of Land Management BLM Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-Bureau-of-Land-Management-BLM-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 986,
                      name: 'Law Generic',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Law--Generic_256x256.png'),
                  },
                  {
                      id: 987,
                      name: 'Dept of Interior DOI National Park Service NPS Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-National-Park-Service-NPS-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 988,
                      name: 'Federal Bureau of Investigation FBI Offices',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Federal-Bureau-of-Investigation-FBI-Offices_256x256.png'),
                  },
                  {
                      id: 989,
                      name: 'US Customs and Border Protection CBP US Border Patrol USBP Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Customs-and-Border-Protection-CBP-US-Border-Patrol-USBP-Stations_256x256.png'),
                  },
                  {
                      id: 990,
                      name: 'Dept of Interior DOI Fish and Wildlife Service FWS Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-Fish-and-Wildlife-Service-FWS-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 991,
                      name: 'Dept of Interior DOI Bureau of Reclamation BOR Law Enforcement Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Interior-DOI-Bureau-of-Reclamation-BOR-Law-Enforcement-Facilities_256x256.png'),
                  },
                  {
                      id: 992,
                      name: 'US Customs and Border Protection CBP Office of Field Operations OFO Container Security Initiative CSI Locations',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Customs-and-Border-Protection-CBP-Office-of-Field-Operations-OFO-Container-Security-Initiative-CSI-Locations_256x256.png'),
                  },
                  {
                      id: 993,
                      name: 'Dept of Homeland Security DHS Immigration and Customs Enforcement ICE Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Dept-of-Homeland-Security-DHS-Immigration-and-Customs-Enforcement-ICE-Facilities_256x256.png'),
                  },
                  {
                      id: 994,
                      name: 'Drug Enforcement Agency',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/Drug-Enforcement-Agency_256x256.png'),
                  },
                  {
                      id: 995,
                      name: 'US Customs and Border Protection CBP Office of Field Operations OFO Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS LAWENF/US-Customs-and-Border-Protection-CBP-Office-of-Field-Operations-OFO-Facilities_256x256.png'),
                  },
              ],
          },
          {
              id: -35,
              name: 'CRTINS BORDER',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 996,
                      name: 'Canada and Mexico Border Crossings',
                      icon: require('../assets/icons/Infrastructure/CRTINS BORDER/Canada -and-Mexico-Border-Crossings_256x256.png'),
                  },
                  {
                      id: 997,
                      name: 'Canada and Mexico Border Crossings',
                      icon: require('../assets/icons/Infrastructure/CRTINS BORDER/Canada-and-Mexico-Border-Crossings_256x256.png'),
                  },
                  {
                      id: 998,
                      name: 'US Ports of Entry',
                      icon: require('../assets/icons/Infrastructure/CRTINS BORDER/US-Ports-of-Entry_256x256.png'),
                  },
              ],
          },
          {
              id: -36,
              name: 'CRTINS FINANC',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 999,
                      name: 'FDIC InsuredBanks',
                      icon: require('../assets/icons/Infrastructure/CRTINS FINANC/FDIC_InsuredBanks_256x256.png'),
                  },
                  {
                      id: 1000,
                      name: 'NCUA Insured Credit Union',
                      icon: require('../assets/icons/Infrastructure/CRTINS FINANC/NCUA_Insured_Credit_Union_256x256.png'),
                  },
              ],
          },
          {
              id: -37,
              name: 'CRTINS TRNGND',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1001,
                      name: 'Railroad Junction',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Railroad-Junction_256x256.png'),
                  },
                  {
                      id: 1002,
                      name: 'LINE HAUL RAILROADS',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/LINE-HAUL-RAILROADS_256x256.png'),
                  },
                  {
                      id: 1003,
                      name: 'Amtrak Bus Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Amtrak-Bus-Station_256x256.png'),
                  },
                  {
                      id: 1004,
                      name: 'Amtrak Train',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Amtrak-Train_256x256.png'),
                  },
                  {
                      id: 1005,
                      name: 'NBI Bridge',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/NBI-Bridge_256x256.png'),
                  },
                  {
                      id: 1006,
                      name: 'Railroad Yard',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Railroad-Yard_256x256.png'),
                  },
                  {
                      id: 1007,
                      name: 'Fixed Guideway Transit Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Fixed-Guideway-Transit-Stations_256x256.png'),
                  },
                  {
                      id: 1008,
                      name: 'Bus Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Bus-Station_256x256.png'),
                  },
                  {
                      id: 1009,
                      name: 'Road and Railroad Tunnels',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Road-and-Railroad-Tunnels_256x256.png'),
                  },
                  {
                      id: 1010,
                      name: 'Intermodal Terminal Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Intermodal-Terminal-Facilities_256x256.png'),
                  },
                  {
                      id: 1011,
                      name: 'COMMUTER RAIL SYSTEMS',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/COMMUTER-RAIL-SYSTEMS_256x256.png'),
                  },
                  {
                      id: 1012,
                      name: 'Railroad Bridges',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNGND/Railroad-Bridges_256x256.png'),
                  },
              ],
          },
          {
              id: -38,
              name: 'CRTINS GOVMNT',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1013,
                      name: 'Weather Radar Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/Weather-Radar-Station_256x256.png'),
                  },
                  {
                      id: 1014,
                      name: 'Governmental Faciliy Courthouse',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/Governmental-Faciliy--Courthouse_256x256.png'),
                  },
                  {
                      id: 1015,
                      name: 'Major State Government Buildings',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/Major-State-Government-Buildings_256x256.png'),
                  },
                  {
                      id: 1016,
                      name: 'Government Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/Government-Facilities_256x256.png'),
                  },
                  {
                      id: 1017,
                      name: 'Joint Operation Centers JOC',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/Joint-Operation-Centers-JOC_256x256.png'),
                  },
                  {
                      id: 1018,
                      name: 'State Government Capitol',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/State-Government-Capitol_256x256.png'),
                  },
                  {
                      id: 1019,
                      name: 'City Hall',
                      icon: require('../assets/icons/Infrastructure/CRTINS GOVMNT/City-Hall_256x256.png'),
                  },
              ],
          },
          {
              id: -39,
              name: 'CRTINS POSTAL',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1020,
                      name: 'CRTINS POSTAL WHITE SOLID DETAIL US Postal Service USPS Postal Inspection Service Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS POSTAL/CRTINS_POSTAL_WHITE__SOLID-_DETAIL_US-Postal-Service-USPS-Postal-Inspection-Service-Facilities_256x256.png'),
                  },
              ],
          },
          {
              id: -40,
              name: 'CRTINS AGRCLT',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1021,
                      name: 'Other Crop Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Other-Crop-Farms_256x256.png'),
                  },
                  {
                      id: 1022,
                      name: 'Animal Aquaculture Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Animal-Aquaculture-Facilities_256x256.png'),
                  },
                  {
                      id: 1023,
                      name: 'Cattle Feedlots',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Cattle-Feedlots_256x256.png'),
                  },
                  {
                      id: 1024,
                      name: 'Botanical and Zoological Gardens',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Botanical-and-Zoological-Gardens_256x256.png'),
                  },
                  {
                      id: 1025,
                      name: 'Hunting Trapping and Game Propagation Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Hunting-Trapping-and-Game-Propagation-Facilities_256x256.png'),
                  },
                  {
                      id: 1026,
                      name: 'Fruit and Tree Nut Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Fruit-and-Tree-Nut-Farms_256x256.png'),
                  },
                  {
                      id: 1027,
                      name: 'Oilseed and Grain Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Oilseed-and-Grain-Farms_256x256.png'),
                  },
                  {
                      id: 1028,
                      name: 'Poultry and Egg Production Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Poultry-and-Egg-Production-Farms_256x256.png'),
                  },
                  {
                      id: 1029,
                      name: 'Animal Slaughtering and Processing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Animal-Slaughtering-and-Processing-Facilities_256x256.png'),
                  },
                  {
                      id: 1030,
                      name: 'Vegetable and Melon Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Vegetable-and-Melon-Farms_256x256.png'),
                  },
                  {
                      id: 1031,
                      name: 'Greenhouse Nursery and Floriculture Production Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Greenhouse-Nursery-and-Floriculture-Production-Facilities_256x256.png'),
                  },
                  {
                      id: 1032,
                      name: 'State Fairgrounds',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/State-Fairgrounds_256x256.png'),
                  },
                  {
                      id: 1033,
                      name: 'Poultry Slaughtering and Processing Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Poultry-Slaughtering-and-Processing-Facilities_256x256.png'),
                  },
                  {
                      id: 1034,
                      name: 'Hog and Pig Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Hog-and-Pig-Farms_256x256.png'),
                  },
                  {
                      id: 1035,
                      name: 'Dairy Cattle Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Dairy-Cattle-Farms_256x256.png'),
                  },
                  {
                      id: 1036,
                      name: 'Beef Cattle Ranches and Farms',
                      icon: require('../assets/icons/Infrastructure/CRTINS AGRCLT/Beef-Cattle-Ranches-and-Farms_256x256.png'),
                  },
              ],
          },
          {
              id: -41,
              name: 'CRTINS EDUCAT',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1037,
                      name: 'Truck Driving Schools',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Truck-Driving-Schools_256x256.png'),
                  },
                  {
                      id: 1038,
                      name: 'Flight Schools',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Flight-Schools_256x256.png'),
                  },
                  {
                      id: 1039,
                      name: 'School',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/School_256x256.png'),
                  },
                  {
                      id: 1040,
                      name: 'Day Care Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Day-Care-Centers_256x256.png'),
                  },
                  {
                      id: 1041,
                      name: 'Private Schools',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Private-Schools_256x256.png'),
                  },
                  {
                      id: 1042,
                      name: 'Supplemental Colleges',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Supplemental-Colleges_256x256.png'),
                  },
                  {
                      id: 1043,
                      name: 'Public Schools',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Public-Schools_256x256.png'),
                  },
                  {
                      id: 1044,
                      name: 'Colleges and Universities',
                      icon: require('../assets/icons/Infrastructure/CRTINS EDUCAT/Colleges-and-Universities_256x256.png'),
                  },
              ],
          },
          {
              id: -42,
              name: 'CRTINS TRNAIR',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1045,
                      name: 'Aeronautical Obstructions',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Aeronautical-Obstructions_256x256.png'),
                  },
                  {
                      id: 1046,
                      name: 'Airport GLIDERPORT',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--GLIDERPORT_256x256.png'),
                  },
                  {
                      id: 1047,
                      name: 'Airport BALLOONPORT',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--BALLOONPORT_256x256.png'),
                  },
                  {
                      id: 1048,
                      name: 'Airport ULTRALIGHT',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--ULTRALIGHT_256x256.png'),
                  },
                  {
                      id: 1049,
                      name: 'Airport General Aviation',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--General-Aviation_256x256.png'),
                  },
                  {
                      id: 1050,
                      name: 'Airport Seaplane',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--Seaplane_256x256.png'),
                  },
                  {
                      id: 1051,
                      name: 'Airport Commercial',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--Commercial_256x256.png'),
                  },
                  {
                      id: 1052,
                      name: 'Airport Heliport',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNAIR/Airport--Heliport_256x256.png'),
                  },
              ],
          },
          {
              id: -43,
              name: 'CRTINS ENERGY',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1053,
                      name: 'Liquified Natural Gas Import Exports and Terminals',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Liquified-Natural-Gas-Import-Exports-and-Terminals_256x256.png'),
                  },
                  {
                      id: 1054,
                      name: 'Natural Gas Processing Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Processing-Plants_256x256.png'),
                  },
                  {
                      id: 1055,
                      name: 'Oil and Natural Gas Wells',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Oil-and-Natural-Gas-Wells_256x256.png'),
                  },
                  {
                      id: 1056,
                      name: 'Distribution Control Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Distribution-Control-Facilities_256x256.png'),
                  },
                  {
                      id: 1057,
                      name: 'Crude Oil Storage',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Crude-Oil-Storage_256x256.png'),
                  },
                  {
                      id: 1058,
                      name: 'Electricity Substations',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Electricity-Substations_256x256.png'),
                  },
                  {
                      id: 1059,
                      name: 'Petroleum Oil and Lubricant Terminals',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Petroleum-Oil-and-Lubricant-Terminals_256x256.png'),
                  },
                  {
                      id: 1060,
                      name: 'Biodiesel Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Biodiesel-Plants_256x256.png'),
                  },
                  {
                      id: 1061,
                      name: 'LNG Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/LNG-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1062,
                      name: 'LPG Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/LPG-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1063,
                      name: 'Petroleum Ports',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Petroleum-Ports_256x256.png'),
                  },
                  {
                      id: 1064,
                      name: 'Nuclear Power Plant',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Nuclear-Power-Plant_256x256.png'),
                  },
                  {
                      id: 1065,
                      name: 'E 85 Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/E-85-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1066,
                      name: 'Oil Refineries',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Oil-Refineries_256x256.png'),
                  },
                  {
                      id: 1067,
                      name: 'M 85 Methanol Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/M-85-Methanol-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1068,
                      name: 'Petroluem Storage',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Petroluem-Storage_256x256.png'),
                  },
                  {
                      id: 1069,
                      name: 'Electric Vehicle Charging Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Electric--Vehicle-Charging-Station_256x256.png'),
                  },
                  {
                      id: 1070,
                      name: 'Nuclear Research Facility',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Nuclear-Research-Facility_256x256.png'),
                  },
                  {
                      id: 1071,
                      name: 'Outer Continental Shelf OCS Pacific Platforms',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Outer-Continental-Shelf-OCS-Pacific-Platforms_256x256.png'),
                  },
                  {
                      id: 1072,
                      name: 'Strategic and Petroleum Reserves',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Strategic-and-Petroleum-Reserves_256x256.png'),
                  },
                  {
                      id: 1073,
                      name: 'Natural Gas Compressor Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Compressor-Stations_256x256.png'),
                  },
                  {
                      id: 1074,
                      name: 'Natural Gas Import and Export',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Import-and-Export_256x256.png'),
                  },
                  {
                      id: 1075,
                      name: 'Electricity',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Electricity_256x256.png'),
                  },
                  {
                      id: 1076,
                      name: 'Nuclear Fuel Plant',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Nuclear-Fuel-Plant_256x256.png'),
                  },
                  {
                      id: 1077,
                      name: 'Coal Processing',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Coal-Processing_256x256.png'),
                  },
                  {
                      id: 1078,
                      name: 'Natural Gas',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas_256x256.png'),
                  },
                  {
                      id: 1079,
                      name: 'Petroluem Processing',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Petroluem-Processing_256x256.png'),
                  },
                  {
                      id: 1080,
                      name: 'CNG Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/CNG-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1081,
                      name: 'Pacific Wells',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Pacific-Wells_256x256.png'),
                  },
                  {
                      id: 1082,
                      name: 'Diesel Plant',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Diesel-Plant_256x256.png'),
                  },
                  {
                      id: 1083,
                      name: 'HY Fuel Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/HY-Fuel-Station_256x256.png'),
                  },
                  {
                      id: 1084,
                      name: 'Biodiesel Gas',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Biodiesel-Gas_256x256.png'),
                  },
                  {
                      id: 1085,
                      name: 'Coal Storage V2',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Coal-Storage-V2_256x256.png'),
                  },
                  {
                      id: 1086,
                      name: 'Natural Gas Market Hubs',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Market-Hubs_256x256.png'),
                  },
                  {
                      id: 1087,
                      name: 'Electric Power Generation Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Electric-Power-Generation-Plants_256x256.png'),
                  },
                  {
                      id: 1088,
                      name: 'Natural Gas Storage Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Storage-Facilities_256x256.png'),
                  },
                  {
                      id: 1089,
                      name: 'Gas Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Gas-Stations_256x256.png'),
                  },
                  {
                      id: 1090,
                      name: 'Ethanol Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Ethanol-Plants_256x256.png'),
                  },
                  {
                      id: 1091,
                      name: 'Environmental Proteaction Agency (EPA) Facility Registry Service (FRS) Power Plant',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Environmental-Proteaction-Agency-(EPA)-Facility-Registry-Service-(FRS)-Power Plant_256x256.png'),
                  },
                  {
                      id: 1092,
                      name: 'Natural Gas Receipt Delivery',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Natural-Gas-Receipt-Delivery_256x256.png'),
                  },
                  {
                      id: 1093,
                      name: 'Oil and Natural Gas Platform',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Oil-and-Natural-Gas-Platform_256x256.png'),
                  },
                  {
                      id: 1094,
                      name: 'Oil and Natural Gas Interconnects Gas',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Oil-and-Natural-Gas-Interconnects-Gas_256x256.png'),
                  },
                  {
                      id: 1095,
                      name: 'Coal',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Coal_256x256.png'),
                  },
                  {
                      id: 1096,
                      name: 'Ethanol Transloading Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Ethanol-Transloading-Facilities_256x256.png'),
                  },
                  {
                      id: 1097,
                      name: 'POL Pumping Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/POL-Pumping-Station_256x256.png'),
                  },
                  {
                      id: 1098,
                      name: 'Oil and Natural Gas Interconnects',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Oil-and-Natural-Gas-Interconnects_256x256.png'),
                  },
                  {
                      id: 1099,
                      name: 'Propane Retailer Locations',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Propane-Retailer-Locations_256x256.png'),
                  },
                  {
                      id: 1100,
                      name: 'Diesel Gas',
                      icon: require('../assets/icons/Infrastructure/CRTINS ENERGY/Diesel_Gas_256x256.png'),
                  },
              ],
          },
          {
              id: -44,
              name: 'CRTINS PUBHTH',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1101,
                      name: 'Blood and Organ Banks',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Blood-and-Organ-Banks_256x256.png'),
                  },
                  {
                      id: 1102,
                      name: 'Public Health Departments',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Public-Health-Departments_256x256.png'),
                  },
                  {
                      id: 1103,
                      name: 'Nursing Home',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Nursing-Home_256x256.png'),
                  },
                  {
                      id: 1104,
                      name: 'Hospitals',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Hospitals_256x256.png'),
                  },
                  {
                      id: 1105,
                      name: 'Adult Care Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Adult-Care-Facilities_256x256.png'),
                  },
                  {
                      id: 1106,
                      name: 'Funeral Homes and Funeral Service Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Funeral-Homes-and-Funeral-Service-Facilities_256x256.png'),
                  },
                  {
                      id: 1107,
                      name: 'PublicHealth Centers for Disease Control',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/PublicHealth-Centers-for-Disease-Control_256x256.png'),
                  },
                  {
                      id: 1108,
                      name: 'Veterans Health Administration Medical Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Veterans-Health-Administration-Medical-Facilities_256x256.png'),
                  },
                  {
                      id: 1109,
                      name: 'Dialysis Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Dialysis-Centers_256x256.png'),
                  },
                  {
                      id: 1110,
                      name: 'Veterinary Service Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Veterinary-Service-Facilities_256x256.png'),
                  },
                  {
                      id: 1111,
                      name: 'Urgent Care Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Urgent-Care-Facilities_256x256.png'),
                  },
                  {
                      id: 1112,
                      name: 'Cemeteries and Crematories',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Cemeteries-and-Crematories_256x256.png'),
                  },
                  {
                      id: 1113,
                      name: 'Veterans Health Administration Medical Clinic',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Veterans-Health-Administration-Medical-Clinic_256x256.png'),
                  },
                  {
                      id: 1114,
                      name: 'Pharmacies',
                      icon: require('../assets/icons/Infrastructure/CRTINS PUBHTH/Pharmacies_256x256.png'),
                  },
              ],
          },
          {
              id: -45,
              name: 'CRTINS COMMRL',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1115,
                      name: 'Cart',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Cart_256x256.png'),
                  },
                  {
                      id: 1116,
                      name: 'Mall and Shopping Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Mall-and-Shopping-Centers_256x256.png'),
                  },
                  {
                      id: 1117,
                      name: 'Electronics Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Electronics-Store_256x256.png'),
                  },
                  {
                      id: 1118,
                      name: 'Office Supply and Service Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Office-Supply-and-Service-Store_256x256.png'),
                  },
                  {
                      id: 1119,
                      name: 'Sporting Goods Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Sporting-Goods-Store_256x256.png'),
                  },
                  {
                      id: 1120,
                      name: 'Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Store_256x256.png'),
                  },
                  {
                      id: 1121,
                      name: 'Clothing Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Clothing-Store_256x256.png'),
                  },
                  {
                      id: 1122,
                      name: 'Convenience Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Convenience-Store_256x256.png'),
                  },
                  {
                      id: 1123,
                      name: 'Book Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Book-Store_256x256.png'),
                  },
                  {
                      id: 1124,
                      name: 'Hotel Motel',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Hotel-Motel_256x256.png'),
                  },
                  {
                      id: 1125,
                      name: 'Grocery Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Grocery-Store_256x256.png'),
                  },
                  {
                      id: 1126,
                      name: 'Home Improvement and Hardware Store',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMRL/Home-Improvement-and-Hardware-Store_256x256.png'),
                  },
              ],
          },
          {
              id: -46,
              name: 'CRTINS TRNWAT',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1127,
                      name: 'Major US Port Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNWAT/Major-US-Port-Facilities_256x256.png'),
                  },
                  {
                      id: 1128,
                      name: 'Ferry Locations',
                      icon: require('../assets/icons/Infrastructure/CRTINS TRNWAT/Ferry-Locations_256x256.png'),
                  },
              ],
          },
          {
              id: -47,
              name: 'CRTINS WATSUP',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1129,
                      name: 'Drinking Water Source Private',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-Private_256x256.png'),
                  },
                  {
                      id: 1130,
                      name: 'Water System Community water system',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Water-System-Community-water-system_256x256.png'),
                  },
                  {
                      id: 1131,
                      name: 'Air Water Solid Waste Management Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Air-Water-Solid-Waste- Management-Plants_256x256.png'),
                  },
                  {
                      id: 1132,
                      name: 'Water System Non Transient non community system',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Water-System-Non-Transient-non-community-system_256x256.png'),
                  },
                  {
                      id: 1133,
                      name: 'Drinking Water Source Native American',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-Native American_256x256.png'),
                  },
                  {
                      id: 1134,
                      name: 'Drinking Water Storage V2',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Storage-V2_256x256.png'),
                  },
                  {
                      id: 1135,
                      name: 'Environmental Protection Agency EPA Facility Registry Service FRS Wastewater Treatment Plants',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Environmental-Protection-Agency-EPA-Facility-Registry-Service-FRS-Wastewater-Treatment-Plants_256x256.png'),
                  },
                  {
                      id: 1136,
                      name: 'Drinking Water Source Local Government',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-Local-Government_256x256.png'),
                  },
                  {
                      id: 1137,
                      name: 'Drinking Water Source State Government',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-State-Government_256x256.png'),
                  },
                  {
                      id: 1138,
                      name: 'Drinking Water Source Federal Government',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-Federal-Government_256x256.png'),
                  },
                  {
                      id: 1139,
                      name: 'Drinking Water Source',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source_256x256.png'),
                  },
                  {
                      id: 1140,
                      name: 'Drinking Water Source Public Private',
                      icon: require('../assets/icons/Infrastructure/CRTINS WATSUP/Drinking-Water-Source-Public-Private_256x256.png'),
                  },
              ],
          },
          {
              id: -48,
              name: 'CRTINS NATHAZ',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1141,
                      name: 'Streamflow Gaging Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS NATHAZ/Streamflow-Gaging-Stations_256x256.png'),
                  },
                  {
                      id: 1142,
                      name: 'Tsunami Tide Gauges',
                      icon: require('../assets/icons/Infrastructure/CRTINS NATHAZ/Tsunami-Tide-Gauges_256x256.png'),
                  },
                  {
                      id: 1143,
                      name: 'Tsunami Tide Alarm',
                      icon: require('../assets/icons/Infrastructure/CRTINS NATHAZ/Tsunami-Tide-Alarm_256x256.png'),
                  },
              ],
          },
          {
              id: -49,
              name: 'CRTINS EMRSVC',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1144,
                      name: 'Local Emergency Operation Centers EOC',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Local-Emergency-Operation-Centers-EOC_256x256.png'),
                  },
                  {
                      id: 1145,
                      name: 'Federal Emergency Management Agency Headquarters',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Federal-Emergency-Management-Agency-Headquarters_256x256.png'),
                  },
                  {
                      id: 1146,
                      name: '911 Communication Centers',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/911-Communication-Centers_256x256.png'),
                  },
                  {
                      id: 1147,
                      name: 'Emergency Medical Service EMS Stations',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Emergency-Medical-Service-EMS-Stations_256x256.png'),
                  },
                  {
                      id: 1148,
                      name: 'Emergency Animal Shelter',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Emergency-Animal-Shelter_256x256.png'),
                  },
                  {
                      id: 1149,
                      name: 'Fire Station',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Fire-Station_256x256.png'),
                  },
                  {
                      id: 1150,
                      name: 'Emergency Services',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Emergency-Services_256x256.png'),
                  },
                  {
                      id: 1151,
                      name: 'State Emergency Operation Centers EOC',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/State-Emergency-Operation-Centers-EOC_256x256.png'),
                  },
                  {
                      id: 1152,
                      name: 'American Red Cross Chapter Facilities',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/American-Red-Cross-Chapter-Facilities_256x256.png'),
                  },
                  {
                      id: 1153,
                      name: 'EMS Air Medical Service Providers ADAMS AAMS',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/EMS--Air-Medical-Service-Providers--ADAMS_AAMS_256x256.png'),
                  },
                  {
                      id: 1154,
                      name: 'American Red Cross Headquarters',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/American-Red-Cross-Headquarters_256x256.png'),
                  },
                  {
                      id: 1155,
                      name: 'Federal Emergency Management Agency Recovery Offices',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Federal-Emergency-Management-Agency-Recovery-Offices_256x256.png'),
                  },
                  {
                      id: 1156,
                      name: 'Emergency Shelter',
                      icon: require('../assets/icons/Infrastructure/CRTINS EMRSVC/Emergency-Shelter_256x256.png'),
                  },
              ],
          },
          {
              id: -50,
              name: 'CRTINS COMMS-',
              icon: require('../assets/Folder-Documents-icon.png'),
              children: [
                  {
                      id: 1157,
                      name: 'Land Mobile Private Transmission Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Land-Mobile-Private-Transmission-Towers_256x256.png'),
                  },
                  {
                      id: 1158,
                      name: 'Transmission Tower',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Transmission-Tower_256x256.png'),
                  },
                  {
                      id: 1159,
                      name: 'Paging Transmission Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Paging-Transmission-Towers_256x256.png'),
                  },
                  {
                      id: 1160,
                      name: 'Television Transmission Station Digital',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Television-Transmission-Station-Digital_256x256.png'),
                  },
                  {
                      id: 1161,
                      name: 'Land Mobile Broadcast Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Land-Mobile-Broadcast-Towers_256x256.png'),
                  },
                  {
                      id: 1162,
                      name: 'Cellular Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Cellular-Towers_256x256.png'),
                  },
                  {
                      id: 1163,
                      name: 'FM Transmission Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/FM-Transmission-Towers_256x256.png'),
                  },
                  {
                      id: 1164,
                      name: 'Television Transmission Station Analog',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Television-Transmission-Station-Analog_256x256.png'),
                  },
                  {
                      id: 1165,
                      name: 'Transmission Towers Mobile',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Transmission-Towers-Mobile_256x256.png'),
                  },
                  {
                      id: 1166,
                      name: 'Antenna Structure Registrate',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Antenna_Structure_Registrate_256x256.png'),
                  },
                  {
                      id: 1167,
                      name: 'AM Transmission Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/AM-Transmission-Towers_256x256.png'),
                  },
                  {
                      id: 1168,
                      name: 'Land Mobile Commercial Transmission Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Land-Mobile-Commercial-Transmission-Towers_256x256.png'),
                  },
                  {
                      id: 1169,
                      name: 'Microwave Service Towers',
                      icon: require('../assets/icons/Infrastructure/CRTINS COMMS-/Microwave-Service-Towers_256x256.png'),
                  },
              ],
          },
      ],
  },
]

