import people from './people-reducer.js';
import numplayers from './numplayers.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  numplayers
});

export default rootReducer;
