// Import necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the reducer for habits from local file
import habitReducer from './reducers/HabitReducer';

// Configure the Redux store
const store = configureStore({
    reducer: {
        // Define the habits slice of the state
        habits: habitReducer,
    },
});

// Export the configured store for use in the application
export default store;
