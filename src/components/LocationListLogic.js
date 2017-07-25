import React, { Component } from 'react';
import { ListView, View,  } from 'react-native';
import { connect } from 'react-redux';
import LocationList from './LocationList';
import { ListContainer } from './styling/ListContainer';
import { Button } from './common';
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
                <View>
                    <LocationList location={location} />
                </View>
        );
    }

    render() {
        const { mapButtonStyle } = styles;
        return(
            <ListContainer>
                <Button style={mapButtonStyle} onPress={() => this.clickMapButton()}>
                    Map
                </Button>
                <ListView
                    dataSource ={this.dataSource}
                    renderRow={this.renderRow}
                />
            </ListContainer>
        );
    }
}

const styles= {
    mapButtonStyle: {
        height: 10
    }
}

const mapStateToProps = state => {
    return { locations: state.locations }
};

export default connect(mapStateToProps)(LocationListLogic);
