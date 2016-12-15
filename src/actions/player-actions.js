import * as types from './action-types';

export const addPlayer = (player) => {
  return {
    type: types.ADD_PLAYER,
    player
  };
}
