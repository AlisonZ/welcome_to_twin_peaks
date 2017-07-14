import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class LocationSite extends Component {
    render(){
        const { titleStyle } = styles;
        console.log(this.   props);
        return (
            <CardSection>
                <Text style={titleStyle}>
                {this.props.location.tpName}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, actions)(LocationSite);
