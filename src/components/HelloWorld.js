import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class HelloWorld extends Component {

    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            console.log('i want this to work!');
            Actions.map();
        }, 1750);
    }

    render() {
        return (
            <View>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
                <Text>Hello there</Text>
            </View>
        );
    }
}

export default HelloWorld;
