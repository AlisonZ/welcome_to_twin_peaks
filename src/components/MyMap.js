import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableWithoutFeedback, Linking, Image } from 'react-native';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';


const marker = require('../img/owl_room.jpg');
const selectedMarker = require('../img/symbol.png');

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 47.542085,
                longitude: -121.836647,
                latitudeDelta: 1.5,
                longitudeDelta: 1.5,
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
        console.log('call out click happened');
        const lat = location.coordinate[0];
        const long = location.coordinate[1];
        const url = 'http://maps.apple.com/?daddr=';
        const combinedUrl = url + lat + ',' + long;
        return Linking.openURL(combinedUrl);
    }


    render() {
        const { locations } = this.props;
        const { container, nameCallout, directionsCallout } = styles;

        return (
            <View style={container}>
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
                        <MapView.Callout >
                                <Text style={nameCallout} onPress={() => this.markerClick(location)}>
                                    {location.tpName}
                                </Text>
                                <TouchableWithoutFeedback onPress={() => this.callOutClick(location)}>
                                    <Image source={require('../img/get_directions.png')} style={directionsCallout} />
                                </TouchableWithoutFeedback>
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
        padding: 10,
        alignSelf: 'center',
    },
    nameCallout: {
        fontSize: 16,
        paddingBottom: 16,
        fontWeight: '900'
    }
};

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(MyMap);
