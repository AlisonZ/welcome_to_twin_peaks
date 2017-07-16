import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection } from './common';

class LocationShow extends Component {

    render() {
        const { tpName, info, tpPhoto } = this.props.location;
        return (
            <View>
                <CardSection>
                    <Text>
                        {tpName}
                    </Text>
                    <Image
                        source={{uri:tpPhoto}}
                    />
                    <Text>
                        {info}
                    </Text>

                </CardSection>

            </View>
        );
    }
}

export default LocationShow;
