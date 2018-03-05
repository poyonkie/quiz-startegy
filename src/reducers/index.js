// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from './deviceReducer';

// App Reducers
import products from '../App/sections/Products/actions/reducer';

const rootReducer = combineReducers({
  device,
  products
});

export default rootReducer;
