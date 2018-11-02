import React from 'react';
import './WeekDays.css';
import { connect } from 'react-redux';

const WeekDays = ({getDays}) => {

    return (
        <div className='row day-names'>
        {getDays.map(el => <span className="day">{el}</span>)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        getDays: state.getDays
    }
  }

  
  export default connect (mapStateToProps) (WeekDays);