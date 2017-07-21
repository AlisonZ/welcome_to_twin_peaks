import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');

class CurtainGif extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            console.log('i want this to work!');
            Actions.map();
        }, 1500);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Image
                style={styles.gif}
                source={require('../img/curtains_floor.gif')}
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
