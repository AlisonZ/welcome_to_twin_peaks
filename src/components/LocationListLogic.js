import React, { Component } from 'react';
import { ListView, View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import LocationList from './LocationList';
import { ListContainer } from './styling/ListContainer';
//
class LocationListLogic extends Component {
    componentWillMount() {
        const ds =  new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.locations);
    }


    renderRow(location) {
        return (
                <View>
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
