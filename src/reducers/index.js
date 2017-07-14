import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers ({
    locations: LocationReducer,
    selectedLocationName: SelectionReducer

});
