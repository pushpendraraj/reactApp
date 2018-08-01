import React from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <PageHeader />
        <Content padder />
        <PageFooter />
      </Container>
    );
  }
}