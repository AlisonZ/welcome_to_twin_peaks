import React, { Component } from 'react';
import { Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.map();
}

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <Image
                style={styles.sign}
                source={{ uri: 'https://welcometotwinpeaks.com/wp-content/uploads/welcome-to-twin-peaks-sign-51201.jpg' }}
                resizeMode={Image.resizeMode.stretch}
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
