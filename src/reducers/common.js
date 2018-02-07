import initialState from './initialState';
import * as Type from '../constant';

export const common = (state = initialState.common, action) => {
    switch (action.type) {
        case Type.UPDATE_MODAL_STATUS:
            return { ...state, modalOpen: action.status }
        default:
            return state
    }
}