import React, { Component } from 'react';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';
// import { locations } from './reducers/LocationList.json';

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

    markerClick() {
        console.log('marker was clicked');
        console.log('this is state', this.state);
    }

    render() {
        const { locations } = this.props;
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
                >
                {locations.map((location, index) =>
                    <MapView.Marker
                    key={index}
                    coordinate={{
                        latitude: location.coordinate[0],
                        longitude: location.coordinate[1],
                    }}
                    onPress={() => this.markerClick()}
                    title={location.tpName}
                    />
                )}
                </MapView>
            </View>
        );
    }
}

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

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(MyMap);
