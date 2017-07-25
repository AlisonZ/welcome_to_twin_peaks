import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';


class LocationOnMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 'null',
                longitude: 'null',
                latitudeDelta: 'null',
                longitudeDelta: 'null',
            },
            currentLocation: {
                latitude: 'null',
                longitude: 'null'
            },
            selectedLocation: {
                latitude: 'null',
                longitude: 'null'
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    componentDidMount() {
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
render(){
    const { locations } = this.props;
    return(
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
                image={(location.tpName === this.props.location.tpName) ? require('../img/pie.jpeg') : require('../img/green_mountains.gif')}
                >
                <MapView.Callout onPress={() => this.markerClick(location)}>
                        <Text>
                        {location.tpName}
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
    }
};

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(LocationOnMap);
