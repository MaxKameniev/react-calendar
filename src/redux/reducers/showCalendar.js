export default function showCalendar(state = false, action) {
    switch (action.type) {
        case 'SHOW':
        return !state;
    
        default:
        return state;
    }
}