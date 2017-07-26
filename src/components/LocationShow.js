import React, { Component } from 'react';
import { View, Text, Image, Linking, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
var { width } = Dimensions.get('window');
import { CardSection, Card } from './common';
import { ShowContainer } from './styling/ShowContainer';
import { Actions } from 'react-native-router-flux';
import { ShowButton } from './ShowButton.js';
import { Footer } from './Footer.js';

class LocationShow extends Component {
    constructor(props){
        super(props);
        this.state = { uri: this.props.location.tpPhoto }
    }

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
    const { information, element } = styles;
    if (this.props.location.realName.length > 0) {
        console.log(this.props.location.realName);
        return (
            <CardSection>
                <Text style={element}>
                    Real Name:
                    <Text style={information}>
                        {this.props.location.realName}
                    </Text>
                </Text>
            </CardSection>
        );
    }
}


checkforAltImage() {
    const { image } = styles;
    const { tpPhoto, altPhoto } = this.props.location;
    if (altPhoto) {
        return (
            <TouchableOpacity onPress={() => {
                this.setState(
                    { uri: altPhoto }
                );

            }}>
                <Image
                    style={image}
                    source={{ uri: this.state.uri }}
                />
            </TouchableOpacity>
        );
    } else {
        return(
            <Image
            style={image}
            source={{ uri: this.state.uri }}
            />
        );
    }
}

    render() {
        const lat = this.props.location.coordinate[0];
        const long = this.props.location.coordinate[1];
        const url = 'http://maps.apple.com/?daddr=';
        const { tpName, info, tpPhoto, location } = this.props.location;
        const { title, background, colorBackground, image, showButtons, element, information, text } = styles;
        return (
            <ScrollView >
                <ShowContainer >
                    <CardSection style={{ alignSelf: 'center' }}>
                        <Text style={title}>
                            {tpName}
                        </Text>
                    </CardSection>
                    <View>
                        {this.checkforAltImage()}
                    </View>
                    <View>
                        <CardSection>
                            <Text style={element}>
                                Location:
                                <Text style={information}>
                                    {location}
                                </Text>
                            </Text>
                        </CardSection>
                        {this.checkForRealName()}
                    </View>
                    <Card>
                        <CardSection>
                            <Text style={text}>
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
            </ScrollView>
        );
    }
}

const styles = {
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: '#90560c',
        textShadowColor: '#58fe22',
        textShadowOffset: {width: 2, height: 2},
        fontFamily: 'HelveticaNeue-Medium'
    },
    background: {
        backgroundColor: 'transparent',
        resizeMode: 'stretch',
        alignSelf: 'center',
        flex: 1
    },
    image: {
        width: width,
        height: 250,
        borderWidth: 1,
        marginLeft: -5
    },
    showButtons: {
        paddingTop: 20
    },
    element: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Helvetica'

    },
    information: {
        fontWeight: '300',
        fontFamily: 'Helvetica'
    },
    text: {
        fontFamily: 'Helvetica'
    }

};

export default LocationShow;
