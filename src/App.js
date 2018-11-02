import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Calendar from './Calendar/Calendar';
import { showCalendarStatus } from '../src/redux/actions/showCalendarAction';

const App = ({showCalendar, showCalendarStatus}) => {

console.log(showCalendarStatus);


    return (
      <div className="App">
      <button onClick={showCalendarStatus} className="button">Show Calendar</button>
        {showCalendar ? <Calendar/> : null}
      </div>
    );
}


function mapStateToProps (state) {
  return {
      showCalendar: state.showCalendar
  }
}

function mapDispatchToProps (dispatch) {
return {
  showCalendarStatus: function() {
        dispatch(showCalendarStatus())
    },
}
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
