import {UPDATE_FIELD, OPEN_CELL, STATUS_LOSE, STATUS_WIN, SET_FLAG, COUNT, DIFFICULTY} from '../constants/actionTypes';

const initialState = {
    width: 5, //ширина поля
    height: 5, //высота поля
    bombCount: 5, //количество мин
    openCount: 0,//количество открытых
    field: [], //поле
    isLose: false,
    isWin: false
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
        case STATUS_LOSE:
            return Object.assign({}, state, {
                isLose: true
            });
        case STATUS_WIN:
            return Object.assign({}, state, {
                isWin: true
            });
        case SET_FLAG:
            if (!state.field[action.x][action.y].isOpen) {
                let newState = Object.assign({}, state);
                newState.field[action.x][action.y].isFlag = !newState.field[action.x][action.y].isFlag;
                return newState;
            }
        case COUNT:
            newState = Object.assign({}, state);
            newState.openCount += action.payload;
            return newState;
        case DIFFICULTY:
            return Object.assign({}, state, {
                width: action.width,
                height: action.height,
                bombCount: action.bombCount
        });
        default:
            return state;
    }
}
