import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon, Header, SearchBar } from 'react-native-elements';

export default class Home extends React.Component {
    render() {
      return (
        
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Probasta', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <SearchBar
  showLoading
  platform="android"
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  placeholder='Search' />
          <Text>Home Test Page</Text>
        </View>
      );
    }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });