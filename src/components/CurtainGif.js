import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');

class CurtainGif extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            console.log('i want this to work!');
            Actions.map();
        }, 1750);
    }

    render() {
        return (
            <Image
            style={styles.sign}
            source={require('../img/coop_falling.gif')}
            />
        );
    }
}

const styles = {
    sign: {
        width: width,
        height: height
    }
};

export default CurtainGif;
