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
                <View style={styles.wrapper}>
                    <Image
                    source={require('../img/falls.jpg')}
                    style={styles.image}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    wrapper:{
        flex: 1,
    },
    image: {
        flex: 1,
        width: width,
        resizeMode: 'stretch'
    }
};

export default WelcomePage;
