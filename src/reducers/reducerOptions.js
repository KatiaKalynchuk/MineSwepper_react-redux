import {UPDATE_FIELD} from '../constants/actionTypes';

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

        case 'SET_BOMB':
            return Object.assign({}, state, {
                field: state.field[action.x][action.y].isBomb = action.isBomb
            });

        default:
            return state;
    }
}
