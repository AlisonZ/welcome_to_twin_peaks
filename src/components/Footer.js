import React from 'react';
import { View, Image } from 'react-native';

const Footer = ({ onPress, children, style }) => {
    const { viewStyle, imageStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image style={imageStyle} source={require('../img/zig_zag_floor.jpg')} />

        </View>

    );
};

const styles = {
    imageStyle:{
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 0,
        height: 130
    },
    viewStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 0
    }
};

export { Footer };
