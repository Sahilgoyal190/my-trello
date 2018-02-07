import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {board} from './board';
import {dashboard} from './dashboard';
import {common} from './common';

const rootReducer = combineReducers({
    routing: routerReducer,
    board: board,
    common: common,
    dashboard: dashboard,
});

export default rootReducer;
