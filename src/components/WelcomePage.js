import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.map();
}

    render() {
        const { image } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <View style={styles.wrapper}>
                    <Image
                    style={image}
                    source={require('../img/curtains.gif')}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    wrapper: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        width: width,
        height: height,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default WelcomePage;
