import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class LocationSite extends Component {
    renderDescription() {
        const { location, selectedLocationName } = this.props;


        if (location.tpName === selectedLocationName)
        return <Text>{location.coordinate}</Text>
    }



    render(){
        const { titleStyle } = styles;
        const { tpName } = this.props.location;


        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLocation(tpName)}>
                <View>
                    <CardSection>
                    <Text style={titleStyle}>
                    {tpName}
                    </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => {
    return { selectedLocationName: state.selectedLocationName };
};

export default connect(mapStateToProps, actions)(LocationSite);
