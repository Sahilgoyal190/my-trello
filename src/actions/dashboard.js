import * as Type from '../constant';
const lists = require('../component/container/dashboard/mock.data.json')


export const getDashboardData = (board_id) => {
    return (dispatch) => {
        dispatch({
            type: Type.UPDATE_DASHBOARD_DATA,
            lists: lists
        })
    }
}