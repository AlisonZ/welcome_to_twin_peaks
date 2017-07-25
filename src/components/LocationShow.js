import React, { Component } from 'react';
import { View, Text, Image, Linking, ImageBackground } from 'react-native';
import { CardSection, Card } from './common';
import { ShowContainer } from './styling/ShowContainer';
import { Actions } from 'react-native-router-flux';
import { ShowButton } from './ShowButton.js';

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
checkForRealName() {
    if (this.props.location.realName.length > 0) {
        console.log(this.props.location.realName);
        return (
            <CardSection>
                <Text>
                    Real Name: {this.props.location.realName}
                </Text>
            </CardSection>
        );
    }
}

    render() {
        const lat = this.props.location.coordinate[0];
        const long = this.props.location.coordinate[1];
        const url = 'http://maps.apple.com/?daddr=';
        const { tpName, info, tpPhoto, location, realName } = this.props.location;
        const { title, buttonShowStyle } = styles;
        return (
            <View>
                <ShowContainer >
                    <CardSection>
                        <Text style={title}>
                            {tpName}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Image
                            style={{width: 150, height: 150}}
                            source={{ uri: tpPhoto }}
                        />
                    </CardSection>
                    <Card>
                        <CardSection>
                            <Text>
                                Location: {location}
                            </Text>
                        </CardSection>
                        {this.checkForRealName()}
                    </Card>
                    <Card>
                        <CardSection>
                            <Text>
                                {info}
                            </Text>
                        </CardSection>
                    </Card>
                    <CardSection >
                    <ShowButton onPress={this.clickButton.bind(this, lat, long, url)}>
                            Get Directions
                    </ShowButton>
                    <ShowButton onPress={this.showOnMap.bind(this)}>
                            Show on Map
                    </ShowButton>
                    <ShowButton onPress={this.goHome.bind()}>
                            Home
                    </ShowButton>
                    </CardSection>
                </ShowContainer>
            </View>
        );
    }
}

const styles = {
    title: {
        fontSize: 30
    }
};

export default LocationShow;
