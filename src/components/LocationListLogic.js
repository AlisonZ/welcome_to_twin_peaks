import React, { Component } from 'react';
import { ListView, View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import LocationList from './LocationList';
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
            // <TouchableWithoutFeedback>
                <View>
                    <LocationList location={location} />
                </View>
            // </TouchableWithoutFeedback>
        );
    }

    render() {
        return(
            <ListView
                dataSource ={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(LocationListLogic);
