
import * as Type from '../constant';

export const updateModalStatus = (status) => dispatch => dispatch({type: Type.UPDATE_MODAL_STATUS, status})
export const updateHeaderText = (text) => dispatch => dispatch({type: Type.UPDATE_HEADER_NAME, text})
