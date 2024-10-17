import React from 'react';
import { Link } from 'react-router-dom';
import Day from './Day';
import { useSelector } from 'react-redux';
import './Week.css'; // Importing custom CSS for Week component

const Week = () => {
   
    let habitsState= useSelector((state)=>state.habits);
    let habit = {};
    
    for(let i=0;i<habitsState.length;i++){
        if(habitsState[i].id===Number(localStorage.getItem('id'))){
            habit=habitsState[i];
        }
    }

    return (
    <div className='week-container'>
        <h1 className="habit-title">{habit.name}</h1>
        <div className="days-grid">
            {habit.weekLog.map((day,index) => <Day day={day} key={index} />)}
        </div>
        <div className="back-button-container">
            <Link to="/" className="btn btn-back" style={{fontWeight:"bold"}}>Back</Link>
        </div>
    </div>
  )
}

export default Week;
