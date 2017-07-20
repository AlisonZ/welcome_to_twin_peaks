import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
var { height, width } = Dimensions.get('window');

class CurtainGif extends Component {
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
