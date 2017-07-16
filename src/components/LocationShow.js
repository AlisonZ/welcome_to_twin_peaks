import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card } from './common';
import { ShowContainer } from './styling/ShowContainer';

class LocationShow extends Component {

    render() {
        const { tpName, info, tpPhoto } = this.props.location;
        return (
            <View>
                <ShowContainer>
                    <CardSection>
                        <Text>
                            {tpName}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{ uri: tpPhoto }}
                        />
                    </CardSection>
                    <CardSection>
                        <Text>
                            {info}
                        </Text>
                    </CardSection>
                </ShowContainer>
            </View>
        );
    }
}

export default LocationShow;
