import {UPDATE_FIELD, OPEN_CELL} from '../constants/actionTypes';

const initialState = {
    width: 10, //ширина поля
    height: 10, //высота поля
    bombCount: 10, //количество мин
    openCount: 0,//количество открытых
    field: [] //поле
};

export default function reducerOptions(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return Object.assign({}, state, {
                field: action.payload
            });
        case OPEN_CELL:
            let newState = Object.assign({}, state);
            newState.field[action.x][action.y].isOpen = true;
            return newState;
        default:
            return state;
    }
}
