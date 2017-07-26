import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

class WelcomePage extends Component {

welcomeClick() {
    Actions.map();
}

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.welcomeClick()}>
                <View style={styles.wrapper}>
                    <Image
                    style={styles.image}
                    source={require('../img/falls.jpg')}
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
        height: height
    }
};

export default WelcomePage;
