import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Account from './Components/Account';
import { TabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }


export default createBottomTabNavigator({
  MainTab: { 
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon:<Icon name='home' />
    }
  },
  AccountTab: { 
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'My Account',
      tabBarIcon:<Icon name='account-circle' />
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
