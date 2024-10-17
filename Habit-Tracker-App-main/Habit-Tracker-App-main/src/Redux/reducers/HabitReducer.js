import { createSlice } from "@reduxjs/toolkit";

let id = 1;

// Helper function to update a specific habit's weekLog based on the status
const updateHabitStatus = (state, dayId, isDoneValue) => {
  return state.map(habit => {
    if (habit.id === Number(localStorage.getItem("id"))) {
      const updatedWeekLog = habit.weekLog.map(log => 
        log.id === dayId ? { ...log, isDone: isDoneValue } : log
      );
      return { ...habit, weekLog: updatedWeekLog };
    }
    return habit;
  });
};

export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const today = new Date();
      let day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          { id: 0, day: "Sunday", dd: day, mm: month, yyyy: year, isDone: "" },
          { id: 1, day: "Monday", dd: day + 1, mm: month, yyyy: year, isDone: "" },
          { id: 2, day: "Tuesday", dd: day + 2, mm: month, yyyy: year, isDone: "" },
          { id: 3, day: "Wednesday", dd: day + 3, mm: month, yyyy: year, isDone: "" },
          { id: 4, day: "Thursday", dd: day + 4, mm: month, yyyy: year, isDone: "" },
          { id: 5, day: "Friday", dd: day + 5, mm: month, yyyy: year, isDone: "" },
          { id: 6, day: "Saturday", dd: day + 6, mm: month, yyyy: year, isDone: "" },
        ],
      };

      return [...state, habit];
    },

    deleteHabit: (state, action) => {
      return state.filter(habit => habit.id !== action.payload);
    },

    habitDone: (state, action) => {
      return updateHabitStatus(state, action.payload, true);
    },

    habitNotDone: (state, action) => {
      return updateHabitStatus(state, action.payload, false);
    },

    habitNone: (state, action) => {
      return updateHabitStatus(state, action.payload, "");
    },
  },
});

export const { addHabit, deleteHabit, habitDone, habitNotDone, habitNone } = habitSlice.actions;

export default habitSlice.reducer;
