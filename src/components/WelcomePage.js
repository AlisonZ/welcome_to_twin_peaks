import React, { Component } from 'react';
import { Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.curtainGif();
}

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <Image
                style={styles.sign}
                source={require('../img/welcome-to-twin-peaks-sign.jpg')}
                />
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    sign: {
        width: width,
        height: height
    }
};

export default WelcomePage;
