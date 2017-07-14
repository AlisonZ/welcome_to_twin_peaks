import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HelloWorld from './components/helloWorld';
import MyMap from './components/MyMap';
import LocationList from './components/LocationList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="helloWorld" component={HelloWorld} title="Hi There" />
            <Scene key="locations" component={LocationList} title="Locations" />
            <Scene key="map" component={MyMap} title="Mappy" initial />
        </Router>
    );
};

export default RouterComponent;
