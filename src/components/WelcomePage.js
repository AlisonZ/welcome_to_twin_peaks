import React, { Component } from 'react';
import { Dimensions, View, TouchableWithoutFeedback, Text, Image} from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.map();
}

    render() {
        const { backgroundImage, textStyle, container } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <View style={container}>
                    <Image style={backgroundImage} source={require('../img/curtains.gif')}>
                        <Text style={textStyle}>CLICK TO ENTER</Text>
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
        fontSize: 60,
        // fontWeight: '600',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 3, height: 3},
        fontFamily: 'HelveticaNeue-Medium'
    }
};

export default WelcomePage;
