import React from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { addHabit } from '../Redux/reducers/HabitReducer';
import 'react-toastify/dist/ReactToastify.css';
import './AddHabit.css';  // Importing the custom CSS

const AddHabit = () => {
    const dispatch = useDispatch();

    const handleSave = (e) => {
        const habitName = document.getElementById('habitName').value;
        dispatch(addHabit(habitName));
        toast.success('Habit added successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        document.getElementById('habitName').value = '';
    }

    return (
        <div className="container add-habit-container mt-5">
            <div className="card add-habit-card p-4">
                <form action="">
                    <h1 style={{fontWeight:"bold"}} className="habit-title">Add New Habit</h1>
                    <div className="form-group mb-3">
                        <input 
                            type="text" 
                            className="form-control habit-input" 
                            id="habitName" 
                            placeholder="Enter Habit Name" 
                        />
                    </div>
                    <Link 
                        to="/" 
                        type="submit" 
                        className="btn btn-add-habit" 
                        onClick={handleSave}
                        style={{fontWeight:"bold"}}
                    >
                        Add Habit
                    </Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddHabit;
