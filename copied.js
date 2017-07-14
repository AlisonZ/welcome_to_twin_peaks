import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HelloWorld from './components/helloWorld';
// import MyMap from './components/MyMap';
// import LocationList from './components/LocationList';
// import { locations } from './reducers/LocationList.json';

const RouterComponent = () => {
    return (
        <Router>
        // <Scene
        // // onRight={() => Actions.locationList()}
        // rightTitle='Locations'
        // key='map'
        // component={MyMap}
        // title="Welcome to Twin Peaks"
        //  />
        // <Scene key="locationList" component={LocationList} title="Locations" />
            <Scene key="helloWorld" component={HelloWorld} title="Hello There" />
        </Router>
    );
};

export default RouterComponent;
