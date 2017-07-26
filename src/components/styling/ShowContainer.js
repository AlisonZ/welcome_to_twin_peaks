import React from 'react';
import { View } from 'react-native';

const ShowContainer = (props) => {
    return (
        <View style={styles.containerStyle}>
        { props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 80

    }
};

export { ShowContainer };
