import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.curtainGif();
}

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()} >
                <View style={styles.aligner}>
                    <Image
                        source={require('../img/welcome-to-twin-peaks-sign.jpg')}
                        style={styles.sign}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    aligner: {
        alignSelf: 'center',
        paddingTop: 100,
        backgroundColor: 'green',
        flex: 1
    },
    sign: {
        justifyContent: 'center'
    },
};

export default WelcomePage;
