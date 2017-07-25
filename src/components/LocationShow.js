import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { CardSection, Card, Button } from './common';
import { ShowContainer } from './styling/ShowContainer';
import { Actions } from 'react-native-router-flux';

class LocationShow extends Component {
clickButton(lat, long, url){
    const combinedUrl = url + lat + ',' + long;
    return Linking.openURL(combinedUrl);
}

showOnMap(){
    Actions.locationOnMap({ location: this.props.location});
}

getLocation(proxy) {
    const { location } = this.props;
    Actions.helloWorld();
}

goHome() {
    Actions.welcomePage();
}

    render() {
        const lat = this.props.location.coordinate[0];
        const long = this.props.location.coordinate[1];
        const url = 'http://maps.apple.com/?daddr=';
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
                    <Button onPress={this.clickButton.bind(this, lat, long, url)}>
                            Get Directions
                    </Button>
                    <Button onPress={this.showOnMap.bind(this)}>
                            Show on Map
                    </Button>
                    <Button onPress={this.goHome.bind()}>
                            Home
                    </Button>
                    </CardSection>
                </ShowContainer>
            </View>
        );
    }
}

export default LocationShow;
