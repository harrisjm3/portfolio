import { combineReducers } from 'redux';

import generalReducer from './GeneralReducer';

const AllReducers = combineReducers({
  general: generalReducer,
});

export default AllReducers;
