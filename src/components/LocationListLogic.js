import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import LocationList from './LocationList';
// // import { View, Text } from 'react-native';
//
class LocationListLogic extends Component {
    componentWillMount() {
        const ds =  new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.locations);
    }

    renderRow(location) {
        return <LocationList location={location} />;
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
