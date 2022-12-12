import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const initialState = { task: '', taskList: [] };

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    onChange: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      state.task = '';
      state.taskList.push({id: v4(), text: action.payload, isChecked: false });
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(({ id }) => id !== action.payload);
    },
    checkTask: (state, action) => {
      state.taskList = state.taskList.map((taskItem) => ({
        ...taskItem,
        isChecked: taskItem.id === action.payload ? true : taskItem.isChecked,
      }));
    },
  },
});
const { reducer, actions } = toDoListSlice;
const { onChange, addTask, deleteTask, checkTask } = actions;
export { onChange, addTask, deleteTask, checkTask };
export default reducer;
