import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class LocationSite extends Component {
    render(){
        return (
            <CardSection>
                <Text>{this.props.location.tpName}</Text>
            </CardSection>
        );
    }
}

export default LocationSite;
