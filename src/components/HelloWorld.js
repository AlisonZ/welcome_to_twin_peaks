import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from './common';

class HelloWorld extends Component {
    clickButton(lat, long, url){
        const combinedUrl = url + lat + ',' + long;
        return Linking.openURL(combinedUrl);
        console.log(combinedUrl);
    }

    render() {
        const lat = 47.620506;
        const long = -122.349277;
        const url = 'http://maps.apple.com/?daddr=';


        return (
            <View>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Button onPress={this.clickButton.bind(this, lat, long, url)}>
                    Touch me
                </Button>
            </View>
        );
    }
}

export default HelloWorld;
