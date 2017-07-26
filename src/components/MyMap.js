import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableWithoutFeedback, Linking } from 'react-native';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
// import { locations } from './reducers/LocationList.json';


const marker = require('../img/owl_room.jpg');
const selectedMarker = require('../img/symbol.png');

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            currentLocation: {
                latitude: 0,
                longitude: 0
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    componentDidMount() {
        console.log('component did mount');
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: 47.542085,
                        longitude: -121.836647,
                        latitudeDelta: 1.5,
                        longitudeDelta: 1.5,
                    },
                    currentLocation: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        error: null,
                    }
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    currentLocation: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        error: null,
                    }
                });
            }
        )
    }


    onRegionChange(region) {
        this.setState({ region });
    }

    markerClick(location) {
        Actions.locationShow({ location: location });
    }

    callOutClick(location){
        console.log(location);
        const lat = location.coordinate[0];
        const long = location.coordinate[1];
        const url = 'http://maps.apple.com/?daddr=';
        const combinedUrl = url + lat + ',' + long;
        return Linking.openURL(combinedUrl);
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
                            longitude: location.coordinate[1],}}
                        image={require('../img/green_mountains.gif')}
                        >
                        <MapView.Callout onPress={() => this.markerClick(location)}>
                                <Text>
                                    {location.tpName}
                                </Text>
                                <Text onPress={() => this.callOutClick(location)} style={styles.directionsCallout}>
                                    Directions
                                </Text>
                        </MapView.Callout>

                    </MapView.Marker>
                )}

                { typeof this.state.currentLocation.latitude === 'number' &&
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.currentLocation.latitude,
                            longitude: this.state.currentLocation.longitude
                        }}
                        title='You are here'
                        image={require('../img/cooper.jpg')}
                    />

                }

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
    directionsCallout: {
        paddingTop: 30,
        paddingBottom: 30,
        borderColor: '#ddd',
        borderBottomWidth: 1,
    }
};

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(MyMap);
