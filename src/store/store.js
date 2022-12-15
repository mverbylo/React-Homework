import { configureStore } from '@reduxjs/toolkit';
import getTasksReducer from './slices/getTasksSlice';
import createTaskReducer from './slices/createTaskSlice';
import deleteTaskReducer from './slices/deleteTaskSlice';
import updateTaskReducer from './slices/updateTaskSlice';
const store = configureStore({
  reducer: {
    getTasks: getTasksReducer,
    createTask: createTaskReducer,
    deleteTask: deleteTaskReducer,
    updateTask: updateTaskReducer,
  },
});
export default store;
