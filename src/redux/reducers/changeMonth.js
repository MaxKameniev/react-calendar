import moment from 'moment';

export default function changeMonth (state = moment(), action) {
    switch (action.type) {
        case 'NEXT':
        return state.clone().add(1, 'M')
        case 'PREV':
        return state.clone().subtract(1, 'M')
        default:
        return state;
    }
}