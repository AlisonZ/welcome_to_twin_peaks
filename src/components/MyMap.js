import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
// import { locations } from './reducers/LocationList.json';

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 47.542085,
                longitude: -121.836647,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            currentLocation: {
                latitude: 'null',
                longitude: 'null'
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    componentDidMount() {
     console.log('component did mount');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
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

    checkValidLocation() {
        if (this.state.currentLocation.latitude !== 'null'
            && this.state.currentLocation.longitude !== 'null'
            && typeof this.state.currentLocation.latitude === 'number'
            && typeof this.state.currentLocation.longitude === 'number') {
                return true;
        }
        return false;
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
                        onPress={() => this.markerClick(location)}
                        title={location.tpName}
                    />
                )}

                { typeof this.state.currentLocation.latitude === 'number' &&
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.currentLocation.latitude,
                            longitude: this.state.currentLocation.longitude
                        }}
                        title='mypin'
                        image={require('../img/symbol.png')}
                        style={styles.pinStyle}
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

    pinStyle: {
        width: 5,
        height: 5,
        backgroundColor: 'red'
    }

};

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(MyMap);
