import { configureStore } from '@reduxjs/toolkit';
import getTasksReducer from './slices/getTasksSlice';
import createTaskReducer from './slices/createTaskSlice';
const store = configureStore({
  reducer: { getTasks: getTasksReducer, createTask: createTaskReducer },
});
export default store;
