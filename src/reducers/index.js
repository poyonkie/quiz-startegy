// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from './deviceReducer';

// App Reducers
import gallery from '../App/sections/Gallery/reducer';

const rootReducer = combineReducers({
  device,
  gallery
});

export default rootReducer;
