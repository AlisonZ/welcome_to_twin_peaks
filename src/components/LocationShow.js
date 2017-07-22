import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, Button } from './common';
import { ShowContainer } from './styling/ShowContainer';
import { Actions } from 'react-native-router-flux';

class LocationShow extends Component {

getLocation(proxy) {
    const { location } = this.props;
    // console.log('i made it to get proxy', proxy);
    // console.log('this is the props.location i got', location);
    Actions.locationOnMap(location);
}

    render() {
        console.log(this.props);
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
                    <CardSection>
                        <Button onPress={this.getLocation.bind(this)}>
                            Show on Map
                        </Button>
                    </CardSection>
                </ShowContainer>
            </View>
        );
    }
}

export default LocationShow;
