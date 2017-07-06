//Index.ios.js

//import a library to create components
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import MyMap from './src/components/MyMap';
import Header from './src/components/Header';

//create a component
const App = () => (
    <View style={{ flex: 1 }}>
    <Header headerText={ 'Twin Peaks'} />
    <MyMap />
    </View>
);


//render component to the device
AppRegistry.registerComponent('welcome_to_twin_peaks', () => App);
