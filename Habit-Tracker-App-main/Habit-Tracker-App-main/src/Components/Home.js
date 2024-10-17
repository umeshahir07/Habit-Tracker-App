import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { deleteHabit } from '../Redux/reducers/HabitReducer';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'; // Importing custom CSS

const Home = ({ habit }) => {
    const today = new Date();
    const todayDay = today.getDay();
    let count = 0;

    for (let i = 0; i < habit.weekLog.length; i++) {
        if (habit.weekLog[i].isDone === true) {
            count++;
        }
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteHabit(habit.id));
        toast.success('Habit deleted successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const setId = () => {
        localStorage.setItem("id", habit.id);
        navigate("/week-view");
    }

    return (
        <div className='habit-container'>
            <div className="card habit-card">
                <div className="habit-content">
                    <div className="habit-left">
                        <h4 className="habit-title">{habit.name}</h4>
                        <p className='day-complete'>
                            {count}/{todayDay + 1} days
                        </p>
                    </div>
                    <div className="habit-right">
                        <div className="log-btn btn btn-light" onClick={setId}>
                            <img src="https://cdn-icons-png.flaticon.com/512/4992/4992462.png" alt="calendar" className="icon" />
                            Week View
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                            alt="delete"
                            className="icon delete-icon"
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
