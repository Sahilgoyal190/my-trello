import initialState from './initialState';
import * as Type from '../constant';

export const common = (state = initialState.common, action) => {
    switch (action.type) {
        case Type.UPDATE_MODAL_STATUS:
            return { ...state, modalOpen: action.status }
        case Type.UPDATE_HEADER_NAME:
            return { ...state, headerText: action.text }
        default:
            return state
    }
}