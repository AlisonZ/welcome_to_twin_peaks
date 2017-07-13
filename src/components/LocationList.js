import React, { Component } from 'react';
import { connect } from 'react-redux';
// // import { View, Text } from 'react-native';
//
class LocationList extends Component {
    render() {
        return;
    }
}

const mapStateToProps = state => {
    console.log(state);
};

export default connect(mapStateToProps)(LocationList);
