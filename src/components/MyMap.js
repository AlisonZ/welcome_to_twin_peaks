import React, { Component } from 'react';
var { height, width } = Dimensions.get('window');
// import ReactNative from 'react-native';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class MyMap extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <MapView style={styles.map}
                initialRegion={{
                    latitude: 47.620506,
                    longitude: -122.349277,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >

                    <MapView.Marker
                        coordinate= { { longitude: -122.336581, latitude: 47.627618 }}
                        title={"MOHAI"}
                        descripton={"Seattle Historical Museum"}
                    />
                </MapView>
            </View>
        );
    }
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: width,
        height: height,
        backgroundColor: '#888'

    }

};

export default MyMap;
