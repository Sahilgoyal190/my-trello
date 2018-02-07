import initialState from './initialState';
import * as Type from '../constant';

export const board = (state = initialState.board, action) => {
    switch (action.type) {
        case Type.UPDATE_BOARD_DATA:
            return { ...state, lists: action.lists }
        case Type.UPDATE_CURRENT_CARD:
            return { ...state, currentTask: action.currentTask, index: action.index }
        case Type.UPDATE_CURRENT_LIST_NAME:
            return { ...state, currentListName: action.name }
        case Type.UPDATE_CURRENT_TASK_TYPE:
            return { ...state, currentTaskType: action.name }
        case Type.ADD_NEW_TASK:
            const newState = { ...state };
            newState.lists[action.index] = action.list;
            return newState;
        default:
            return state
    }
}