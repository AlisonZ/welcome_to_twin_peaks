import React from 'react';
import { View } from 'react-native';

const LocationCard = (props) => {
    return (
        <View style={[styles.containerStyle, props.styles]}>
        { props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#888',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

    }
};

export { LocationCard };
