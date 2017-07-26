import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

const ShowButton = ({ onPress, children, style }) => {
    const { buttonStyle, textStyle, background } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 2, height: 2},
        textShadowOpacity: 0.2,
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 5,
        marginRight: 5,
    },

};

export { ShowButton };
