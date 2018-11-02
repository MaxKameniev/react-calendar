import React from 'react';
import { connect } from 'react-redux';
import Day from '../Day/Day';
import moment from 'moment';

const Grid = ({changeMonth}) => {

    function calcDays() {
        const start = moment(changeMonth.startOf('month')).startOf('week');
        const end = moment(changeMonth.endOf('month')).endOf('week');
        let days = Math.round(moment.duration(end - start).asDays());
        const matrix = [];
        for (let i = 0; i < days; i++) {
        let result = start.format("DD");
        matrix.push(result)
        result = start.add(1, "days").format("DD");
        }
        return matrix;
    }
    

    return (
        <div className='row'>
            {calcDays().map((el,i)=> <Day day={el} key={el + i}/>)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        changeMonth: state.changeMonth,
    }
  }

export default connect (mapStateToProps) (Grid);



