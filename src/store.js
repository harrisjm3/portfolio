import { createStore } from 'redux';

import AllReducers from './reducers/Index';
import Defaults from './defaultStates/Defaults';


const store = createStore(AllReducers, Defaults);

export default store;
