import * as types from '../actions/action-types';

export default (state = 2, action) => {
  switch (action.type) {
    case types.ADD_PLAYER:
      return state+1;
    default:
      return state;
  }
};
