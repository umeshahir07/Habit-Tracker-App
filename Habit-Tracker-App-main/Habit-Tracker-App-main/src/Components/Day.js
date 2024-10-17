import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitNotDone } from "../Redux/reducers/HabitReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Day.css'; // Importing custom CSS

const Day = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();
  const dispatch = useDispatch();
  const date = new Date(day.yyyy, day.mm, day.dd);

  const done = () => {
    if (day.id > todayDay) {
      toast.warn('You cannot change your next day\'s status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    dispatch(habitDone(day.id));
  }

  const notDone = () => {
    if (day.id > todayDay) {
      toast.warn('You cannot change your next day\'s status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    dispatch(habitNotDone(day.id));
  }

  const none = () => {
    if (day.id > todayDay) {
      toast.warn('You cannot change your next day\'s status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    dispatch(habitNone(day.id));
  }

  return (
    <div className="day-container">
      <h5 className="day-title text-center">{day.day}</h5>
      <p className="day-date text-center">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
      <div className="icons-container">
        <i className={day.isDone === true ? "fa-solid fa-circle-check circle-icon active" : "fa-solid fa-circle-check circle-icon"} onClick={done}></i>
        <i className={day.isDone === false ? "fa-solid fa-circle-xmark circle-icon active" : "fa-solid fa-circle-xmark circle-icon"} onClick={notDone}></i>
        <i className={day.isDone === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"} onClick={none}></i>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Day;
