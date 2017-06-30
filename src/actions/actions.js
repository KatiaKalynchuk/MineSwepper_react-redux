import * as types from '../constants/actionTypes';

export const updateField = (field) => {
    return {type: types.UPDATE_FIELD, payload: field}
};

export const setBomb = (x, y) => {
    return {type: 'SET_BOMB', payload: {x, y}, isBomb: true}
};
export const openCell = (x,y) => {
  return {type: types.OPEN_CELL, x, y, payload: true}
}

