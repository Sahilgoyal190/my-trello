
import * as Type from '../constant';
import axios from 'axios';
import { request } from 'graphql-request';
const lists = require('../component/container/board/mock.data.json')

export const getBoardData = (board_id) => {
    return (dispatch) => {

        const query = `{
            board(id: ${board_id}) {
                id,
                project_name,
                backlog,
                doing,
                done,
                lists {
                  description,
                  name,
                  taskList {
                    name,
                    description,
                    status,
                    dueDate
                  }
                }
              } 
          }`

          request('http://localhost:3000/graphql',query).then(({board}) => {
            dispatch({
                type: Type.UPDATE_BOARD_DATA,
                lists: board.lists,
                board_id: board_id,
            })
            dispatch({
                type: Type.UPDATE_HEADER_NAME,
                text: board.project_name,
            })
        })
    }
}
export const updateCurrentTask = (currentTask, index) => dispatch => dispatch({
    type: Type.UPDATE_CURRENT_CARD, currentTask,
    index
})
export const currentListName = name => dispatch => dispatch({ type: Type.UPDATE_CURRENT_LIST_NAME, name })
export const currentTaskType = name => dispatch => dispatch({ type: Type.UPDATE_CURRENT_TASK_TYPE, name })


export const updateTaskEdit = task => (dispatch, getState) => {
    if (getState().board.currentTaskType == "add") {
        return new Promise(resolve => {
            const lists = getState().board.lists;
            let index = null;
            const currentList = lists.find((l, ind) => {
                if (l.name === getState().board.currentListName) {
                    index = ind;
                    return l;
                }
            })
            currentList.taskList.push(task);

            const newboardState = { ...getState().board };
            newboardState.lists[index] = currentList;
            const board_id = getState().board.board_id;
            axios.post(`http://localhost:3000/boards/${board_id}`, { lists: newboardState.lists }).then((resp) => {
                dispatch({
                    type: Type.UPDATE_BOARD_DATA,
                    lists: newboardState.lists,
                })
                resolve()
            })

        })
    } else if (getState().board.currentTaskType == "edit") {
        return new Promise((resolve, reject) => {
            const olderTask = getState().board.currentTask;
            const lists = getState().board.lists;
            const currentIndex = getState().board.index
            let newlist = []
            if (olderTask.status === task.status) {
                newlist = lists.map(ls => {
                    if (ls.name === task.status) {
                        ls.taskList[currentIndex] = task;
                    }
                    return ls;
                });
            } else {
                newlist = lists.map(ls => {
                    if (ls.name === task.status) {
                        ls.taskList.push(task);
                    }

                    if (ls.name === olderTask.status) {
                        ls.taskList.splice(currentIndex, 1);
                    }
                    return ls;
                });

            }

            const board_id = getState().board.board_id;
            axios.post(`http://localhost:3000/boards/${board_id}`, { lists: newlist }).then((resp) => {
                dispatch({
                    type: Type.UPDATE_BOARD_DATA,
                    lists: newlist
                })
                resolve()
            })
        })
    }
}
