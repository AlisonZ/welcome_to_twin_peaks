import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableWithoutFeedback, Text } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.map();
}

    render() {
        const { backgroundImage, textStyle, container} = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <View style={container}>
                    <Image style={backgroundImage} source={require('../img/curtains.gif')}>
                        <Text style={textStyle}>ENTER</Text>
                    </Image>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: width,
        height: height,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'green',
        fontSize: 60,
        // paddingTop: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        textAlign: 'center'
    }
};

export default WelcomePage;
