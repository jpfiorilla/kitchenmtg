import * as types from './action-types';

export const addPlayer = (numplayers) => {
  return {
    type: types.ADD_PLAYER,
    numplayers
  };
}
