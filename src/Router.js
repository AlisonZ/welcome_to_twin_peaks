import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MyMap from './components/MyMap';
import LocationList from './components/LocationList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65}}>
            <Scene key='map' component={MyMap} title="Welcome to Twin Peaks" initial/>
            <Scene key="locationList" component={LocationList} title="Locations" />
        </Router>
    );
};

export default RouterComponent;
