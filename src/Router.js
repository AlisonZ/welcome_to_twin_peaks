import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HelloWorld from './components/helloWorld';
import MyMap from './components/MyMap';
import LocationList from './components/LocationList';
import LocationSite from './components/LocationSite';
const RouterComponent = () => {
    return (
        <Router>
            <Scene
                onRight={() => Actions.locationsList()}
                rightTitle='Locations'
                key="map"
                component={MyMap}
                title="Mappy"
            />
            <Scene key="helloWorld" component={HelloWorld} title="Hi There" />
            <Scene key="locationsList" component={LocationList} title="Locations" />
        </Router>
    );
};

export default RouterComponent;
