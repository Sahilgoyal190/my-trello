
import moment from 'moment';

export const dateTime = (time) =>{
    const date = moment(time).format('YYYY-MM-DD')
    return date;
}