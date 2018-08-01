import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Account from './Components/Account';
import Anatomy from './Components/Anatomy';
import { Root  } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Account: { screen: Account }
  });
const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  });
export default () =>
  <Root>
    <AppNavigator />
  </Root>;
