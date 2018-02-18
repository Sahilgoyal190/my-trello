import * as Type from '../constant';
import axios from 'axios';
import { request } from 'graphql-request'

export const getDashboardData = (board_id) => {
    return (dispatch) => {

        const query = `{
            boards {
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
        request('http://localhost:3000/graphql',query).then((resp)=>{
            const lists = resp.boards;
            dispatch({
                type: Type.UPDATE_DASHBOARD_DATA,
                lists: lists
            })
        })
        
    }
}