import React from 'react';
var { height, width } = Dimensions.get('window');
// import ReactNative from 'react-native';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const MyMap= () => {
    const { map } = styles;

    return (
        <MapView style={map}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        />
    );
};

const styles = {
    map: {
        width: width,
        height: height,
        backgroundColor: '#888'

    }

};

export default MyMap;
