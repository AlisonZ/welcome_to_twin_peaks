import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FadeImage from 'react-native-fade-image'
var { height, width } = Dimensions.get('window');


class CurtainGif extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            console.log('i want this to work!');
            Actions.map();
        }, 1100);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <FadeImage
                style={styles.gif}
                duration = {1100}
                source={require('../img/curtains.gif')}
                />
            </View>
        );
    }
}

const styles = {
    wrapper:{
        flex: 1,
    },
    gif: {
        flex: 1,
        width: width,
        resizeMode: 'stretch'
    }
};

export default CurtainGif;
