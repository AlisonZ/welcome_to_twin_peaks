import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { ListContainer } from './styling/ListContainer'
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
                    <Card>
                        <CardSection>
                            <Text style={titleStyle}>
                                {tpName}
                            </Text>
                        </CardSection>
                    </Card>
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
