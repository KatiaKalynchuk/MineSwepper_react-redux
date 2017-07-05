import {combineReducers} from 'redux';
import reducerOptions from './reducerOptions';
import reducerPoint from './reducerPoint';

const rootReducer = combineReducers({
    reducerOptions,
    reducerPoint
});

export default rootReducer;
