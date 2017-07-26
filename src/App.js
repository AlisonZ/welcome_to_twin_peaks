import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import Router from './Router';
// import LocationList from './components/LocationList';
import MyMap from './components/MyMap'

class App extends Component {
    componentWillMount() {
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Router/>
                </View>
            </Provider>
        );
    }
}

export default App;
