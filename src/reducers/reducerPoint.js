import {POINT} from '../constants/actionTypes';

const initialState = {
    isMine: false,
    mineAround: 0, //мин рядом
    isOpen: false, //открыта ли
    coordinates: {x: '', y: ''},
    isFlag: false
};

export default function reducerPointer(state = initialState, action) {
  // let newState;
  switch (action.type) {
    // case POINT:
    //   newState = Object.assign({}, state);
    //   newState.field[action.x][action.y] = {name: 1};
    //   console.log(newState);
    //   return newState;

    default:
      return state;
  }
}
