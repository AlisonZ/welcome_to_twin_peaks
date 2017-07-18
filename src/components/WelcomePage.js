import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
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
        flex: 1,
        width: null,
        height: null
    }
};

export default WelcomePage;
