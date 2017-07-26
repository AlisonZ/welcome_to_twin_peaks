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
        const { titleStyle } = styles;
        const { tpName } = this.props.location;

        return (
                <LocationCard >
                <TouchableWithoutFeedback onPress={this.onRowPress.bind(this) }>
                    <View>
                        <Text style={titleStyle}>
                            {tpName}
                        </Text>
                    </View>
                    </TouchableWithoutFeedback>
                </LocationCard>
        );
    }
}

const styles = {
    titleStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 1, height: 2},
        paddingTop: 15,
        paddingBottom: 20,
        fontFamily: 'HelveticaNeue-Medium'


    },
    listBackground: {
        backgroundColor: 'white'
    },
};

const mapStateToProps = state => {
    return { selectedLocationName: state.selectedLocationName };
};

export default connect(mapStateToProps, actions)(LocationList);
