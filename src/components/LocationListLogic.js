import React, { Component } from 'react';
import { ListView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import LocationList from './LocationList';
import { ListContainer } from './styling/ListContainer';
import { Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
//
class LocationListLogic extends Component {
    componentWillMount() {
        const ds =  new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.locations);
    }

    clickMapButton() {
        Actions.map();
    }

    renderRow(location) {
        return (
                <View style={{paddingTop: 15}}>
                    <LocationList location={location} />
                </View>
        );
    }

    render() {
        return(
            <ListContainer>
                <ListView
                    dataSource ={this.dataSource}
                    renderRow={this.renderRow}
                />
            </ListContainer>
        );
    }
}


const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(LocationListLogic);
