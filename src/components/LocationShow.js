import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card } from './common';

class LocationShow extends Component {

    render() {
        const { tpName, info, tpPhoto } = this.props.location;
        return (
            <View>
                <Card>
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
                </Card>
            </View>
        );
    }
}

export default LocationShow;
