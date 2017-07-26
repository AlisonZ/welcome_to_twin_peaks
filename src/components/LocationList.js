import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
// import { ListContainer } from './styling/ListContainer'
import * as actions from '../actions';
import { LocationCard } from './LocationCard.js';


class LocationList extends Component {

    onRowPress() {
        console.log('i made it here');
        Actions.locationShow({ location: this.props.location });
    }

    render() {
        const { titleStyle, listBackground } = styles;
        const { tpName } = this.props.location;

        return (
            // <View style={listBackground}>
                <LocationCard >
                <TouchableWithoutFeedback onPress={this.onRowPress.bind(this) }>
                        <Text style={titleStyle}>
                            {tpName}
                        </Text>
                    </TouchableWithoutFeedback>
                </LocationCard>
            // </View>
        );
    }
}

const styles = {
    titleStyle: {
        alignSelf: 'center',
        fontSize: 30,
        textAlign: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 2, height: 2},
    },
    listBackground: {
        backgroundColor: 'white'
    },
    // container: {
    //     borderWidth: 2,
    //     // borderColor: 'red',
    //     alignSelf: 'center'
    // }

};

const mapStateToProps = state => {
    return { selectedLocationName: state.selectedLocationName };
};

export default connect(mapStateToProps, actions)(LocationList);
