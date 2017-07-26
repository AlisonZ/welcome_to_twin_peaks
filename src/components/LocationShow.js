import React, { Component } from 'react';
import { View, Text, Image, Linking, Dimensions } from 'react-native';
var { width } = Dimensions.get('window');
import { CardSection, Card } from './common';
import { ShowContainer } from './styling/ShowContainer';
import { Actions } from 'react-native-router-flux';
import { ShowButton } from './ShowButton.js';
import { Footer } from './Footer.js';

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
        const { tpName, info, tpPhoto, location } = this.props.location;
        const { title, background, colorBackground, image, showButtons } = styles;
        return (
            <View style={background}>
                <ShowContainer >
                    <CardSection style={{ alignSelf: 'center' }}>
                        <Text style={title}>
                            {tpName}
                        </Text>
                    </CardSection>
                    <View>
                        <Image
                            style={image}
                            source={{ uri: tpPhoto }}
                        />
                    </View>
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
                    <CardSection style={showButtons}>
                        <ShowButton onPress={this.clickButton.bind(this, lat, long, url)}>
                                <Text style={colorBackground}>Get Directions</Text>
                        </ShowButton>

                        <ShowButton onPress={this.showOnMap.bind(this)}>
                                Show on Map
                        </ShowButton>
                        <ShowButton onPress={this.goHome.bind()}>
                                Home
                        </ShowButton>
                    </CardSection>
                    <Footer>
                        Hello
                    </Footer>
                </ShowContainer>
            </View>
        );
    }
}

const styles = {
    title: {
        alignSelf: 'center',
        fontSize: 30,
        textAlign: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 2, height: 2},
    },
    background: {
        backgroundColor: 'transparent',
        resizeMode: 'stretch',
        alignSelf: 'center',
        flex: 1
    },
    image: {
        width: width,
        height: 200,
        borderWidth: 1,
        marginLeft: -5

    },
    showButtons: {
        paddingTop: 20
    },
    background: {
        // backgroundColor: '#63070e'
    }
};

export default LocationShow;
