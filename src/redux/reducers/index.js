import { combineReducers } from 'redux'; 
import showCalendar from './showCalendar';
import changeMonth from './changeMonth';
import getDays from './getDays';


const rootReducer = combineReducers({
    showCalendar,
    changeMonth,
    getDays
});

export default rootReducer;