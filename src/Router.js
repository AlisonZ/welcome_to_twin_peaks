import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HelloWorld from './components/helloWorld';
import MyMap from './components/MyMap';
import LocationListLogic from './components/LocationListLogic';
import LocationList from './components/LocationList';
import LocationShow from './components/LocationShow';
const RouterComponent = () => {
    return (
        <Router>
            <Scene
                onRight={() => Actions.locationListLogic()}
                rightTitle='Locations'
                key="map"
                component={MyMap}
                title="Mappy"
            />
            <Scene
            onRight={() => Actions.locationShow()}
            rightTitle="Show Me"
            key="locationListLogic"
            component={LocationListLogic}
            title="Locations"
            />
            <Scene key="locationShow" component={LocationShow} title="Site" />
            <Scene key="helloWorld" component={HelloWorld} title="Hi There" />
        </Router>
    );
};

export default RouterComponent;
