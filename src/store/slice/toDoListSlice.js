import { createSlice } from '@reduxjs/toolkit';

const initialState = { task: '', taskList: [] };

const langSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
   onChange: (state, action) =>{
    state.task= action.payload
   },
   addTask: (state, action) =>{
    state.task='',
    state.taskList= [...state.taskList,{ id: v4(), text: action.payload, isChecked: false }]
  },
   deleteTask:(state, action) =>{
   state.taskList= state.taskList.filter(({ id }) => id !== action.payload)
  },
  checkTask:(state, action) =>{
 
        taskList: state.taskList.map((taskItem) => ({
          ...taskItem,
          isChecked: taskItem.id === action.payload ? true : taskItem.isChecked,
        })),
      };
  },
});
const { reducer, actions } = langSlice;
const { setLang } = actions;
export { setLang };
export default reducer;
