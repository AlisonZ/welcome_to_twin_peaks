import React, { Component } from 'react';
var { height, width } = Dimensions.get('window');
import ReactNative from 'react-native';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { locations } from './reducers/LocationList.json';

class MyMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude: 47.542085,
                longitude: -121.836647,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    // showBuildings={true}
                    // showsMyLocationButton={true}
                >
                {locations.map ((location, index ) =>
                  <MapView.Marker
                      key={index}
                      coordinate = {{
                          latitude: location.coordinate[0],
                          longitude: location.coordinate[1],

                      }}
                      title={location.tpName}
                      // image={require('../../assets/images/symbol.png')}
                      // style={styles.marker}
                  />
              )}
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

    },
    // marker: {
    //     width: 5,
    //     height: 5,
    //     color: 'red',
    // },
};

export default MyMap;
