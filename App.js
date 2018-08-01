import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Account from './Components/Account';
import Anatomy from './Components/Anatomy';
import { Root  } from 'native-base';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#006cb7',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Probasta
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)
const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Account: { screen: Account }
  },{
    // define customComponent here
    contentComponent: DrawerContent,
  });
const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  });
export default () =>
  <Root>
    <AppNavigator />
  </Root>;
