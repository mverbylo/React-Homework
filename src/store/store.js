import { configureStore } from '@reduxjs/toolkit';
// import toDoListReducer from './slices/toDoListSlice';
import getTasksReducer from './slices/getTasksSlice';
const store = configureStore({
  reducer: { getTasks: getTasksReducer },
});
export default store;
