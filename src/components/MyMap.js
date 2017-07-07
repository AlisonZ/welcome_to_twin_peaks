import React, { Component } from 'react';
var { height, width } = Dimensions.get('window');
// import ReactNative from 'react-native';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { locations } from '../../data.js';

class MyMap extends Component {
    render() {
        return (
            // <View style = {styles.container}>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 47.542085,
                longitude: -121.836647,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >

            {locations.map ((location, index) =>
                <MapView.Marker
                    coordinate = {{
                        latitude: location.coordinate[0],
                        longitude: location.coordinate[1],

                    }}
                    title={location.tpName}
                />
            )}
            </MapView>
            // <MapView.Marker
            //     coordinate= { { longitude: -122.336581, latitude: 47.627618 }}
            //     title={"MOHAI"}
            //     descripton={"Seattle Historical Museum"}
            //     // image={{ uri: ".../assets/images/symbol.png"}}
            // />
            // </View>
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
