import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MyMap from './components/MyMap';
import LocationListLogic from './components/LocationListLogic';
import LocationList from './components/LocationList';
import LocationShow from './components/LocationShow';
import WelcomePage from './components/WelcomePage';
import UserLocation from './components/UserLocation';
import CurtainGif from './components/CurtainGif';

const RouterComponent = () => {
    return (
        <Router>
        <Scene key="welcomePage" component={WelcomePage} title="Welcome to Twin Peaks" initial />
        <Scene key="curtainGif" component={CurtainGif} title="Hellooo-ooo-ooo"  />
            <Scene
                onRight={() => Actions.locationListLogic()}
                rightTitle='Locations'
                key="map"
                component={MyMap}
                title="Mappy"
            />
            <Scene
            key="locationListLogic"
            component={LocationListLogic}
            title="Locations"
            />
            <Scene key="userLocation" component={UserLocation} title="User Location" />
            <Scene key="locationShow" component={LocationShow} title="Site" />
        </Router>
    );
};

export default RouterComponent;
