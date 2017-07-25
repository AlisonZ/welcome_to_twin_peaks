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
