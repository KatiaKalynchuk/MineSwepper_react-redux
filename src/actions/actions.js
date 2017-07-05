import * as types from '../constants/actionTypes';

export const updateField = (field) => {
    return {type: types.UPDATE_FIELD, payload: field};
};

export const setBomb = (x, y) => {
    return {type: 'SET_BOMB', payload: {x, y}, isBomb: true};
};

export const openCell = (x, y) => {
    return {type: types.OPEN_CELL, x, y, payload: true};
};

export const setFlag = (x, y) => {
    return {type: types.SET_FLAG, x, y};
};

export const countInc = () => {
  return {type: types.COUNT, payload: 1};
};

export const setDifficulty = (height, width, bombCount) => {
  return {type: types.DIFFICULTY, height, width, bombCount};
};

export const generatePoint = (x, y, point) => {
  return {type: types.POINT, x, y, point};
};

export const win = () => {
  return {type: types.STATUS_WIN};
};

export const lose = () => {
  return {type: types.STATUS_LOSE};
};
