import initialState from './initialState';
import * as Type from '../constant';

export const dashboard   = (state = initialState.dashboard, action) => {
    switch (action.type) {
        case Type.UPDATE_DASHBOARD_DATA:
            return { ...state, data: action.lists }
        default:
            return state
    }
}