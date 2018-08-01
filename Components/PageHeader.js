import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button iconLeft transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button iconLeft transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-home" />
          </Button>
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#006cb7'
  }
});