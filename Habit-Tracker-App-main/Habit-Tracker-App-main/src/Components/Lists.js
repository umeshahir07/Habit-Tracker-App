import React from 'react';
import Home from './Home';
import './Lists.css'; // Importing custom CSS for Lists component

const Lists = ({ habits }) => {
  return (
    <div className='lists-container'>
      {habits.length > 0 ? (
        habits.map((habit) => <Home habit={habit} key={habit.id} />)
      ) : (
        <p className="empty-message">No habits to display</p>
      )}
    </div>
  );
}

export default Lists;
