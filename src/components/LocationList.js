import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View , Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class LocationList extends Component {

    onRowPress() {
        Actions.locationShow({ location: this.props.location });
    }

    render() {
        const { titleStyle } = styles;
        const { tpName } = this.props.location;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {tpName}
                        </Text>
                    </CardSection>
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

export default connect(mapStateToProps, actions)(LocationList);
