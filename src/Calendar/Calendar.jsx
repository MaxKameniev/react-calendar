import React, { Component } from 'react';
import './Calendar.css';
import { connect } from 'react-redux';
import WeekDays from '../WeekDays/WeekDays';
import Grid from '../Grid/Grid';
import { changeMonthNext, changeMonthPrev } from '../redux/actions/changeMonthAction';

const Calendar = ({changeMonth, changeMonthPrev, changeMonthNext}) => {




        return (
            <div className='calendar'>
                <header className="header">
                <div className="month-display row">
                <span className='arrow' onClick= {changeMonthPrev}>&#8656;</span>
                <span className="month-label">{`${changeMonth.format('MMMM')} ${changeMonth.year()}`}</span>
                <span className='arrow' onClick={changeMonthNext}>&#8658;</span>
                </div>
                <WeekDays/>
                </header>
                <Grid/>
            </div>
        );
    }

    function mapStateToProps (state) {
        return {
            changeMonth: state.changeMonth
        }
      }
      
      function mapDispatchToProps (dispatch) {
      return {
        changeMonthNext: function() {
            dispatch(changeMonthNext())
          },

        changeMonthPrev: function() {
            dispatch(changeMonthPrev())
        },
      }
      }




export default connect (mapStateToProps,mapDispatchToProps) (Calendar);