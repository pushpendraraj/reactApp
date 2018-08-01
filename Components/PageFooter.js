import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, Title, Button, Left, Right, Body, Icon, FooterTab, Text } from 'native-base';

export default class PageFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        };
    }
    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        });
    }
    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false
        });
    }
    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        });
    }
    toggleTab4() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true
        });
    }
    render() {
        return (

            <Footer>
                <FooterTab>
                    <Button  transparent primary style={{ alignSelf: "center" }}  active={this.state.tab1} onPress={() => this.toggleTab1()}>
                        <Icon name="ios-home" />
                    </Button>
                    <Button  transparent primary style={{ alignSelf: "center" }}  active={this.state.tab2} onPress={() => this.toggleTab2()}>
                        <Icon name="ios-menu" />
                    </Button>
                    <Button  transparent primary style={{ alignSelf: "center" }} active={this.state.tab3} onPress={() => this.toggleTab3()}>
                        <Icon name="ios-menu" />
                    </Button>
                    <Button iconLeft transparent primary style={{ alignSelf: "center" }} active={this.state.tab4} onPress={() => this.toggleTab4()}>
                        <Icon name="ios-menu" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#006cb7'
    }
});