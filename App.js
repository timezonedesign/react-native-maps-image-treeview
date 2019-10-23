import React from 'react';

import Home from './components/App';
import firstScreen from './components/firstScreen';
import secondScreen from './components/secondScreen';
import thirdScreen from './components/thirdScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { name as appName } from './app.json';

const RootStack = createStackNavigator(
  {
    Home: Home,
    firstScreen: firstScreen,
    secondScreen: secondScreen,
    thirdScreen: thirdScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}