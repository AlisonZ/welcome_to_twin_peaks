import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';
import SelectionReducer from './SelectionReducer';
import MapReducer from './MapReducer';

export default combineReducers ({
    locations: LocationReducer,
    selectedLocationName: SelectionReducer,
    mapSites: MapReducer

});
